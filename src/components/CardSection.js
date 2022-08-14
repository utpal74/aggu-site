
import React from "react"

export default function CardSection() {

    const [style, setStyle] = React.useState({
        'fontSize': `1.5rem`,
        position: 'relative',
        transition: 'all 1s ease',
        'transformStyle': 'preserve-3d',
        isFlipped: false,
    })

    const rotateStyle = {
        transform: `rotateY(${style.isFlipped ? 0 : 180}deg)`,
    }

    function handleClick() {
       setStyle((prevStyle) => {
        return {
            ...prevStyle,
            ...rotateStyle,
            isFlipped: !prevStyle.isFlipped,
        }
       })
    }

    return (
        <div className="card-container">
            <div  className="post-card-container">
                <div className="post-card" style={style} >
                    <div className="p_front">Hello people, Welcome to my site. <br></br>
                        <span>Wanna know more about me ? 
                            click the button below to flip it 👇</span>
                    </div>
                    <div className="p_back">
                        <h3>Agastya Utpal Mishra</h3><br></br>
                        DOB: 16th July 2022<br></br>
                        Place: Hyderabad, India<br></br>
                        <hr></hr>
                        Quote: Blessed to have a cool dad 😍 and
                        cute mumma😘, and I love them in all universe 💕
                    </div>
                </div>
            </div>
            <button onClick={handleClick} id="filp-btn">flip me</button>
        </div>
    )
}
