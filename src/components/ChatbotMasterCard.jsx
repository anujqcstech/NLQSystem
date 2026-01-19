import React from 'react'
import { FiSend } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";



const ChatbotMasterCard = ({ headerText }) => {
    return (
        <div className='ChatbotMasterCard card'>
            <div className="card-header"><h6><FiMessageSquare /> {headerText}</h6></div>
            <div className="card-body">
                All chats will be here...
            </div>
            <div className="card-footer d-flex gap-2">
                <input type="text" className="form-control" placeholder='e.g., show top 10 suppliers by payment...' />
                {/* <textarea name="" id="" className='form-control' rows={1} placeholder='e.g., show top 10 suppliers by payment...'></textarea> */}
                <button className="btn btn-primary" disabled><FiSend className='text-light' /></button>
            </div>
        </div>
    )
}

export default ChatbotMasterCard
