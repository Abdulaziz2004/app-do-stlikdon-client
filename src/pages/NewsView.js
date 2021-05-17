import React from 'react';
import {Link} from "react-router-dom";


const NewsView = () => {
    return (
        <div>
                <div className="Struktura">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex text">
                                <div className="imgs">
                                    <Link to="/">
                                        <img src="/image/strelga.png"/>
                                    </Link>
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
        </div>
    );
};

export default NewsView;