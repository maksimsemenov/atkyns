import React, {PropTypes} from 'react'
import Link from 'react-router/Link'
import ProgressBar from 'components/ProgressBar/ProgressBar'
import { PAYMENT_NONE, PAYMENT_FULL } from 'constants/paymentStatuses'
import l from 'utils/local'
import { price } from 'constants/default'
import './Case.less'

const Case = ({
  id,
  pName,
  rName,
  stage = 0,
  progress = 0,
  paymentStatuse = PAYMENT_NONE,
  onPayment,
  onDownload,
  linkOptions }) => {
    return (
      <Link className='case' {...linkOptions} to={`/case-${id}/step-${stage}`}>
        <div className='case__info'>
          <div className='case__pName'>{pName}</div>
          <div className='case__rName'>{rName}</div>
        </div>
        <div className='case__controls'>
          { progress !== 100 ?
            <ProgressBar progress={progress} appearance='case' /> :
            paymentStatuse === PAYMENT_NONE ?
            <button className='case__button' onClick={() => onPayment(id)}>{l('%payment')}</button> :
            <button className='case__button' onClick={() => onDownload(id)}>{l('%download')}</button>
          }
        </div>
      </Link>
)}

Case.propTypes = {
  id: PropTypes.string.isRequired,
  pName: PropTypes.string.isRequired,
  rName: PropTypes.string,
  stage: PropTypes.number,
  progress: PropTypes.number,
  paymentStatuse: PropTypes.oneOf([PAYMENT_NONE, PAYMENT_FULL]),
  onPayment: PropTypes.func,
  onDownload: PropTypes.func
}

export default Case
