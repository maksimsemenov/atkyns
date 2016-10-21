import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import l from 'utils/local'
import './StageOverview.less'

const StageOverview = ({
  caseId,
  status,
  relation,
  isInsideUs,
  onFieldChange }) => {
  return (
    <div className='sOverview'>
      <span className='sOverview__text'>{l('%sOverview-iam')}</span>
      <span className='sOverview__text'>{l('%sOverview-iapply')}</span>
      <span className='sOverview__text'>{l('%sOverview-wholives')}</span>

    </div>
  )
}

StageOverview.propTypes = {
  caseId: PropTypes.string.isRequired,
  data: PropTypes.object
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  onFieldChange: () => {}
})

export default connect(mapStateToProps, mapDispatchToProps)(StageOverview)
