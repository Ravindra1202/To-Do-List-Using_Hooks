import React from 'react'

const ToDoPrint=(props)=>{

    
    return(
        <>
        
        {/* <div className="ToDoPrint">
           
         {props.text} 
        </div> */}
        <div className="ToDoPrint">
        <i className="fa fa-times" aria-hidden="true"
         onClick={ ()=>{
            props.onSelect(props.id)
        }}/>
           {props.text} 
          </div>


        </>
    );
}
export default ToDoPrint;