import React from 'react'
import { MdContentCopy } from 'react-icons/md'

export default function Offer(  ) {
    return (
        <div className="special-offers">
            <video autoPlay muted loop src={`${process.env.PUBLIC_URL}/spring_days.mp4`}></video>
            <div className="offer">
                <h2>Spring Days</h2>
                <p>-50% sur la 2ème paire avec le code promo :<br/>SPRING <MdContentCopy/></p>
            </div>
        </div>
    )
}