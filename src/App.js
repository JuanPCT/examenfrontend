import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import checkForToken from "./helpers/checkForToken";
import Login from "./pages/Login";
import store from "./store";

checkForToken();
const App = () => {
  return (
    <Provider store={store}> 
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  </Provider>
  );
};

export default App;
