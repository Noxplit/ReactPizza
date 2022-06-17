import React from 'react';

export default function Categories() {
// categories.map - цикл передачи категорий с массива categories  на страницу и их выбор

  const [activeIndex, setActiveIndex] = React.useState(3);
  function activeOnClick(i) {
    setActiveIndex(i);
  }

  const categories = ['Все', 'Мясная', 'Вегетарианская', 'Гриль', 'Острая', 'Закрытая'];
  return (
    
    <div>
      <div className="categories">
        <ul>
          {categories.map((value, index) => {
            return (
              <li key={value}
                onClick={() => activeOnClick(index)}
                className={activeIndex === index ? 'active' : ''}>
                {value}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
