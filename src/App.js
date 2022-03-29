import React,{useEffect} from 'react'
import './App.css';
import Statuses,{ListApis} from './components/Statuses';
import Api from "./api/index";

function App() {
 async function getData(){
   ListApis.forEach(element => {
    const result = await Api.get(element)
   });
    
    console.log(result)
  } 
  useEffect(() => {
  getData()
  console.log(ListApis)
}, [])

  return (
    <div className="App">
    <Statuses/>      
    </div>
  );
}

export default App;
