import React from 'react';
import {Link} from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container top">
                    <Link to="/">
                        <h3>Dustlikdon.uz</h3>
                    </Link>

                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text border-0 bg-white"><img src="/image/search.png"/></span>
                            </div>
                            <input type="text" className="form-control border-0" placeholder="Saytdan ialash"/>
                        </div>
                    </form>
                    <p>На русссом</p>
                    <button type="button" className="btn"><img src="/image/phone.png"/>99872 335-41-16</button>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;