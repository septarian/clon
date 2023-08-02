import React from 'react';
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/fontawesome-svg-core'
import graficaPastel from '../imagenes/grafica_pastel.png'
import cilindroMes from '../imagenes/cilindros_mes.png'
import ventaUnidad from '../imagenes/venta_unidad.png'
import cilindroUnidad from '../imagenes/cilindro_unidad.png'
import ventaAgua from '../imagenes/venta_agua.png'

function Home() {
    return(


    <div className='body'>   
        <div className='wrap'>

            <div className='body-head'>
                <h3>Estadística</h3>
            </div> 

            <div className='row'>
                <div className='card'>
                    <form className='card-body'>
                        <input type="date" className='date' id="fechaInicio" name="fechaInicio"></input>
                        <input type="date" className='date' id="fechaFinal" name="fechaFinal"></input>
                        <button type='button' className='button' value="Buscar" > BUSCAR </button>
                    </form>
                </div>

                <div className='cake-card'>         
                    <div className='texto-grafica'>
                        <h4 className=''>Unidades Por estatus</h4>
                    </div>
                        <img src={graficaPastel} alt='grafica pastel'/>
                </div>

                <div className='grafica'>
                    <div className='texto-grafica'>
                        <h4 className=''>Venta de cilindros por mes</h4>
                    </div>
                    <img src={cilindroMes} alt="cilindros por mes" style={{width: 100 + "%"}}/>
                </div>

                <div className='gra'>
                    <div className='grafica2'>
                        <div className='texto-grafica'>
                            <h4>Venta por unidad</h4>
                        </div>
                        <img src={ventaUnidad} alt="Venta por unidad" className='graficos-tamaño'/>
                    </div>

                    <div className='grafica2' style={{marginLeft: 25 +"px"}}>
                        <div className="texto-grafica">
                            <h4> Reparacion de cilindros por unidad</h4>
                        </div>
                            <img src={cilindroUnidad} alt='cilindros por unidad' className='graficos-tamaño'/>
                    </div>
                </div>

                <div className='grafica'>
                    <div className='texto-grafica'>
                        <h4>Venta de agua por mes</h4>
                    </div>
                    <img src={ventaAgua} alt='venta de agua por mes' style={{width: 100 + "%"}}/>
                </div>


            </div>

        </div>
    </div>


    );
}

export default Home;