import { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getCaseDataField, getCaseDataFieldError } from 'reducers'
import { actions } from 'reducers/cases'
import { validateValue } from 'utils/validators'

const Field = ({
  fieldName,
  caseId,
  component,
  effects,
  validators,
  ...rest }) => {
    return (
  component({...rest}))}

Field.propTypes = {
  fieldName: PropTypes.string.isRequired,
  caseId: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number
  ]),
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  effects: PropTypes.func,
  validators: PropTypes.arrayOf(PropTypes.func)
}

const mapStateToProps = (state, ownProps) => {
  const { fieldName, caseId } = ownProps
  return {
    value: getCaseDataField(state, caseId, fieldName),
    error: getCaseDataFieldError(state, caseId, fieldName)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value, error) => {
    const { fieldName, caseId, effects, validators } = ownProps
    const patch = effects ?
      [{ path: fieldName, value }, ...effects(value)] :
      { path: fieldName, value }
      
    dispatch(actions.updateData(caseId, patch))
    if (validators && error) {
      const vError = validateValue(value, validators)
      if (vError && vError !== error) {
        dispatch(actions.setFieldError(caseId, fieldName, vError))
      } else if (!vError) {
        dispatch(actions.removeFieldError(caseId, fieldName))
      }
    }
  },
  onBlur: (value) => {
    const { fieldName, caseId, validators, error } = ownProps
    if (validators && !error) {
      const vError = validateValue(value, validators)
      if (vError) {
        dispatch(actions.setFieldError(caseId, fieldName, vError))
      }
    }
  }
})

const mergeProps = (mapStateToProps, mapDispatchToProps, ownProps) => ({
  ...ownProps,
  ...mapStateToProps,
  ...mapDispatchToProps,
  onChange: (value) => mapDispatchToProps.onChange(value, mapStateToProps.error)
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Field)
