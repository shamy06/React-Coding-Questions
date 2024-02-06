import logo from './logo.svg';
import './App.css';
import Child from './Component/Child';
import { createContext, useState } from 'react';
import OtherChild from './Component/OtherChild';

export const GlobalContext = createContext();

function App() {
const [color,setColor] = useState('green');
const [day,setDay]=useState('Monday');

const getDay =(item)=>{
  setDay(item);
}
  return (
    <GlobalContext.Provider value={{textColor:color, getDay:getDay}}>
      <div className="App">
        <h1>App Component {day}</h1>
        <Child />
        <OtherChild/>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
