import '../App.css';
import React from 'react';

import '../scss/app.scss';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

export default function Home() {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  

React.useEffect(() => {

  fetch('https://62a8be28943591102ba8e2d3.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
    
      setItems(json)
      setIsLoading(false)
    });
},[])

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title pl-50">{isLoading ? 'Загрузка...' : 'Все пиццы'}</h2>
            <div className='container_pizzas__block'>
            <div className="pizzas__block_two">
             {
               isLoading ? [...new Array(6)].map((_,items) => < Skeleton key={items}/>) :
               items.map((value, index) => (
                <PizzaBlock key={index} {...value} />
              ))
             }
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
