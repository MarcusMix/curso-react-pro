import './App.scss';
import {useState} from 'react'

function App() {
  const [state, setState] = useState(0);

  const incrementCount = () => {
    setState(prevState => prevState + 1)
  }

  return (
    <>
      <div>
        <p>Se voce clicar no botão {state}, o numero irá mudar</p>
        <div className='btn'>
          <button onClick={incrementCount} >
            clica aqui bro
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
