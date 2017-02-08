import React, {PropTypes} from 'react'
import Link from 'react-router-dom/Link'
import ProgressBar from 'components/ProgressBar/ProgressBar'
import CaseDelete from './CaseDelete'
import { PAYMENT_NONE, PAYMENT_FULL } from 'constants/paymentStatuses'
import { STAGE_OVERVIEW, STAGE_PETITIONER, STAGE_RELATIVE, STAGE_PETITION } from 'constants/stages'
import l from 'utils/local'
import { price } from 'constants/default'
import './Case.less'

const Case = ({
  id,
  pName,
  rName,
  stage = STAGE_OVERVIEW,
  progress = 0,
  paymentStatuse = PAYMENT_NONE,
  onCasePayment,
  onCaseDownload,
  onCaseDelete
}) => {
  return (
    <div className='case'>
      <Link className='case__link' to={`/case/${id}/${stage}`}>
        <div className='case__info'>
          <div className='case__pName'>{pName}</div>
          <div className='case__rName'>{rName}</div>
        </div>
        <div className='case__controls'>
          {progress !== 100 ?<ProgressBar progress={progress} appearance='case' /> : null}
        </div>
      </Link>
      <CaseDelete onClick={() => onCaseDelete(id)} />
      {progress === 100 && paymentStatuse === PAYMENT_NONE ?
        <button className='case__button' onClick={() => onCasePayment(id)}>{`${l('%payment')} — $${price}`}</button> : null}
      {progress === 100 && paymentStatuse === PAYMENT_FULL ?
        <button className='case__button' onClick={() => onCaseDownload(id)}>{l('%download')}</button> : null}
    </div>
  )
}

Case.propTypes = {
  id: PropTypes.string.isRequired,
  pName: PropTypes.string.isRequired,
  rName: PropTypes.string,
  stage: PropTypes.oneOf([STAGE_OVERVIEW, STAGE_PETITIONER, STAGE_RELATIVE, STAGE_PETITION]),
  progress: PropTypes.number,
  paymentStatuse: PropTypes.oneOf([PAYMENT_NONE, PAYMENT_FULL]),
  onCasePayment: PropTypes.func,
  onCaseDownload: PropTypes.func,
  onCaseDelete: PropTypes.func.isRequired
}

export default Case
