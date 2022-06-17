import '../App.css'
import React from 'react';
import '../scss/app.scss'
import CartHeader from '../components/CartEmpty/CartHeader';
import CartEmptyMain from '../components/CartEmpty/CartEmptyMain';


//CartEmpty - компонент по переходу еа страницу пустой корзины


export default function CartEmpty() {


  return (
    <div>
      <div className="wrapper">
      <CartHeader/>
       <CartEmptyMain/>
      </div>
    </div>
  );
}
