import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import UsersLogs from "./pages/UsersLogs/UsersLogs";
import ChatsLogs from "./pages/ChatsLogs/ChatsLogs";
import AuthenticeteRedirect from "./components/AuthenticateRedrect";
import { UserProvider } from "./context/UserContext";
import { SocketProvider } from "./context/SocketContext";
import { AlertsProvider } from "./context/AlertsContext";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <AlertsProvider>
      <Routes>
        <Route index element={<AuthenticeteRedirect to="/sing_in" />}/>
        <Route path="/sing_in" element={<UsersLogs singIn={true} />}/>
        <Route path="/sing_up" element={<UsersLogs singIn={false} />}/>
        <Route element={<UserProvider />}>
          <Route path="/log_on_chat" element={<ChatsLogs />}/>
          <Route path="/:chatId/chat" element={<SocketProvider><Chat /></SocketProvider>} />
        </Route>
      </Routes>
    </AlertsProvider>
  )
}

export default App
