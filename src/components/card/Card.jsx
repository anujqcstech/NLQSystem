import React from 'react'

const Card = ({ subTitle, title, description }) => {
    return (
        <div className='dashCard card'>
            <div className="card-body">
                <center>
                    <p><small>{subTitle}</small></p>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </center>
            </div>
        </div>
    )
}

export default Card
