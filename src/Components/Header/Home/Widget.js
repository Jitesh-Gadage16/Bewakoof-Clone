import React from 'react'
import {Col} from  "reactstrap"


const Widget = ({src}) =>{
    return(
        // <div className='widget'>
            <Col className='widget_slider_Col'>
            <img src={src}></img>
            </Col>
        
    )
}

export default Widget;