import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

function Food({ name , picture, rating}){
  //console.log(props);
  //{ fav } = props;
  return (
    <div>
    <h2>I Like { name } </h2>    
    <h4>{rating}/5.0</h4>
    <img src={ picture } alt={name} />
    </div>
  );
}

//const foodILike = [];  //foodILike 변수 만들고 빈 배열 할당
const foodILike = [
  {
    id : 1,
    name : 'Kimchi',
    image: 'https://shopping-phinf.pstatic.net/main_1065829/10658291585.20191231172531.jpg?type=f300'
    ,rating :5
  },
  {
    id : 2,
    name : 'Samgyopsal',
    image: 'http://post.phinf.naver.net/MjAxNzA5MjhfMTMg/MDAxNTA2NTI2MzQ1MDY3.bwNyLjWgTbY9JnHQUmOAT-hGjCz7aJUi_knQxWevDP4g.tCFC6CePWa6bS08nMvDnjgDuXdURFkQpUSi2vCarAQ8g.JPEG/IEJpHapG6r2q5UtDyexnmtOi_XPE.jpg'
    ,rating :4
  },
  {
    id : 3,
    name : 'Bibimbap',
    image: 'http://post.phinf.naver.net/MjAxNzA1MjJfMTMw/MDAxNDk1NDM0NzQyMTYz.orS5r48A-dyd6RzToyT0FKgOd__A_ILKAI-MBAYGCG0g.pmJk2GQZiahDWEmwqbGHEn9uVE8kYQ8zMYXpzutWnwwg.JPEG/IKwluhGd7Ic0ozVBAVaO1IKFSuWE.jpg'
    ,rating :3
  },
  {
    id : 4,
    name : 'Dongasu',
    image: 'http://post.phinf.naver.net/MjAxNzA1MjJfMTMw/MDAxNDk1NDM0NzQyMTYz.orS5r48A-dyd6RzToyT0FKgOd__A_ILKAI-MBAYGCG0g.pmJk2GQZiahDWEmwqbGHEn9uVE8kYQ8zMYXpzutWnwwg.JPEG/IKwluhGd7Ic0ozVBAVaO1IKFSuWE.jpg'
    ,rating :2
  },
  {
    id : 5,
    name : 'Kimbap',
    image: 'http://post.phinf.naver.net/MjAxNzA1MjJfMTMw/MDAxNDk1NDM0NzQyMTYz.orS5r48A-dyd6RzToyT0FKgOd__A_ILKAI-MBAYGCG0g.pmJk2GQZiahDWEmwqbGHEn9uVE8kYQ8zMYXpzutWnwwg.JPEG/IKwluhGd7Ic0ozVBAVaO1IKFSuWE.jpg'
    ,rating :1
  },
];

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

const renderFood = dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />;

//App 컴포넌트 정의
function App() {
  console.log(foodILike.map(renderFood));
  //return <div className="App"/>;
  //return <div>Hello!!!</div>
  //App 컴포넌트는 HTML을 반환하고 있음.
  return (
    <div>
    
    {foodILike.map(renderFood)};
      
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired,
};

export default App;
