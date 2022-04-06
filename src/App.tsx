import './App.css';  
import Post from './components/Post';
import Sidebar from './components/Sidebar'; 
import { useState } from 'react';

function App() {


  const[post] = useState({
    title: 'Título maneiro',
    content: 'Loren Ipsum dolor sit amet'
  })


  return (
    <div className="App">
      <header className="App-header"> 
       <Sidebar />
       <Post post={post}/>
   
        
      </header>
    </div>
  );
}

export default App;