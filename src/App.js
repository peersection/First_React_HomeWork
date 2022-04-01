import logo from './logo.svg';
import './App.css';
import Persion from './Components/Persion';
import PersionList from './Components/PersionList';

function App() {
  return (
    <>
      <div className='persionConatainer' >
       <Persion name = "MyName" />
       </div>
      <div>
        <div className='persListContainer' >
       <PersionList name = "My best bodys" /> 
       </div>
       </div>



    </>
  );
}

export default App;

