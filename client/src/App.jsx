import { Routes, Route } from "react-router-dom"
import Chat from "./pages/Chat/Chat"
import SingIn from "./pages/SingIn/SingIn"

function App() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />}/>
      <Route path="/chat" element={<Chat />}/>
    </Routes>
  )
}

export default App
