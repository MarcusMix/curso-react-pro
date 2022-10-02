import './App.scss';
import { useState, useEffect } from 'react'

function App() {
  const [resourseType, setResourseType] = useState('posts');

  const changeResourceType = (resourseType) => {
    setResourseType(resourseType)
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
    .then(response => response.json())
    .then(json => console.log(json))


  }, [resourseType])

  return (
    <>
      <div>
        <h1>{resourseType}</h1>
        <div>
          <button onClick={() => changeResourceType('posts')}>Posts</button>
          <button onClick={() => changeResourceType('comments')}>Comments</button>
          <button onClick={() => changeResourceType('todos')}>To-Dos</button>
        </div>
      </div>
    </>
  );
}

export default App;
