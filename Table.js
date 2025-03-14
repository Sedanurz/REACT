import {useNavigate } from "react-router-dom";
import {useEffect} from "react";

function Table(){
    const navigate = useNavigate();
    useEffect
    (
    ()=>
    {
    if (localStorage.getItem("userName")=== null)
    {
     navigate("/Loginyeni");
    }
    }
    );
    
return(
           <div>
            <center>
              <h1>MERHABA, { localStorage.getItem("userName") }</h1>
            </center>
            </div>
);

}
export default Table