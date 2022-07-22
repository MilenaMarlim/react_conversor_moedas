import React, { Component } from 'react'
import './Conversor.css'

export default class Conversor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }

        //O objeto passado para dentro do bind, no JS, ele será o this. Para acessar o this:
        this.converter = this.converter.bind(this)

    }
    converter() {
        let convertTo = `${this.props.moedaA}_${this.props.moedaB}`

        //API para pegar o valor da moeda online
        let url = `https://economia.awesomeapi.com.br/json/last/${convertTo}`

        //Para acessar a url e pegar o dado
        fetch(url).then(res=>{
            return res.json()
        }).then(json=>{
            let quotation = json[convertTo].high

            let moedaB_valor = (parseFloat(this.state.moedaA_valor) * quotation).toFixed(2)
            this.setState({moedaB_valor})
        })
    }

    render() {
        return (
            <div className="conversor">

                <h2>{this.props.moedaA} para {this.props.moedaB} </h2>

                <input type="text" onChange={(event) => { this.setState({ moedaA_valor: event.target.value }) }}>

                </input>
              
                <button type="button" onClick={this.converter}>Converter</button>

                <h2>Valor convertido: {this.state.moedaB_valor}</h2>
            </div>
        )
    }
}