import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import {FiDownload,FiArrowDown,FiArrowUp} from 'react-icons/fi'
import {AiFillThunderbolt} from 'react-icons/ai'
import {GrFormNextLink} from 'react-icons/gr'
import '../styles/screen/PageLanding.css'

function PageLanding() {
  // function handleWrite(){}
  const [Text,setText]=useState('')
  return (
    <div className='container-PageLanding'>
      <Menu />
      <section className='section-PageLanding' >
          <article className='grid-'>
            <aside className='left-covi'>
              <label className='lb-covid'>Covid19</label>
              <label className='lb-title-geral'>
                <b>Painel </b> 
                CoronaVirus
              </label>
              <label className='grey'>
                Actualizado em:
                <span> 04/11/2020 18:30</span>
              </label>
            </aside>
            <aside className='right-covi'>
              <Link to=''> <FiDownload size={30} color='green'/> <span>Arquivos do MINSA</span></Link>
            </aside>
        </article>

          <nav className='container-cards'>
          <article>
            <div className='lb-total-geral'>
              <div className='tot'>Casos Recuperados</div>
              <label>300.000</label>
            </div>
            <div className='lb-total-geral'>
              <div className='tot'>Em acompanhamento</div>
              <label>300.000</label>
            </div>
          </article>
          <article>
            <label className='lb-title-geral'>
              <span>Casos COnfirmados </span> 
              <div><FiArrowDown size={30} color='green'/></div>
            </label>
            <div className='container-tp-geral'>
              <label className='tp-geral'>
                5.000.000
                <span>Acumulados</span>
              </label>
              <label className='tp-geral'>
                15.000
                <span>Casos Novos</span>
              </label>
              <label className='tp-geral'>
                2,9%
                <span>Incidencia</span>
              </label>
            </div>
          </article>
          {/* <article></article> */}
          <article>
          <label className='lb-title-geral'>
              <span>Obitos COnfirmados </span> 
              <div><FiArrowDown size={30} color='#9a36bb'/></div>
            </label>
            <div className='container-tp-geral'>
              <label className='tp-geral'>
                5.000.000
                <span>Acumulados</span>
              </label>
              <label className='tp-geral'>
                15.000
                <span>Casos Novos</span>
              </label>
              <label className='tp-geral'>
                2,9%
                <span>Incidencia</span>
              </label>
            </div>
          </article>
        </nav>

          <section className="container-Provincia">
          <article>
        <div className="sintese-container">
          <header>
            <label>Sintese dos casos por provincia</label>
            <div className='textoss'>
              <input type="text" placeholder='pesquise a sua provincia' className='textBox-select' onChange={(e)=>{setText(e.target.value)}}></input>
              <select> 
              <option>Angola</option>
              </select>
            </div>
          </header>
          {Text.valueOf()==="" ? 
          <div className="warning">
            <AiFillThunderbolt size={80} color='crimson' title='warni'/>
            <p>pesquise pela tua provincia,teras a actualizacao dos dados a nivel provincial!</p>
          </div> 
          : 
          <nav className="listen-geral">
            <div className="container-provi">
              <div className="provi">
                <div className='provi-a'>
                  <Link to='Provi'>Luanda <GrFormNextLink size={30} color="yellow"/> </Link>
                </div>
                <div className='provi-b'>
                  <main>
                    <span>Casos</span>
                    700.500
                  </main>
                  <main>
                    <span>obitos</span>
                    700.500
                  </main>
                  <main>
                    <span>Actualizacao</span>
                    04/11/2020 18:30
                  </main>
                </div>
              </div>
            </div>
          </nav>
          }
          
        
        </div>
        </article>

      </section>

      </section>
    
      <a href='#menu' className="bottom"><FiArrowUp size={30} color='#1DA584'/></a>
      </div>
  );
}

export default PageLanding;