import React,{useState} from 'react';
function Form(){
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    //useState:Alanın ilk değeri gibi düşünülebilir.
    const [result, setResult] = useState();
    const myButtonClick = async() =>
        {
        if (name==="onur" && password==="1234")
        {
        console.log("OK");
        setResult("Giriş Başarılı");
        }
        else
        {
        console.log("NOT OK");
        setResult("Hatalı kullanıcı adı veya şifre");
        }
    }
    return(
        <form>
        <label htmlFor="username">Username:</label>
        <input autoComplete="off" type="text" name="username" onChange={e=>setName(e.target.value)} />
        <br /><br />
        <label htmlFor="password">Last name:</label>
        <input autoComplete="off" type="text" name="password" onChange={e=>setPassword(e.target.value)} />
        <br /><br />
        <input type="button" value="Gönder" onClick={()=>myButtonClick()}/>
        <br/><br/>
        {name}<br/> 
        {password}<br/>
        {result}
        </form>
          );
        }
 
    export default Form