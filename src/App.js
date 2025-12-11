import Video from './Video';
import { useEffect,useRef } from 'react';
function App() {
  
  const videoRef = useRef()

  useEffect(() => {
    console.log(videoRef.current)
  })

  return (
    <div >
      <Video ref={videoRef}/>
      <button>Play</button>
      <button>Pause</button>
    </div>
  );
}

export default App;
