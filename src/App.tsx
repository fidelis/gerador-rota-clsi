import { useState } from 'react'
import './App.css'
import XlsxFile from './XlsxFile'

export default function App() {

  return (
    <div className="App">
      <h1>GERADOR DE ROTA CLSI</h1>
      <div className="result"> 
        <label className="custom-file-upload">
          <input type="file" onClick={(e) => XlsxFile.showFile(e)}/>
          <i className="fa-cloud-upload"></i> Carregar Rota
        </label>
      </div>
      <div className='form-rota'>
        <input type="text" className='caixa-texto' value="Id da Rota"/><br></br>
        <input type="text" className='caixa-texto' value="Id do Veículo"/><br></br>
        <input type="text" className='caixa-texto' value="Id da Frota"/><br></br>
        <input type="text" className='caixa-texto' value="Motorista"/><br></br>
        <input type="text" className='caixa-texto' value="Ajudante 1"/><br></br>
        <input type="text" className='caixa-texto' value="Ajudante 2"/><br></br>
        <input type="text" className='caixa-texto' value="Ajudante 3"/><br></br>
        <input type="text" className='caixa-texto' value="Id da Carga"/><br></br>
        <input type="text" className='caixa-texto' value="Data e hora do início"/><br></br>
        <input type="text" className='caixa-texto' value="Data e hora do final"/><br></br>
      </div>
      <div className="newRoute"> 
        <label className="custom-file-upload">
          <input type="file" onClick={event =>  window.location.href='/Map'}/>
          <i className="fa-cloud-upload"></i> Gerar Rota
        </label>
      </div>
    </div>
  )
}
