import Form from "./components/Form"
import {useState} from "react";
import axios from "axios";

const Contact = () =>{
    const [user, setUser] = useState({firstName: "", lastName: "", message: "", email:""})
    const[sucess, setSucess]= useState(false)
    const[error, setError]= useState(false)

     const handleChange = (event) =>{
        setSucess(false)
        setError(false)
        const prop = event.target.name
        const value = event.target.value
        setUser({...user, [prop]: value}) //spread operator
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        // https://jsonplaceholder.typicode.com/todos/1
        axios({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "POST",
            data: user
        }).then((response)=>{
            setUser({firstName: "", lastName: "", message: "", email:""})
            setSucess(true)
        }).catch((response)=>{
            setError(true)
        
        })
    }
    return(
        <Form user={user} handleChange={handleChange} handleSubmit={handleSubmit} sucess={sucess} error={error}/>
    )
}

export default Contact;