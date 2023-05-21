import { useEffect, useState } from 'react';
import Header from './components/Header';
import {formatearDinero, calcularTotalPagar} from './helpers';
import useCounter from './hooks/useCounter';

const MIN = 0;
const MAX = 20000;
const STEP = 100;

const App = () => {

  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pagos, setPagos] = useState(0);

  useEffect(()=>{

    const totalPagar = ()=>calcularTotalPagar(cantidad, meses);

    setTotal(totalPagar);

  }, [cantidad, meses]);

  useEffect(()=>{
    
    setPagos( total / meses );

  }, [total]);

  const {handleChange, handleDecrement, handleIncrement} = useCounter(STEP, MIN, MAX,cantidad, setCantidad);

 
  return (
    <>
      
          <Header />  

          <div
            className='container mx-auto mt-5' 
            style={{width: "80%",minWidth: "300px", maxWidth: "500px"}}>

              <div 
                className='d-flex justify-content-between '
              >
                <div className="col-2">
                  <div className='d-flex justify-content-center'>
                    <button 
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={ handleDecrement }
                    >-</button>
                  </div>
                </div>

                <div className="col-8 align-self-center">
                  <div className="d-flex  justify-content-center">
                    <input
                      style={{width: "90%"}}
                      type='range'
                      value={cantidad}
                      onChange={ handleChange }
                      min={MIN}
                      max={MAX}
                      step={STEP}
                    />
                  </div>
                </div>

                <div className="col-2">
                  <div className="d-flex justify-content-center">
                    <button 
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={handleIncrement}
                    >+</button>
                  </div>
                </div>              
              </div>

            
              <div className='container text-center shadow p-3 mb-4 bg-body-tertiary rounded mt-3'>
                 <p className="text-primary h3">{ formatearDinero(cantidad) }</p> 
              </div>
             
              <h2>Elige un <b className='text-primary'>Plazo</b> a pagar</h2>

              <select 
                className='form-select mt-2'
                value={meses}
                onChange={ e => setMeses(+e.target.value)}
              >
                <option value="6">6 meses</option>
                <option value="12">12 meses</option>
                <option value="24">24 meses</option>
              </select>

              <div className='text-center bg-secondary-subtle p-2 mt-3'>                
                <h2 className='mb-1'>Resumen<b className='text-primary'> de pago</b></h2>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td><p className='text-secondary'> Meses</p></td>
                      <td> <b className="text-primary">{meses}</b> </td>
                    </tr>
                    <tr>
                      <td><p className='text-secondary'> Total a pagar</p></td>
                      <td> <b className="text-primary">{formatearDinero(total)}</b> </td>
                    </tr>
                    <tr>
                      <td><p className='text-secondary'> Pago Mensual</p></td>
                      <td> <b className="text-primary">{formatearDinero(pagos)}</b> </td>
                    </tr>
                  </tbody>
                </table>
               </div>

          </div>


      
    </>
  )
}

export default App
