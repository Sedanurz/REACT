import { Routes, Route } from "react-router-dom";

import Form from "./Form";
import Formdongu from "./Formdongu";
import Login from "./Login";
import Loginyeni from "./Loginyeni";
import Table from "./Table";
function App() {
return (
<div className="App">
<Routes>
<Route path="/" element={ <Login/> } />
<Route path="/Form" element={ <Form/> } />
<Route path="/Formdongu" element={ <Formdongu/> } />
<Route path="/Login" element={ <Login/> } />
<Route path="/Loginyeni" element={ <Loginyeni/> } />
<Route path="/Table" element={ <Table/> } />

</Routes>
</div>
);
}
export default App
