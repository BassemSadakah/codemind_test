import './App.css';
import Modal from './components/Modal.js'
function App() {
  return (
    <div className="App">
    <Modal hidden={false}  title="Sign In" inputs={[
      {name:'first_name',placeholder:'First Name'},
      {name:'last_name',placeholder:'Last Name'},
      {name:'email',placeholder:'Email',type:'email'}
      ]}/>
    </div>
  );
}

export default App;
