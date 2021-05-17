import React from 'react';
import {Link} from "react-router-dom";


const Cards = () => {
    return (
        <div>
            <div className="container elon">
                <div className="row">
                    <div className="col-12 yangiliklar">
                        <div className="d-flex justify-content-between">
                            <h2>Yangiliklar</h2>
                            <div>
                                <button type="button" className="btn">&#10094;</button>
                                <button type="button" className="btn">&#10095;</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 cards">
                        <div className="card border-0">
                            <img src="/image/card.png"/>
                        </div>
                        <div className="card-body bg-white">
                            <div className="d-flex  justify-content-between">
                                <div>
                                    <p> <img src="/image/logo1.png"/> 1648 / 12.11.20</p>
                                </div>
                                <div>
                                    <p><img src="/image/logo2.png"/>321</p>
                                </div>
                                <div>
                                    <p><img src="/image/logo3.png"/>100</p>
                                </div>
                            </div>
                            <h3 className="mt-5">E’LON !!!</h3>
                            <h4 className="mt-5">
                                "DO`STLIKDONMAXSULOTLARI" AJ ning
                                aksiyadorlari diqqatiga! 2020-yil 27-mart <br/>
                                kuni soat 9:00 dan...
                            </h4>
                            <Link to="/news-view" className="btn Link">
                                Batafsil
                            </Link>
                        </div>
                    </div>

                    <div className="col-4 cards">
                        <div className="card border-0">
                            <img src="/image/card4.png"/>
                        </div>
                        <div className="card-body bg-white">
                            <div className="d-flex  justify-content-between">
                                <div>
                                    <p> <img src="/image/logo1.png"/> 1648 / 12.11.20</p>
                                </div>
                                <div>
                                    <p><img src="/image/logo2.png"/>321</p>
                                </div>
                                <div>
                                    <p><img src="/image/logo3.png"/>100</p>
                                </div>
                            </div>
                            <h3 className="text-success">Eksport qiluvchi tadbirkorlik <br/>
                                subektlariga...</h3>
                            <h4 className="text-dark">
                                “O‘zdonmaxsulot” aksiyadorlik kompaniya tizim korxonalari tomonidan istisno tarikasida maxalliy...
                            </h4>
                            <Link to="/news-view" className="btn Link">
                                Batafsil
                            </Link>
                        </div>
                    </div>
                    <div className="col-4 cards">
                        <div className="card border-0">
                            <img src="/image/card5.png"/>
                        </div>
                        <div className="card-body bg-white">
                            <div className="d-flex  justify-content-between">
                                <div>
                                    <p> <img src="/image/logo1.png"/> 1648 / 12.11.20</p>
                                </div>
                                <div>
                                    <p><img src="/image/logo2.png"/>321</p>
                                </div>
                                <div>
                                    <p><img src="/image/logo3.png"/>100</p>
                                </div>
                            </div>
                            <h3 className="text-dark">"DO`STLIKDONMAXSULOTLARI" AJ <br/>
                                boshqaruv raisi...</h3>
                            <h4 className="">
                                "DO`STLIKDONMAXSULOTLARI" AJ ning
                                boshqaruv raisi tomonidan Do’stlik
                                tumanidagi 2-sonli...
                            </h4>
                            <Link to="/NewsView" className="btn Link">
                                Batafsil
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 yangiliklar">
                        <div className="d-flex justify-content-between mt-lg-5">
                            <h2 className="mt-5">Korxonamiz yangiliklari</h2>
                            <div className="mt-5">
                                <button type="button" className="btn">&#10094;</button>
                                <button type="button" className="btn">&#10095;</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 cards">

                        <div className="card border-0">
                            <img src="/image/card4.png"/>
                        </div>
                        <div className="card-body bg-white">
                            <div className="d-flex  justify-content-between">
                                <div>
                                    <p> <img src="/image/logo1.png"/> 1648 / 12.11.20</p>
                                </div>
                                <div>
                                    <p><img src="/image/logo2.png"/>321</p>
                                </div>
                                <div>
                                    <p><img src="/image/logo3.png"/>100</p>
                                </div>
                            </div>
                            <h3 className="mt-5">E’LON !!!</h3>
                            <h4 className="mt-5">
                                2019 yil 27-mart kuni soat 10.00da “Do‘stlikdonmaxsulotlari” aksiyadorlik jamiyati aksiyadorlarining umumiy
                            </h4>
                            <Link to="/NewsView" className="btn Link">
                                Batafsil
                            </Link>
                        </div>
                    </div>

                    <div className="col-4 cards">
                        <div className="card border-0">
                            <img src="/image/card5.png"/>
                        </div>
                        <div className="card-body bg-white">
                            <div className="d-flex  justify-content-between">
                                <div>
                                    <p> <img src="/image/logo1.png"/> 1648 / 12.11.20</p>
                                </div>
                                <div>
                                    <p><img src="/image/logo2.png"/>321</p>
                                </div>
                                <div>
                                    <p><img src="/image/logo3.png"/>100</p>
                                </div>
                            </div>
                            <h3 className="text-dark">"DO`STLIKDONMAXSULOTLARI" AJ
                                boshqaruv raisi...</h3>
                            <h4 className="">
                                "DO`STLIKDONMAXSULOTLARI" AJ ning
                                boshqaruv raisi tomonidan Do’stlik
                                tumanidagi 2-sonli...                            </h4>
                            <Link to="/NewsView" className="btn Link">
                                Batafsil
                            </Link>
                        </div>
                    </div>
                    <div className="col-4 cards">
                        <div className="card border-0">
                            <img src="/image/card6.png"/>
                        </div>
                        <div className="card-body bg-white">
                            <div className="d-flex  justify-content-between">
                                <div>
                                    <p> <img src="/image/logo1.png"/> 1648 / 12.11.20</p>
                                </div>
                                <div>
                                    <p><img src="/image/logo2.png"/>321</p>
                                </div>
                                <div>
                                    <p><img src="/image/logo3.png"/>100</p>
                                </div>
                            </div>
                            <h3 className="text-dark">Xisobot: Buxgalteriya balansi
                                2 kvartal</h3>
                            <h4 className="">
                                Buxgalteriya balansi 2 kvartal bo’yicha
                                foto jamlanmalari shuni takidlaydiki <br/> ular...
                            </h4>
                            <Link to="/NewsView" className="btn Link">
                                Batafsil
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="long mb-5">
                <div className="d-flex justify-content-between">
                    <img src="/image/logo4.png"/>
                    <h1>Shikoyatlar mavjudmi? <br/>
                        onlayn tarzda yuboring</h1>
                    <button type="button" className="btn">Murojat yuborish</button>
                    <img src="/image/card7.png"/>
                </div>
            </div>
            <div className="container five">
                <div className="row">
                    <div className="col-12">
                        <h1>Media</h1>
                    </div>
                    <div className="col-5 bg-white mb-5 ">
                        <div className="card border-0 p-3">
                            <div className="d-flex justify-content-between mt-3">
                                <p className="bg-success text-white">Barchasi</p>
                                <p>Foto galeriya</p>
                                <p>Video galeriya</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card border-0">
                                <img src="/image/card5.png"/>
                            </div>
                            <div className="card-body bg-white bodyy">
                                <h5>
                                    "DO`STLIKDONMAXSULOTLARI" AJ
                                    boshqaruv raisi...
                                </h5>
                                <div className="d-flex justify-content-between mt-5">
                                    <div className="text-black-50">
                                        <p> <img src="/image/logo1.png"/> 1648 / 12.11.20</p>
                                    </div>
                                    <div className="text-black-50">
                                        <p><img className="mr-2" src="/image/logo2.png"/>321</p>
                                    </div>
                                    <div className="text-black-50">
                                        <p><img className="mr-2" src="/image/logo3.png"/>100</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0">
                                <img src="/image/card8.png"/>
                                <div className="pasition"><img src="/image/logo5.png"/></div>
                            </div>
                            <div className="card-body bg-white bodyy">
                                <h5 className="text-success">
                                    "DO`STLIKDONMAXSULOTLARI" AJ
                                    boshqaruv raisi...
                                </h5>
                                <div className="d-flex justify-content-between mt-5">
                                    <div className="text-black-50">
                                        <p> <img src="/image/logo1.png"/> 1648 / 12.11.20</p>
                                    </div>
                                    <div className="text-black-50">
                                        <p><img className="mr-2" src="/image/logo2.png"/>321</p>
                                    </div>
                                    <div className="text-black-50">
                                        <p><img className="mr-2" src="/image/logo3.png"/>100</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0">
                                <img src="/image/card9.png"/>
                                <div className="pasition"><img src="/image/logo6.png"/></div>
                            </div>
                            <div className="card-body bg-white bodyy">
                                <h5 className="text-success">
                                    "DO`STLIKDONMAXSULOTLARI" AJ
                                    boshqaruv raisi...
                                </h5>
                                <div className="d-flex justify-content-between mt-5">
                                    <div className="text-black-50">
                                        <p> <img src="/image/logo1.png"/> 1648 / 12.11.20</p>
                                    </div>
                                    <div className="text-black-50">
                                        <p><img className="mr-2" src="/image/logo2.png"/>321</p>
                                    </div>
                                    <div className="text-black-50">
                                        <p><img className="mr-2" src="/image/logo3.png"/>100</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white data mb-5">
                <div className="container cards">
                    <div className="row">
                        <div className="col-md  gerb">
                            <div className="card border-left-0 border-top-0 border-bottom-0">
                                <img src="/image/logo7.png"/>
                                <p>
                                    O‘zbekiston Respublikasi <br/>
                                    Prezidentining <br/>
                                    rasmiy veb sayti
                                </p>

                            </div>
                        </div>
                        <div className="col-md  gerb">
                            <div className="card border border-top-0 border-bottom-0 border-left-0">
                                <img src="/image/logo8.png"/>
                                <p> Davlat interaktiv <br/>
                                    xizmatlari yagona <br/> portali</p>
                            </div>
                        </div>
                        <div className="col-md  gerb">
                            <div className="card border-0">
                                <img src="/image/logo9.png"/>
                                <p> O‘zbekiston Respublikasi <br/>
                                    Prezidentining <br/>
                                    rasmiy veb sayti</p>
                            </div>
                        </div>
                        <div className="col-md  gerb">
                            <div className="card border-top-0 border-bottom-0 border-right-0">
                                <img src="/image/logo10.png"/>
                                <p> O‘zbekiston Respublikasi <br/>
                                    Maktabgacha Ta'lim <br/>
                                    Vazirligi</p>
                            </div>
                        </div>
                        <div className="col-md  gerb">
                            <div className="card border-top-0 border-bottom-0 border-right-0">
                                <img src="/image/logo11.png"/>
                                <p>“O’ZDONMAHSULOT” <br/>
                                    aksiyadorlik <br/>
                                    kompaniyasi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cards;