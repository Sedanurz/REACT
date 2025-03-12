import { Routes, Route } from "react-router-dom"
import Liststudent from "./Liststudent"
function App() {
return (
<div className="App">
<Routes>

<Route path="/" element={ <Liststudent/> } />
</Routes>
</div>
);
}
export default App
