import React from 'react'


export default function MyComponent({style, small}){
let smalls = small?"15px":"" 

    return <h1 style={ {...style,fontSize: smalls} }>Hi</h1>
}
