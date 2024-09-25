import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Categorias from "./Pages/Categorias/Categorias";


export default function Router() {
    return(
        <Routes>
            <Route path="/" element={ <Login/> } /> 
            <Route path="/register" element={ <Register /> } /> 
            <Route path="/home" element={ <Home /> } /> 
            <Route path="/categorias" element={ <Categorias /> } /> 
        </Routes>
    )
}