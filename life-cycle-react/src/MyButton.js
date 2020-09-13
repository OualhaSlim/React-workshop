import React from "react";

function MyButton(props ){
    console.log(props)
    
    return(
        <div>
            {
            (props.profileLink) ? (<button 
                onClick={props.onSimpleClick}
                style={{backgroundColor:props.buttonColor}}>
                    {props.children}
            </button>) : (<p>Button is hidden</p>)
        }
        </div>
    )
}

export default MyButton;