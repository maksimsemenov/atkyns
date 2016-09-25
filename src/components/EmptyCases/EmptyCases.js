import React from 'react'
import l from 'utils/local'
import Print from './Print'
import Fill from './Fill'
import './EmptyCases.less'

const EmptyCases = () => (
  <div className='emptyCases'>
    <div className='emptyCases__step'>
      <div className='emptyCases__stepImage'></div>
      <h2 className='emptyCases__stepTitle'>{l('%emptyStepOneTitle')}</h2>
      <p className='emptyCases__stepText'>{l('%emptyStepOneText')}</p>
    </div>
    <div className='emptyCases__step'>
      <div className='emptyCases__stepImage'><Fill /></div>
      <h2 className='emptyCases__stepTitle'>{l('%emptyStepTwoTitle')}</h2>
      <p className='emptyCases__stepText'>{l('%emptyStepTwoText')}</p>
    </div>
    <div className='emptyCases__step'>
      <div className='emptyCases__stepImage'><Print /></div>
      <h2 className='emptyCases__stepTitle'>{l('%emptyStepThreeTitle')}</h2>
      <p className='emptyCases__stepText'>{l('%emptyStepThreeText')}</p>
    </div>
  </div>
)

export default EmptyCases
