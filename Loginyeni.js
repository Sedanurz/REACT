import React,{useState} from 'react';
import  axios  from 'axios';
import {useNavigate } from "react-router-dom";

function Loginyeni(){
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    //useState:Alanın ilk değeri gibi düşünülebilir.
    const [result, setResult] = useState();
    const navigate = useNavigate();
    const myButtonClick = async() =>
        {
            
                let requestBody = {
                service_val_name:name,
                service_val_password:password
                }
                const response = await axios.post ('https://www.mockachino.com/1b9b9eca-13b9-41/login',
                requestBody);
               
                // setResult("Giriş Başarılı");
                if (response.data.result=="success") {
                    localStorage.setItem("userName", name)
                    navigate("/Table");
                    } else {
                    setResult('Hatalı Kullanıcı Adı veya Şifre');
                    }
                }
            

        
    
    return(
        <form>
        <label htmlFor="username">Username:</label>
        <input autoComplete="off" type="text" name="username"  onChange={e=>setName(e.target.value)} />
        <br /><br />
        <label htmlFor="password">Last name:</label>
        <input autoComplete="off" type="text" name="password" onChange={e=>setPassword(e.target.value)} />
        <br /><br />
        <input type="button" value="Gönder" onClick={()=>myButtonClick()}/>
        <br/><br/>
        {result}
        </form>
          );
        }
    export default Loginyeni