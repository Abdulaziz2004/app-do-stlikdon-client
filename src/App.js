import React from 'react';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewsView from "./pages/NewsView";
import Login from "./pages/Login";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/news-viev" exact component={NewsView}/>
                <Route path="/login" exact component={Login}/>
            </Switch>
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
    );
};

export default App;
