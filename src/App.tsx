import { useState } from 'react'
import './App.css'
import loadDeliveryRoute from "./LoadDeliveryRoute"
import {useNavigate} from "react-router-dom"

interface DeliveryRoute {
  routeId: number,
  vehicleId: number,
  fleetId: number,
  driverName: string,
  helper1Name: string,
  helper2Name: string,
  helper3Name: string,
  loadId: string,
  beggingDate: Date,
  endingDate: Date,
}

export default function App() {
  const navigate = useNavigate();

  const onFileChangeCapture = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    /*Selected files data can be collected here.*/
    var files: any = e.target.files
    var fileName: string = files[0].name
    loadDeliveryRoute(fileName)
  };

  const [, setDeliveries] = useState<Delivery[]>([]);
  
  return (
    <div className="App">
      <h1>GERADOR DE ROTA CLSI</h1>
      <div className="result"> 
        <label htmlFor="input-file" className="custom-file-upload">
          <i className="fa-cloud-upload"></i>Carregar Rota
        </label>
        <input id="input-file" accept='application/xlsx, .xlsx' className="input-file" type="file" onChangeCapture={onFileChangeCapture}/>
      </div>
      <div className='form-rota'>
        <input type="text" className='caixa-texto' defaultValue="Id da Rota" /><br></br>
        <input type="text" className='caixa-texto' defaultValue="Id do Veículo"/><br></br>
        <input type="text" className='caixa-texto' defaultValue="Id da Frota"/><br></br>
        <input type="text" className='caixa-texto' defaultValue="Motorista"/><br></br>
        <input type="text" className='caixa-texto' defaultValue="Ajudante 1"/><br></br>
        <input type="text" className='caixa-texto' defaultValue="Ajudante 2"/><br></br>
        <input type="text" className='caixa-texto' defaultValue="Ajudante 3"/><br></br>
        <input type="text" className='caixa-texto' defaultValue="Id da Carga"/><br></br>
        <input type="text" className='caixa-texto' defaultValue="Data e hora do início"/><br></br>
        <input type="text" className='caixa-texto' defaultValue="Data e hora do final"/><br></br>
      </div>
      <div className="newRoute"> 
        <button type="button" className='button-create-route' onClick={()=>{navigate("/Map");}}>Gerar Rota</button>
      </div>
    </div>
  )
}
