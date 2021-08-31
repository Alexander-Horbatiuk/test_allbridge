import React from "react";
import styles from "./style.css"
import Bridge from "./Bridge";
import {NavLink, BrowserRouter, Switch, Route} from "react-router-dom";
import Receive from "./Receive";

const ExchangerMenu = () => {
    return (
        <BrowserRouter>
            <nav className="navMenu">
                <NavLink exact activeClassName={styles.active} className="navLink" to="/Bridge">Bridge</NavLink>
                <NavLink exact activeClassName={styles.active} className="navLink" to="/Receive">Receive</NavLink>
            </nav>
            <main>
                <Switch>
                    <Route exact path="/Bridge" component={Bridge}/>
                    <Route exact path="/Receive" component={Receive}/>
                </Switch>
            </main>
        </BrowserRouter>
    )
};

export default ExchangerMenu;