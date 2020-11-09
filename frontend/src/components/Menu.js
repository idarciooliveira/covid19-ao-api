import React, { useEffect } from 'react';
// import icone_virus from '../assets/taller-header-coronavirus-resources.icon'
import { Link } from 'react-router-dom';
import '../styles/components/menu.css'


function Menu(){
    useEffect(()=>{document.title=`coronaVirus Angola`},[])
  return (
      <ul className='ul-menu'>
          <li className='container-menu'>
                <div className='texto'>
                    <h2>CoronaVírus</h2>
                    <div className='bandeiras'>
                        <div className='col'></div>
                        <div className='col'></div>
                        <div className='col'></div>
                    </div>
                    <span>Angola</span>
                </div>
              {/* <div className='icone'>
                  <FiMenu size={30} color='#000'/>
              </div> */}
          </li>
          <nav className='menu-nav'>
            <li><Link to='a' className='selected'>Pagina Inicial</Link></li>
                <li><Link to='a'>SRAG</Link></li>
                <li><Link to='a'>Painel Interactivo</Link></li>
                <li><Link to='a'>Sobre</Link></li>
            
          </nav>
      </ul>
  );
}

export default Menu;