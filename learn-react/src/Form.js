import { useState } from "react";
function Form()
{
    const initialvalue={
        name:"",
        email:"",
        password:""
    }

    const [formdata,setFormData]=useState(initialvalue)
    function handleEvent(e) {
        e.preventDefault();
        alert(JSON.stringify(formdata));
    }
return<>
 <br/>
<form onSubmit={handleEvent}>
    <label>   Name</label>
    <input type="Text" value={formdata.name}
    onChange={(e)=>setFormData({...formdata,name:e.target.value})}
    />
    <br/>
    <label>  Email</label>
    <input type="email" value={formdata.email} 
    onChange={(e)=>setFormData({...formdata,email:e.target.value})}
    />
    <br/>
    <label>  Password </label>
    <input type="password" value={formdata.password} 
    onChange={(e)=>setFormData({...formdata,password:e.target.value})}
    />
    <br/>
    <button type="submit">Submit</button>
    <br/>
</form>

<p>{JSON.stringify(formdata)}</p>
</>
}
export default Form;