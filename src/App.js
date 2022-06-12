import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { AtualizarDados } from "./pages/AtualizarDados"
import { Login } from "./pages/Login"
import { Dashboard } from "./pages/Dashboard"

export const App = () => {
    return(
        <>
            <Router>
               <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/atualizar-dados" element={<AtualizarDados />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        </>
    )
}