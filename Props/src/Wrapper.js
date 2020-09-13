import React from 'react';


function Wrapper(props){
    console.log(props);
    return(
        <div style={{border:"3px solid white"}}>
            {props.children}
        </div>
        
    )
}

export default Wrapper;