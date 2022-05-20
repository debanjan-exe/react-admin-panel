import React, { useContext } from 'react'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import Errorpage from './pages/errorpage/Errorpage';
import { Routes, Route } from "react-router-dom";
import { userInputs, productInputs } from './formSource';
import "./styles/dark.scss"
import { DarkModeContext } from './context/darkModeContext';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "dark"}>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
          </Route>

          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New inputs={productInputs} title="Add New Products" />} />
          </Route>

          <Route path="*" element={<Errorpage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
