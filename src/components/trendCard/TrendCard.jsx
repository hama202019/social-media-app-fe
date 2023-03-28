import React from 'react'
import './TrendCard.css'
import {trendsData} from '../../data/trendsData'

const TrendCard = () => {
  return (
    <div className='TrendCard'>
        <h3>Trends</h3>
        {trendsData.map((trend, index) => {
            return(
                <div className="trend" key={index}>
                    <span>#{trend.name}</span>
                    <span>{trend.shares}k shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard