import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { API_URL } from './helpers';
import Home from './pages/Home';
import {InsertFunc} from './redux/actions'

function App(props) {

  const [data,setData] = useState(null)
  
  useEffect(()=>{
    let checkStore = JSON.parse(localStorage.getItem('users'))
    if(checkStore){
      props.InsertFunc(checkStore)
    } else{
      axios.get(API_URL)
      .then((res)=>{
        setData(res.data.results)
        localStorage.setItem('users',JSON.stringify(res.data.results))
        props.InsertFunc(res.data.results)
      }).catch((err)=>console.log(err))
    }
  },[])

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Home/>
    </div>
  );
}

const ReduxProps=(state)=>{
  return {
    Inventory: state.Inventory
  }
}

export default connect(ReduxProps,{InsertFunc})(App);
