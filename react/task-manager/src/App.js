import {useState} from 'react';

const App = () => {
  const [message, setMessage] = useState('hello world')

  const handleChangeMessage = () => {
    setMessage('olá mundo')
  }

  return (
    <>
      <h1>{message}</h1>
      <button onClick={handleChangeMessage}>Change message</button>
    </>
  );
}

export default App;
