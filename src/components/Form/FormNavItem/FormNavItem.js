import React, { PropTypes } from 'react'
import Link from 'react-router-dom/Link'
import Route from 'react-router-dom/Route'
import { STAGE_OVERVIEW, STAGE_RELATIVE, STAGE_PETITIONER, STAGE_PETITION } from 'constants/stages'
import l from 'utils/local'
import './FormNavItem.less'


const FormNavItem = ({ stage, caseId, progress = 0, active = false }) => {
  const path = `/case/${caseId}/${stage}`

  return (
    <li className='formNavItem'>
      <Route path={path} exact={true} children={({ match }) =>
        <Link
          to={`/case/${caseId}/${stage}`}
          className={`formNavItem__link${match ? ' is-active' : ''}`}
        >{l(`%stage-${stage}`)}
        </Link>
      }/>
    </li>
  )
  }

FormNavItem.propTypes = {
  stage: PropTypes.oneOf([STAGE_OVERVIEW, STAGE_RELATIVE, STAGE_PETITIONER, STAGE_PETITION]).isRequired,
  caseId: PropTypes.string.isRequired,
  progress: PropTypes.number,
  active: PropTypes.bool
}

export default FormNavItem
