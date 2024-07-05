import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from './components/molecules/Chat';
import Chats from './components/molecules/Chats';
import Feed from './components/molecules/feed';
import Layout from './components/molecules/Layout';
import Login from './components/molecules/Login';
import Register from "./components/molecules/Register";
import Account from "./components/molecules/Account"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="chat" element={<Chat />} />
          <Route path="/chat/:cahtid" element={<Chats/>}/>
          <Route path="account" element={<Account/>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;