import React, { PropTypes } from 'react'
import Link from 'react-router/Link'
import FormNavItem from 'components/Form/FormNavItem/FormNavItem'
import { STAGE_OVERVIEW, STAGE_PETITIONER, STAGE_RELATIVE, STAGE_PETITION } from 'constants/stages'
import './FormNav.less'

const FormCloseBtn = () =>
  <Link className='formNav__closeBtn' to='/'>
    <svg viewBox='0 0 30 30' className='formNav__closeIcon'>
      <rect x='8' y='8' width='6' height='6' rx='1' ry='1' />
      <rect x='16' y='8' width='6' height='6' rx='1' ry='1' />
      <rect x='8' y='16' width='6' height='6' rx='1' ry='1' />
      <rect x='16' y='16' width='6' height='6' rx='1' ry='1' />
    </svg>
  </Link>


const FormNav = ({ stages, caseId, stage, caseName }) => {
  return (
    <div className='formNav'>
      <div className='formNav__header'>
      </div>
      <FormCloseBtn />
      <ul className='formNav__list'>
        {stages.map((s, i) =>
          <FormNavItem
            key={i}
            stage={s.name}
            caseId={caseId}
            progress={stage.progress}
            active={s.name === stage}
          />
        )}
      </ul>
    </div>
  )
}
FormNav.propTypes = {
  stages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    progress: PropTypes.number
  })).isRequired,
  caseId: PropTypes.string.isRequired,
  stage: PropTypes.oneOf([STAGE_OVERVIEW, STAGE_PETITIONER, STAGE_RELATIVE, STAGE_PETITION]).isRequired,
  caseName: PropTypes.string
}

export default FormNav
