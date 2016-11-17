import React, { PropTypes } from 'react'
import Selector from 'components/controls/Selector/Selector'
import Field from 'components/controls/Field'
import ButtonLink from 'components/controls/ButtonLink/ButtonLink'
import l from 'utils/local'
import { STAGE_PETITIONER } from 'constants/stages'
import { RELASHIONSHIP, P_STATUS_TYPE, R_USV_CURRENT_STATUS } from 'constants/dataFieldNames'

const pStatusOptions = [
  { value: 'citizen', name: l('US Citizen') },
  { value: 'resident', name: l('Permanent resident') }
]
const relationshipOptions = [
  { value: 'spouse', name: l('Spouse') },
  { value: 'parent', name: l('Parent') },
  { value: 'child', name: l('Child') },
  // { value: 'daughter', name: l('Daughter') },
  { value: 'brother', name: l('Brother') },
  { value: 'sister', name: l('Sister') },
]
const rUSStatusOprions = [
  { value: true, name: l('Yes') },
  { value: false, name: l('No') },
]

const Overview = ({ caseId }) => {
  return (
    <div className='stage'>
      <div className='stage__field'>
        <div className='stage__fieldTitle'>{l('Your current status')}</div>
        <div className='stage__fieldDescription'></div>
        <div className='stage__fieldControl'>
          <Field
            fieldName={P_STATUS_TYPE}
            caseId={caseId}
            component={Selector}
            options={pStatusOptions}
          />
        </div>
      </div>
      <div className='stage__field'>
        <div className='stage__fieldTitle'>{l('Relationship')}</div>
        <div className='stage__fieldControl'>
          <Field
            fieldName={RELASHIONSHIP}
            caseId={caseId}
            component={Selector}
            options={relationshipOptions}
          />
        </div>
      </div>
      <div className='stage__field'>
        <div className='stage__fieldTitle'>{l('Is you relative now in United States?')}</div>
        <div className='stage__fieldControl'>
          <Field
            fieldName={R_USV_CURRENT_STATUS}
            caseId={caseId}
            component={Selector}
            options={rUSStatusOprions}
          />
        </div>
      </div>
      <div className='stage__controls'>
        <ButtonLink to={`/case/${caseId}/${STAGE_PETITIONER}`}>Continue</ButtonLink>
      </div>
    </div>
  )
}

Overview.propTypes = {
  caseId: PropTypes.string.isRequired
}


export default Overview
