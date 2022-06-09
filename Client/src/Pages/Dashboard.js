import React from "react";
import '../Styles/dashboard.css';
import { FaRegChartBar, FaEuroSign, FaDollarSign, FaBitcoin } from "react-icons/fa";
import Header from "../Components/header/header"
import Grafico from "../Components/grafico/Grafico";


function HomePage() {


    /* API Moedas*/

    const url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'


    fetch(url).then(res => res.json()
    ).then(conteudo => {

        let euro = conteudo.EURBRL.bid /*alterar para bid*/

        document.getElementById('euro').innerText = `R$ ${euro}`

        let dolar = conteudo.USDBRL.bid
        document.getElementById('dolar').innerHTML = `R$ ${dolar}`

        let bitcoin = conteudo.BTCBRL.bid
        document.getElementById('bitcoin').innerHTML = `R$ ${bitcoin}K`

    })

    /*  Bolsa de Valores usando Sheetdb*/

    {/*ATENÇÃO!!: se não estiver aparecendo as informações na página provavelmente acabou as requisições do SHEETDB*/ }

    const url2 = 'https://sheetdb.io/api/v1/2r3uckvx61zd5';
    fetch(url2)
        .then((response) => response.json())
        .then(json => {

            let sVariacao = ((json[1].Valores))


            document.getElementById('indice').innerHTML = (json[0].Valores)
            document.getElementById('variação').innerHTML = (`${sVariacao}`)

            let sFloat = parseFloat(sVariacao)

            if (sFloat > 1) {
                document.getElementById("variação").style.color = "blue";
            }
            else if (sFloat < 1) {
                document.getElementById("variação").style.color = "red";
            } else {
                document.getElementById("variação").style.color = "black";
            }
        });

    return (
        <div className="App">
            <div className='content'>
                <Header />
                <div class="animated fadeIn">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <div class="card-body" >
                                    <div class="stat-widget-five">
                                        <div class="stat-icon dib flat-color-1">
                                            <FaRegChartBar />
                                        </div>
                                        <div class="stat-content">
                                            <div class="text-left dib">
                                                <div class="stat-text">Índice IBOVESPA <span class="count" id="indice">23569</span></div>
                                                <div class="stat-heading">Variação: <span id="variação"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="stat-widget-five">
                                        <div class="stat-icon dib flat-color-2">
                                            <FaEuroSign />
                                        </div>
                                        <div class="stat-content">
                                            <div class="text-left dib">
                                                <div class="stat-text"><span class="count">Euro</span></div>
                                                <div class="stat-text" id="euro">0000</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="stat-widget-five">
                                        <div class="stat-icon dib flat-color-3">
                                            <FaDollarSign />
                                        </div>
                                        <div class="stat-content">
                                            <div class="text-left dib">
                                                <div class="stat-text"><span class="count">Dólar</span></div>
                                                <div class="stat-text" id="dolar">0000</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="stat-widget-five">
                                        <div class="stat-icon dib flat-color-4">
                                            <FaBitcoin />
                                        </div>
                                        <div class="stat-content">
                                            <div class="text-left dib">
                                                <div class="stat-text"><span class="count">Bitcoin</span></div>
                                                <div class="stat-text" id="bitcoin">0000</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="box-title">Gráfico de Moedas </h4>
                            </div>
                            <div class="row">
                                <Grafico />
                            </div>
                            <div class="card-body"></div>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>

    );
}

export default HomePage;