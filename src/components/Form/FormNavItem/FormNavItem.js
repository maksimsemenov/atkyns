import React, { PropTypes } from 'react'
import Link from 'react-router/Link'
import { STAGE_OVERVIEW, STAGE_RELATIVE, STAGE_PETITIONER, STAGE_PETITION } from 'constants/stages'
import l from 'utils/local'
import './FormNavItem.less'


const FormNavItem = ({ stage, caseId, progress = 0, active = false }) =>
  <li className='formNavItem'>
    <Link
      to={`/case/${caseId}/${stage}`}
      className='formNavItem__link'
      activeClassName='is-active'
      activeOnlyWhenExact
    >{l(`%stage-${stage}`)}
    </Link>
  </li>

FormNavItem.propTypes = {
  stage: PropTypes.oneOf([STAGE_OVERVIEW, STAGE_RELATIVE, STAGE_PETITIONER, STAGE_PETITION]).isRequired,
  caseId: PropTypes.string.isRequired,
  progress: PropTypes.number,
  active: PropTypes.bool
}

export default FormNavItem
