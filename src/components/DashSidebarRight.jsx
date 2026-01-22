import React from 'react'
import { BsPatchQuestionFill } from 'react-icons/bs'

const DashSidebarRight = () => {
    const basic = [
        { icon: <BsPatchQuestionFill />, text: "Question example" },
        { icon: <BsPatchQuestionFill />, text: "Question example" },
        { icon: <BsPatchQuestionFill />, text: "Question example" },
        { icon: <BsPatchQuestionFill />, text: "Question example" },
        { icon: <BsPatchQuestionFill />, text: "Question example" },
    ]

    const favorites = [
        { icon: <BsPatchQuestionFill />, text: "Question example" },
        { icon: <BsPatchQuestionFill />, text: "Question example" },
        { icon: <BsPatchQuestionFill />, text: "Question example" },
        { icon: <BsPatchQuestionFill />, text: "Question example" },
        { icon: <BsPatchQuestionFill />, text: "Question example" },
        { icon: <BsPatchQuestionFill />, text: "Question example" },
        { icon: <BsPatchQuestionFill />, text: "Question example" },
        { icon: <BsPatchQuestionFill />, text: "Question example" },
    ]
    return (
        <aside className='right_sidebar'>

            <div className="card h-100">
                <div className="card-body">
                    <div>
                        <h6>Today</h6>
                    </div>
                    <ul className='p-0 mt-3'>
                        {basic.map((item, i) => (
                            <li key={i}><a href="">{item.icon} &nbsp; {item.text}</a></li>
                        ))}
                    </ul>
                    <hr />
                    <div>
                        <h6>Yesterday</h6>
                    </div>
                    <ul className='p-0'>
                        {favorites.map((item, i) => (
                            <li key={i}><a href="">{item.icon} &nbsp; {item.text}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default DashSidebarRight
