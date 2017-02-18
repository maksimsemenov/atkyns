import React, { PropTypes } from 'react'
import Field from 'components/controls/Field'
import Textfield from 'components/controls/Textfield/Textfield'
import maskString from 'utils/maskString'
import { date } from 'utils/validators'
import l from 'utils/local'

const PriorMarriage = ({ caseId, spouseId, marriageId } : {
  caseId: string,
  spouseId: string,
  marriageId: string
}) => (
  <div className='stage__fieldControl'>
    <div className='stage__fieldColumn'>
      <div className='stage__fieldRow is-first'>
        <Field
          fieldName={`persons.${spouseId}.name.family`}
          caseId={caseId}
          component={Textfield}
          label='Spouse family name'
          className='is-first'
          wrapperStyle={{ width: '150px', flexShrink: 0, marginRight: '-1px'}}
        />
        <Field
          fieldName={`persons.${spouseId}.name.first`}
          caseId={caseId}
          component={Textfield}
          label='Spouse first name'
          className='is-last'
          wrapperStyle={{ width: '150px', flexShrink: 0, marginRight: '-1px'}}
        />
      </div>
      <div className='stage__fieldRow'>
        <Field
          fieldName={`marriages.${marriageId}.start.date`}
          caseId={caseId}
          component={Textfield}
          placeholder={l('MM/DD/YYYY')}
          transformOut={value => maskString(value, '00/00/0000')}
          validators={[date(l('MM/DD/YYYY'))]}
          label='Date of marriage'
          wrapperStyle={{ width: '150px', flexShrink: 0, marginRight: '-1px'}}
        />
        <Field
          fieldName={`marriages.${marriageId}.start.place`}
          caseId={caseId}
          component={Textfield}
          label='Place of marriage'
          wrapperStyle={{ width: '150px', flexShrink: 0, marginRight: '-1px'}}
        />
      </div>
      <div className='stage__fieldRow is last'>
        <Field
          fieldName={`marriages.${marriageId}.end.date`}
          caseId={caseId}
          component={Textfield}
          placeholder={l('MM/DD/YYYY')}
          transformOut={value => maskString(value, '00/00/0000')}
          validators={[date(l('MM/DD/YYYY'))]}
          label='Date of termination of marriage'
          wrapperStyle={{ width: '150px', flexShrink: 0, marginRight: '-1px'}}
        />
        <Field
          fieldName={`marriages.${marriageId}.end.place`}
          caseId={caseId}
          component={Textfield}
          label='Place of termination of marriage'
          wrapperStyle={{ width: '150px', flexShrink: 0, marginRight: '-1px'}}
        />
      </div>
    </div>
  </div>
)

PriorMarriage.propTypes = {

}

export default PriorMarriage
