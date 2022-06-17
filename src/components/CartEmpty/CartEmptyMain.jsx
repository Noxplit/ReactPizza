import React from 'react'
import { Link } from 'react-router-dom'
import EmptyCart from '../../assets/img/Cart-empty.png'
import styles from './CartEmpty.module.scss'

export default function CartEmptyMain() {
  return (
    <div className="content">
    <div className="container">
      <div className="pizzas__block ">
      <h2 className='text-center'>Корзина пустая 😔</h2>
      <p className={styles.subtitle}>Вероятней всего, вы не заказывали ещё пиццу.
Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
<p className='text-center'><img src={EmptyCart} width={200} height={200} alt="Cart" /></p>
<Link to='/'><p className='text-center'><button className={styles.btn_return}>Вернуться назад</button></p></Link>
      </div>
    </div>
  </div>
  )
}
