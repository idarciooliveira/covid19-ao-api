import React from 'react';
import {Link,useHistory} from 'react-router-dom'
import {FiArrowLeft,FiArrowRight} from 'react-icons/fi'
import d from '../assets/transferir.jfif'
import '../styles/screen/ProviPages.css'
import img1 from '../assets/images (1).jfif'
import img2 from '../assets/images (2).jfif'
import img3 from '../assets/images (3).jfif'
import img4 from '../assets/images (4).jfif'
import img5 from '../assets/images (5).jfif'
import img6 from '../assets/images (6).jfif'


function ProviPage() {
    const f=useHistory()
  return (
      <div className='ProviPage-container'>
          <header>
              <Link to='' onClick={()=>f.goBack()}><FiArrowLeft size={30} color='crimson'/></Link>
              <img src={d} alt=''/>
          </header>
          <section className="dados-container">
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
          <section className="banner">
          <div className='text_facul'>
              <div className='himZKo'></div>
              <h3 className='hCuLgs'>Cidade de Luanda</h3>
              <div className='himZKo'></div>
          </div>
              <nav className="provin">
                    <div className="grid-container">
                        <img src={img1} alt="" className="grid-1"/>
                        <img src={img2} alt="" className="grid-2"/>
                        <img src={img3} alt="" className="grid-3"/>
                        <img src={img4} alt="" className="grid-4"/>
                        <img src={img5} alt="" className="grid-5"/>
                        <img src={img6} alt="" className="grid-6"/>
                    </div>
                    <div className="tex">
                        <p>Luanda, capital de Angola, é uma cidade portuária na costa oeste da África do Sul. Um passeio à beira-mar, conhecido como a Marginal, estende-se ao longo da Baía de Luanda. Nas proximidades, encontra-se a bem preservada Fortaleza de São Miguel, que agora alberga o Museu das Forças Armadas. O forte tem vistas para o porto e para a Ilha do Cabo, uma longa e estreita península na baía com praias, bares e restaurantes</p>
                        <ul>
                            <li><b>Area:</b> 116 km²</li>
                            <li><b>Fundação:</b> 1 de janeiro de 1576</li>
                            <li><b>População:</b> 2,572 milhões (2020)</li>
                        </ul>
                        <Link><FiArrowRight size={40} color="#111"/></Link>
                    </div>
              </nav>
          </section>  
      </div>
  );
}

export default ProviPage;