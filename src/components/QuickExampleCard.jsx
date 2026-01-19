import React from 'react'

const QuickExampleCard = ({ headerText, quickAskQues = [1, 2, 3, 4] }) => {
    return (
        <div className="card">
            <div className="card-header"><h6>{headerText}</h6></div>
            <div className="card-body">
                {quickAskQues.map((item, i) => (
                    <div key={i} className='quickAsk cursor-pointer'>Show top 10 suppliers payment</div>
                ))}
            </div>
        </div>
    )
}

export default QuickExampleCard
