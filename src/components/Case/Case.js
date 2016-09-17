import React, {PropTypes} from 'react'
import Link from 'react-router/Link'
import ProgressBar from 'components/ProgressBar/ProgressBar'
import { PAYMENT_NONE, PAYMENT_FULL } from 'constants/paymentStatuses'
import './Case.less'

const Case = ({
  id,
  pName,
  rName,
  stage = 0,
  progress = 0,
  paymentStatuse = PAYMENT_NONE,
  onDownload,
  linkOptions }) => (
  <Link {...linkOptions} to={`/${id}/step-${stage}`}>
    <div className='case'>
      <div className='case__pName'>{pName}</div>
      <div className='case__rName'>{rName}</div>
      <ProgressBar progress={progress} />

    </div>
  </Link>
)

Case.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stage: PropTypes.number,
  progress: PropTypes.number,
  paymentStatuse: PropTypes.oneOf([PAYMENT_NONE, PAYMENT_FULL]),
  onPayment: PropTypes.func,
  onDownload: PropTypes.func
}

export default Case
