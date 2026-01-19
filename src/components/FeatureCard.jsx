import React from 'react'

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="card featureCard">
            <div className="card-body">
                <div>{icon}</div>
                <h6>{title}</h6>
                <p className='small text-secondary m-0'>{description}</p>
            </div>
        </div>
    )
}

export default FeatureCard
