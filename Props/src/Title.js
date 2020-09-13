import React from 'react';

function Title(props){
    console.log(props);
    //style={[styles.container, {backgroundColor: this.props.backgroundColor}]}
    //<h1 style={{fontSize:"12px"}}>{props.children}</h1>
    let small= false || props.small;
    if(small){
        return(
            
            <h1 style={{fontSize:"12px"}}>{props.children}</h1>
        )
    }
    else{
        return(
            <h1 style={props.style}>{props.children}</h1>
            
        )
    }
    
}

export default Title;