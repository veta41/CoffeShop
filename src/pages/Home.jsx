import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, CoffeBlock, CoffeLoadingBlock } from '../components';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchCoffes } from '../redux/actions/coffes';


const categoryNames = ['Арабика', 'Робуста', 'Арабика / Робуста','Марагоджип'];
const sortIems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ coffes }) => coffes.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ coffes }) => coffes.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchCoffes(sortBy, category));
  
  }, [category, dispatch, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, [dispatch]);

  const handleAddCoffeToCart = (obj) => {
    dispatch({
      type: 'ADD_COFFE_CART',
      payload: obj,
    });
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortIems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все виды кофе</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <CoffeBlock
                onClickAddCoffe={handleAddCoffeToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <CoffeLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
