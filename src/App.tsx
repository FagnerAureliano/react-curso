import './App.css';
import Post from './components/Post';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Card from './components/Card';

function App() {


  const [post, setPost] = useState({
    title: 'Título maneiro',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
  })

  // setTimeout(() => {
  //   setPost({
  //     title: 'Título maneiro 222',
  //     content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'


  //   })
  // }, 4000);

  return (
    <div className="App">
      <header className="App-header">

        <Card  >
          <Sidebar post={post} />
          <Post  post={post} totalComents={12} />
        </Card>

      </header>
    </div>
  );
}

export default App;