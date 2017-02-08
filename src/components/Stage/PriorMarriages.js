import { PTPriorMarriage } from 'types/reactPropTypes'

import React, { PropTypes } from 'react'
import Field from 'components/controls/Field'
import Textfield from 'components/controls/Textfield/Textfield'

const PriorMarriages = ({ marriages, basicPath, caseId }) => {
  const { length } = marriages
  return (
    <div className='stage__field'>
      <div className='stage__fieldTitle'>{l('Prior marriages')}</div>
      <div className='stage__fieldControl'>
        <div className='stage__fieldColumn'>
          <div className='stage__fieldRow is-first'>
            <Field
              fieldName={`${basicPath}.${length}.name`}
              caseId={caseId}
              component={Textfield}
              placeholder={l('MM/DD/YYYY')}
              transformOut={value => maskString(value, '00/00/0000')}
              validators={[date(l('MM/DD/YYYY'))]}
              className='is-first'
              wrapperStyle={{ width: '150px', flexShrink: 0, marginRight: '-1px'}}
            />
            <Field
              fieldName={fields.P_PMARRIAGE_CITY}
              caseId={caseId}
              component={Textfield}
              placeholder={l('City')}
              wrapperStyle={{ width: '160px', marginRight: '-1px'}}
            />
            <Field
              fieldName={fields.P_PMARRIAGE_STATE}
              caseId={caseId}
              component={Textfield}
              placeholder={l('State')}
              wrapperStyle={{ width: '120px', marginRight: '-1px'}}
            />
            <Field
              fieldName={fields.P_PMARRIAGE_COUNTRY}
              caseId={caseId}
              component={Textfield}
              placeholder={l('Country')}
              className='is-last'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

PriorMarriages.propTypes = {
  marriages: PropTypes.arrayOf(),
  basicPath: PropTypes.string,
  caseId: PropTypes.string
}

export default PriorMarriages
