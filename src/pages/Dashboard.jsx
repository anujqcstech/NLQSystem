import React from 'react'
import HeaderDashboard from '../components/HeaderDashboard'
import ChatbotMasterCard from '../components/ChatbotMasterCard'
import QuickExampleCard from '../components/QuickExampleCard'



const Dashboard = () => {
    return (
        <section className='dashboard'>
            <HeaderDashboard />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mt-5">
                        <ChatbotMasterCard headerText={"Natural Language Query"} />
                    </div>
                    <div className="col-lg-4 mt-5">
                        <QuickExampleCard headerText={'Quick Examples'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
