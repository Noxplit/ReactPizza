import React from 'react'
import logo from '../../assets/img/1.png'
import { Link } from 'react-router-dom';

export default function CartHeader() {
  return (
    <div>
      <div className="header">
          <div className="container ">
            <Link to="/">
           <div>
            <div className="header__logo">
              <img width="100" height={100} src={logo} alt="Pizza logo" />
              <div>
                <h1 className='pt-20'>React Pizza</h1>
                <p>Самая реактивная пицца</p>
              </div>
              
            </div>
            </div>
            </Link>
            
           
    </div>
    </div>
    </div>
  )
}
