import Home from './pages/Home';
import CartEmpty from './pages/CartEmpty';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router-dom';

// CartEmpty - страница с отсутствуем товара в корзине
// NotFound - страница с несуществующей ссылкой на страницу
// Pizzas - json массив с информации с пиццами
// Pizzas.map - передача json массива в компонент Categories
// items - хук который делает запрос на бек энд и вызывает итемс на страницу
// isLoading - хук по загрузки скелетона на страницу

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartempty" element={<CartEmpty />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
