import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 the-end">
                            <h3>
                                Dustlikdon.uz
                            </h3>
                            <ul className="nav">
                                <li className="nav-item"><a href="#" className="nav-link">Jizzax viloyati Do‘stlik tumani <br/>
                                    Sanoatchilar MFY Sanoat ko‘chasi 49</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 the-end">
                            <h3>
                                Asosiy
                            </h3>
                            <ul className="nav flex-column">
                                <li className="nav-item"><a href="#" className="nav-link">Jamiyat haqida</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Struktura</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Yangiliklar</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 the-end">
                            <h3>
                                Xizmatlar
                            </h3>
                            <ul className="nav flex-column">
                                <li className="nav-item"><a href="#" className="nav-link">Elektron murojaatlar</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Interaktiv xizmatlar</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Saytdan izlash</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 the-end">
                            <h3>
                                Bog’lanish
                            </h3>
                            <ul className="nav flex-column">
                                <li className="nav-item"><a href="#" className="nav-link"><img className="mr-3" src="/image/logo12.png"/> 998 71 335 41 16</a></li>
                                <li className="nav-item"><a href="#" className="nav-link"><img className="mr-3" src="/image/logo13.png"/> info@dustlikdon.uz</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <br/><br/><br/>
            </div>
        </div>
    );
};

export default Footer;