import Input from './Input.js'
import './Modal.css'
import { useInput,useCallback,useState } from "react";

function Modal(props) {
  // const { value, bind, reset } = useInput('');
  const [inputs,setInputs] = useState({});
  const onChangeHandler = function(target){
    setInputs(state => ({ ...state, [target.name]:[target.value,target.type]}), [])
  };
  return (
    <div className="modal" style={{"display":(props.hidden)?"none":"block"}}>
    <h1 className="modal_title">{props.title}</h1>
    <form onSubmit={(e)=>form_submit(e,inputs)}>
      {props.inputs.map((input)=>
        <Input name={input.name} onChangeHandler={onChangeHandler}  placeholder={input.placeholder} type={input.type}/>
      )}
      <button type='Submit' className="submit_btn">Submit</button>
    </form>
    </div>
  );
}

function form_submit(e,inputs){
  e.preventDefault();
  for(var input in inputs){
    if(inputs[input][0].length===0){
      return false;
    }
    console.log('Submitting Form....')
    return true;
  }

}
export default Modal;
