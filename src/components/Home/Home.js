import React from 'react'
import { connect } from 'react-redux'
import Cases from 'components/Cases/Cases'
import { getCasesNumber } from 'reducers'
import l from 'utils/local'

import './Home.less'

const Home = ({ isListEmpty = false }) => (
  <div className='home'>
    <h1 className={`home__header${isListEmpty ? ' home__header--emptyList' : ''}`}>{isListEmpty ? l('%homeHeaderEmpty') : l('%homeHeader')}</h1>
    <Cases />
  </div>
)

const mapStateToProps = (state) => ({
  isListEmpty: getCasesNumber(state) === 0
})

export default connect(mapStateToProps)(Home)
