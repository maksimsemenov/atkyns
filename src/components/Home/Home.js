import React from 'react'
import { connect } from 'react-redux'
import { Match } from 'react-router'
import classNames from 'classnames'
import Cases from 'components/Cases/Cases'
import Trash from 'components/Trash/Trash'
import TrashLink from 'components/TrashLink/TrashLink'
import { getActiveCasesNumber, getDeletedCasesNumber } from 'reducers'
import l from 'utils/local'

import './Home.less'

const Home = ({ isListEmpty = false, isTrashEmpty = true }) => {
  const tittleClasses = classNames({
    'home__tittle': true,
    'home__tittle--emptyList': isListEmpty
  })
  const tittle = isListEmpty ? l('%homeHeaderEmpty') : l('%homeHeader')
  return (
    <div className='home'>
      <div className='home__content'>
        <h1 className={tittleClasses}>{tittle}</h1>
        <Cases />
      </div>
      {isTrashEmpty ? <TrashLink /> : null}
      <Match exactly pattern='/trash' component={Trash} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isListEmpty: getActiveCasesNumber(state) === 0,
  isTrashEmpty: getDeletedCasesNumber(state) === 0
})

export default connect(mapStateToProps)(Home)
