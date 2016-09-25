import React, {PropTypes} from 'react'
import Link from 'react-router/Link'
import ProgressCircle from 'components/ProgressCircle/ProgressCircle'
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
  onDownload,
  linkOptions }) => {
    const buttonPath = `/case-${id}/${paymentStatuse === PAYMENT_NONE ? 'payment' : 'download'}`
    const buttonLabel = paymentStatuse === PAYMENT_NONE ? `${l('%payment')} - $${price}` : '%download'
    return (
      <Link className='case' {...linkOptions} to={`/case-${id}/step-${stage}`}>
        <ProgressCircle progress={progress} appearance='case' />
        <div className='case__body'>
          <div className='case__info'>
            <div className='case__pName'>{pName}</div>
            <div className='case__rName'>{rName}</div>
          </div>
          <div className='case__controls'>
            <button
              to={buttonPath}
              className={`case__button${progress !== 100 ? ' is-disabled' : ''}`}
            >{l(buttonLabel)}</button>
            {progress !== 100 ?
              <div className='case__tip'>{l('%paymentTip')}</div> :
              null
            }
          </div>
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
