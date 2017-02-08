/* @flow */
import { PTPriorMarriage } from 'types/reactPropTypes'

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getCaseDataField } from 'reducers'
import l from 'utils/local'
import Field from 'components/controls/Field'
import Textfield from 'components/controls/Textfield/Textfield'
import Selectbox from 'components/controls/Selectbox/Selectbox'
import Selector from 'components/controls/Selector/Selector'
import maskString from 'utils/maskString'
import { date, zip } from 'utils/validators'
import * as fields from 'constants/dataFieldNames'
import US_STATES from 'constants/usStates'

const Petitioner = ({
  caseId,
  pStatus,
  relationship,
  rUSStatus,
  pMaritalStatus,
  priorMarriages
}) => (
  <div className='stage'>
    <div className='stage__field'>
      <div className='stage__fieldTitle'>{l('Your full name')}</div>
      <div className='stage__fieldDescription'></div>
      <div className='stage__fieldControl'>
        <div className='stage__fieldRow is-first is-last'>
          <Field
            fieldName={fields.P_FIRST_NAME}
            caseId={caseId}
            component={Textfield}
            placeholder={l('First')}
            className='is-first'
            wrapperStyle={{ marginRight: '-1px'}}
          />
          <Field
            fieldName={fields.P_MIDDLE_NAME}
            caseId={caseId}
            component={Textfield}
            placeholder={l('Middle')}
            wrapperStyle={{ marginRight: '-1px'}}
          />
          <Field
            fieldName={fields.P_FAMILY_NAME}
            caseId={caseId}
            component={Textfield}
            placeholder={l('Last')}
            className='is-last'
          />
        </div>
      </div>
    </div>
    <div className='stage__field'>
      <div className='stage__fieldTitle'>{l('Other names')}</div>
      <div className='stage__fieldDescription'></div>
      <div className='stage__fieldControl'>
        <Field
          fieldName={fields.P_OTHER_NAME}
          caseId={caseId}
          component={Textfield}
          placeholder={l('Other names')}
          wrapperStyle={{ width: '400px'}}
        />
      </div>
    </div>
    {relationship === 'spouse' &&
      <div className='stage__field'>
        <div className='stage__fieldTitle'>{l('Name in your native alphabet')}</div>
        <div className='stage__fieldDescription'></div>
        <div className='stage__fieldControl'>
          <Field
            fieldName={fields.P_NATIVE_NAME}
            caseId={caseId}
            component={Textfield}
            placeholder={l('Name in your native alphabet')}
            wrapperStyle={{ width: '400px'}}
          />
        </div>
      </div>
    }
    <div className='stage__field'>
      <div className='stage__fieldTitle'>{l('Date of birth')}</div>
      <div className='stage__fieldDescription'></div>
      <div className='stage__fieldControl'>
        <Field
          fieldName={fields.P_BIRTH_DATE}
          caseId={caseId}
          component={Textfield}
          wrapperStyle={{ width: '150px'}}
          placeholder={l('MM/DD/YYYY')}
          transformOut={value => maskString(value, '00/00/0000')}
          validators={[date(l('MM/DD/YYYY'))]}
        />
      </div>
    </div>
    {/* Address */}
    <div className='stage__field'>
      <div className='stage__fieldTitle'>{l('Address')}</div>
      <div className='stage__fieldDescription'></div>
      <div className='stage__fieldControl' style={{ width: '500px' }}>
        <div className='stage__fieldColumn'>
          <div className='stage__fieldRow is-first' style={{ marginBottom: '-1px' }}>
            <Field
              fieldName={fields.P_ADDRESS_STREET}
              caseId={caseId}
              component={Textfield}
              wrapperStyle={{ width: '80%', marginRight: '-1px' }}
              placeholder={l('Street adress')}
              className='is-first'
            />
            <Field
              fieldName={fields.P_ADDRESS_APT_NUMBER}
              caseId={caseId}
              component={Textfield}
              wrapperStyle={{ width: '20%' }}
              placeholder={l('Apt')}
              className='is-last'
            />
          </div>
          <div className='stage__fieldRow' style={{ marginBottom: '-1px' }}>
            <Field
              fieldName={fields.P_ADDRESS_ZIP}
              caseId={caseId}
              component={Textfield}
              wrapperStyle={{ width: '30%', marginRight: '-1px'}}
              placeholder={l('Zip code')}
              validators={[zip]}
            />
            <Field
              fieldName={fields.P_ADDRESS_CITY}
              caseId={caseId}
              component={Textfield}
              wrapperStyle={{ width: '70%' }}
              placeholder={l('City')}
            />
          </div>
          <div className='stage__fieldRow is-last'>
            <Field
              fieldName={fields.P_ADDRESS_STATE}
              caseId={caseId}
              component={Textfield}
              wrapperStyle={{ width: '50%', marginRight: '-1px' }}
              placeholder={l('State')}
              className='is-first'
            />
            <Field
              fieldName={fields.P_ADDRESS_COUNTRY}
              caseId={caseId}
              component={Textfield}
              wrapperStyle={{ width: '50%' }}
              placeholder={l('Country')}
              className='is-last'
            />
          </div>
        </div>
      </div>
    </div>
    <div className='stage__field'>
      <div className='stage__fieldTitle'>{l('Your gender')}</div>
      <div className='stage__fieldControl'>
        <Field
          fieldName={fields.P_GENDER}
          caseId={caseId}
          component={Selector}
          options={[
            { value: 'male', name: l('Male') },
            { value: 'female', name: l('Female') }
          ]}
        />
      </div>
    </div>
    {/* Marriages */}
    <div className='stage__field'>
      <div className='stage__fieldTitle'>{l('Marital status')}</div>
      <div className='stage__fieldControl'>
        <Field
          fieldName={fields.P_MARITAL_STATUS}
          caseId={caseId}
          component={Selector}
          options={[
            { value: 'married', name: l('Married') },
            { value: 'single', name: l('Single') },
            { value: 'widowed', name: l('Widowed') },
            { value: 'divorced', name: l('Divorced') }
          ]}
        />
      </div>
    </div>
    {pMaritalStatus === 'married' &&
      <div className='stage__field'>
        <div className='stage__fieldTitle'>{l('Date and place of present marriage')}</div>
        <div className='stage__fieldControl'>
          <div className='stage__fieldRow is-first is-last'>
            <Field
              fieldName={fields.P_PMARRIAGE_DATE}
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
    }
    <div className='stage__field'>
      <div className='stage__fieldTitle'>{l('Prior marriages')}</div>
      <div className='stage__fieldControl'>
        <div className='stage__fieldColumn'>
          <div className='stage__fieldRow is-first'>
            <Field
              fieldName={`petitioner.marriages.prior.${priorMarriages.length}.name.first`}
              caseId={caseId}
              component={Textfield}
              placeholder={l('Spouse first name')}
              className='is-first'
              wrapperStyle={{ width: '150px', flexShrink: 0, marginRight: '-1px'}}
            />
            <Field
              fieldName={`petitioner.marriages.prior.${priorMarriages.length}.name.family`}
              caseId={caseId}
              component={Textfield}
              placeholder={l('Last (maiden) name')}
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
  </div>
)

Petitioner.propTypes = {
  caseId: PropTypes.string.isRequired,
  pStatus: PropTypes.string.isRequired,
  relationship: PropTypes.string.isRequired,
  rUSStatus: PropTypes.bool,
  pMaritalStatus: PropTypes.string,
  priorMarriages: PropTypes.arrayOf(PTPriorMarriage)
}

const mapStateToProps = (state, ownProps) => ({
  pStatus: getCaseDataField(state, ownProps.caseId, fields.P_STATUS_TYPE),
  relationship: getCaseDataField(state, ownProps.caseId, fields.RELASHIONSHIP),
  rUSStatus: getCaseDataField(state, ownProps.caseId, fields.R_USV_CURRENT_STATUS),
  pMaritalStatus: getCaseDataField(state, ownProps.caseId, fields.P_MARITAL_STATUS),
  priorMarriages: getCaseDataField(state, ownProps.caseId, 'petitioner.marriages.prior')
})

export default connect(mapStateToProps)(Petitioner)
