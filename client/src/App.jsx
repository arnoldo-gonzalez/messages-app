import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import UsersLogs from "./pages/UsersLogs/UsersLogs";
import ChatsLogs from "./pages/ChatsLogs/ChatsLogs";
import Home from "./pages/Home/Home";
import { UserProvider } from "./context/UserContext";
import { SocketProvider } from "./context/SocketContext";
import { AlertsProvider } from "./context/AlertsContext";
import AuthorizedRoutes from "./components/AuthorizedRoutes";
import Header from "./components/Header/Header";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <AlertsProvider>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/sing_in" element={<UsersLogs singIn={true} />}/>
          <Route path="/sing_up" element={<UsersLogs singIn={false} />}/>
          <Route path="/" element={<Home />}/>
          <Route element={<AuthorizedRoutes />}>
            <Route path="/log_on_chat" element={<ChatsLogs />}/>
            <Route path="/:chatId/chat" element={<SocketProvider><Chat /></SocketProvider>} />
          </Route>
        </Routes>
      </UserProvider>
    </AlertsProvider>
  )
}

export default App
