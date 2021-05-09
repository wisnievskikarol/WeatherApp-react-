import React from 'react'
import './Alert.css'
function Alert(props) {
    return (
        <div className = "Alert_container">
            <div className = "Alert_tab">
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Alert
