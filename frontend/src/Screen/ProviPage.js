import React from 'react';
import {Link,useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import d from '../assets/transferir.jfif'
import '../styles/screen/ProviPage.css'

function ProviPage() {
    const f=useHistory()
  return (
      <div className='ProviPage-container'>
          <header>
              <Link to='' onClick={()=>f.goBack()}><FiArrowLeft size={30} color='crimson'/></Link>
              <img src={d} alt=''/>
          </header>
          <section>
              <div className='paragra'>
                  <h1>Dados gerais da Provincia de Luanda</h1>
                  <p>Actualizacao dos dados a nivel nacional sobre os casos de covid-19</p>
              </div>
              <article>
                  <div>
                      <h3>Infectados</h3>
                      <small>00.00</small>
                  </div>
                  <div>
                      <h3>Testados</h3>
                      <small>00.00</small>
                  </div>
                  <div>
                      <h3>Mortos</h3>
                      <small>00.00</small>
                  </div>
                  <div>
                      <h3>Recuperados</h3>
                      <small>00.00</small>
                  </div>
              </article>
          </section>
      </div>
  );
}

export default ProviPage;