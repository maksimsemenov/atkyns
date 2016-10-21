import React from 'react'
import { connect } from 'react-redux'
import { Match } from 'react-router'
import { saveAs } from 'file-saver'
import classNames from 'classnames'
import throttle from 'lodash/throttle'
import Cases from 'components/Cases/Cases'
import Trash from 'components/Trash/Trash'
import TrashLink from 'components/TrashLink/TrashLink'
import { getActiveCasesNumber, getDeletedCasesNumber } from 'reducers'
import downloadFiles from 'download'
import l from 'utils/local'
import dumbData from 'constants/dumbData'
import { HOST } from 'constants/default'

import './Home.less'

const download = (data) => {
  fetch(HOST,  {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => res.blob())
  .then(blob => saveAs(blob, 'download.zip'))
}
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
      <button onClick={() => throttle(downloadFiles(), 2000)}>Download</button>
      <button onClick={() => download(dumbData)}>Download from server</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isListEmpty: getActiveCasesNumber(state) === 0,
  isTrashEmpty: getDeletedCasesNumber(state) === 0
})

export default connect(mapStateToProps)(Home)
