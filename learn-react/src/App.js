//import logo from './logo.svg';
import './App.css';
import Welcome from "./Welcome"
import Clock from './Clock';
import Login from './Login';
import Blog from './Blog';
import Form from './Form';
import Search from './Search';
import List from './List';
import { useState } from 'react';
import MySplineComponent from './Spline';
const posts=[
  {
    id:1,
    name:"wEGWnvmncE",
    SRN:"R2e32"
  },
  {
    id:2,
    name:"wEGWfvknE",
    SRN:"R2e32656"
  },
  {
    id:3,
    name:"wEkmwmGWE",
    SRN:"R2e3232"
  },
  {
    id:1,
    name:"wEGWnvmncE",
    SRN:"R2e32"
  },
  {
    id:2,
    name:"wEGWfvknE",
    SRN:"R2e32656"
  },
  {
    id:3,
    name:"wEkmwmGWE",
    SRN:"R2e3232"
  }
]



const listview=[
  {id:1,
  title:"World"},
  {id:2,title:"Hello!!"},
  {id:3,title:"LEO"},
  {id:4,title:"Elisa"},
  {id:5,title:"Vikki"},
  
]


function App() {

  const user={first:"Vikki",
last:"Vignesh",}
const [searchitem,setItem]=useState();

const handleevent=(e)=>
{
  setItem(e.target.value)
}

const filterRes= listview.filter((item)=>
  {
    return item.title.toLowerCase().includes(searchitem);
  })

  return (<>
   <Welcome users={user}/>
   <Clock/>
   <Login/>
   <Blog posts={posts}/>
   <Form/>
   <br/>
   <Search searchItem={searchitem} handleEvent={handleevent}/>
   <List list={filterRes}/>
   <MySplineComponent/>
   </>
  );
}

export default App;
