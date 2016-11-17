import React, { PropTypes } from 'react'
import { STAGE_OVERVIEW, STAGE_PETITIONER, STAGE_RELATIVE, STAGE_PETITION } from 'constants/stages'
import Overview from 'components/Stage/Overview'
import Petitioner from 'components/Stage/Petitioner'
// import StageRelative from 'components/Stage/StageRelative/StageRelative'
// import StageOther from 'components/Stage/StageOther/StageOther'
import './Stage.less'

const Stage = ({ caseId, stage = STAGE_OVERVIEW, data }) => {
  switch (stage) {
    case STAGE_PETITIONER:
      return <Petitioner caseId={caseId} />
    // case STAGE_RELATIVE:
    //   return <StageRelative caseId={caseId} />
    // case STAGE_PETITION:
    //   return <StageOther caseId={caseId} />
    default:
      return <Overview caseId={caseId} />
  }
  // return null
}

Stage.propTypes = {
  caseId: PropTypes.string.isRequired,
  stage: PropTypes.oneOf([STAGE_OVERVIEW, STAGE_PETITIONER, STAGE_RELATIVE, STAGE_PETITION])
}

export default Stage
