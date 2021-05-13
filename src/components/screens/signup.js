import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Signup = ()=>{
   const history= useHistory()
   const [name,setName] = useState("")
   const [password,setPassword] = useState("")
   const [email,setEmail] = useState("")

   const PostData = ()=>{
      if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
      ){
        M.toast({html:"Invalid email",classes:"#c62828 red darken-3"})            
        return
      }
      fetch("/signup",{
         method:"post",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
            name,
            password,
            email
         })
      }).then(res=>res.json()).then(data=>{
         if(data.error){
            M.toast({html: data.error,classes:"#c62828 red darken-3"})
         }else{
            M.toast({html:data.message,classes:"#43a047 green darken-1"})
            history.push('/login')
         }
      }).catch(err=>{
         console.log(err)
      })
   }   
   return(
    <div className="mycard">
    <div className="card auth-card">
    <h2>Instagram</h2>
    <input
      type="text"
      placeholder="name"
      value= {name}
      onChange = {(e)=>setName(e.target.value)}
     />
    <input
      type="text"
      placeholder="email"
      value= {email}
      onChange = {(e)=>setEmail(e.target.value)}
    />       
   <input type="text" placeholder="password"
         value= {password}
         onChange = {(e)=>setPassword(e.target.value)}
    />
   <button className="btn waves-effect #64b5f6 blue darken-1" 
   onClick={()=>PostData()}>
      Login
   </button>
   <h5> <Link to="/Login">Already have an account ? </Link></h5>
</div>
</div>
   )
}

export default Signup