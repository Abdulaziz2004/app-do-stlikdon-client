import React from 'react';
import Example from "../components/Corusel";
import {Link} from "react-router-dom";
import Cards from "../components/Cards";



const Home = () => {
    return (
        <div>
            <div className="Struktura">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex text">
                            <div className="imgs">
                                <img src="/image/strelga.png"/>
                            </div>
                            <p>Jamiyat haqida</p>
                            <p>Struktura</p>
                            <p>Yangiliklar</p>
                            <p>Elektron murojaatlar</p>
                            <p>Interaktiv xizmatlar</p>
                            <p>Aloqa</p>
                        </div>
                    </div>
                </div>
            </div>

            <Example/>
            <Cards/>

        </div>

    );
};

export default Home;