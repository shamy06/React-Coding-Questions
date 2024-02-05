import logo from './logo.svg';
import './App.css';
import FocusInput from './Component/FocusInput';
import VideoPlayer from './Component/PlayAndPause';

function App() {
  return (
    <div className="App">
      <FocusInput/>
      <br/>
      <VideoPlayer/>
    </div>
  );
}

export default App;