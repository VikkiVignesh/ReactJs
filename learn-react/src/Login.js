import React,{useState} from "react"
function Login()
{
    const [status,setlog]=useState(false)

     const login=()=>{
        setlog(true);
     };

     const logout=()=>{setlog(false);};


     let buttons;
     if(status)
     {
       buttons=<SetLogout onClick={logout}/>
     }
     else
     {
       buttons= <SetLogin onClick={login}/>
     }


      return <>{buttons}</>;
}

function SetLogin(props)
{
   return <>
   <button onClick={props.onClick}>Login</button>
   </>;
}

function SetLogout(props)
{
   return <>
   <button onClick={props.onClick}>Logout</button>
   </>;
}

export default Login;