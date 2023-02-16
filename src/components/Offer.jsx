import React, {useState} from 'react'
import { MdContentCopy } from 'react-icons/md'

export default function Offer(  ) {
    const [click, setClick] = useState( false )
    const handleCopy = () => {
        navigator.clipboard.writeText('SPRING')
        setClick(true)
    }

    return (
        <div className="special-offers">
            <video autoPlay muted loop src={`${process.env.PUBLIC_URL}/spring_days.mp4`}></video>
            <div className="offer">
                <h2>Spring Days</h2>
                <p>-50% sur la 2ème paire avec le code promo :<br/><span onClick={handleCopy}>SPRING <MdContentCopy/></span></p>
                {click &&
                    <p>Le code promo à bien été copier dans votre presse papier.</p>
                }
            </div>
        </div>
    )
}