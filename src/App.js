import './App.css';
import Profile from './component/Profile'
import Project from './component/Project'

import { useState, useEffect} from 'react'
// import lodash from 'lodash'

function App() {
  const [pixel, setPixel] = useState(0)

  //listen for scroll
  useEffect(()=>{
    const handleScroll =()=>{
      setPixel(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  //reset scroll on refresh
  useEffect(()=>{
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    return () => {
      window.onbeforeunload = null;
    }
  },[])

  return (
    <div className="App">
      <Profile pixel={pixel}/>
      <Project pixel={pixel}/>
    </div>
  );
}

export default App;
