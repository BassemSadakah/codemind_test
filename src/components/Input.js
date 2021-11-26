import './Input.css'
import { useInput,useState } from "react";

function Input(props){

  return(
    <div styles={{}} className='input_container'>
      <input className='input' {...props} onChange={({target})=>{props.onChangeHandler(target)}} placeholder={props.placeholder} />
    </div>
  )
}

export default Input
// <label className='label_input'>First Name:</label>
