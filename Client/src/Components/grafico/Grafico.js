import React, {useState, useEffect} from "react";
import {Chart as ChartJS, BarElement, LinearScale, CategoryScale, Tooltip } from 'chart.js';
import { Bar } from "react-chartjs-2";
import "../../Styles/grafico.css" 

ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  Tooltip
)

const Grafico = () => {

  const [chart, setChart] = useState('')

  const moeda = ['Dólar', 'Euro', 'Libra Est.', 'Iene', 'Yuan', 'Peso Argentino', 'Dólar Canadense']
   

  const url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,JPY-BRL,CNY-BRL,ARS-BRL,CAD-BRL"

   useEffect(() => {
      const fetchMoeda = async () => {
        await  fetch(url)
        .then(res => res.json())
        .then(valor => {

        const cotacao = []

        cotacao.push(valor.USDBRL.bid) 
      
        cotacao.push(valor.EURBRL.bid)
          
        cotacao.push(valor.GBPBRL.bid)
      
        cotacao.push(valor.JPYBRL.bid)
      
        cotacao.push(valor.CNYBRL.bid)

        cotacao.push(valor.ARSBRL.bid)

        cotacao.push(valor.CADBRL.bid)
    

        setChart(cotacao)
          
         
        })
        .catch( err => {
          console.log(err)
        })
      }
      fetchMoeda()
   }, [url])

    var data = {
      labels:  moeda,
      datasets: [{
          data: chart,
          backgroundColor: [
            'rgb(17, 48, 89)'
          ],
          borderColor: [
            'black',
          ],
          borderWidth: 2
      }]
  }

   var options = {
 
      scales: {
          y: {
              beginAtZero: true
          },
      }
    }
   

  return (
      <div className="grafico">
        <Bar 
        data={data}
        options={options}
        />
      </div>
  );
};

export default Grafico;