import React from 'react';

function Food({ name , picture}){
  //console.log(props);
  //{ fav } = props;
  return (
    <div>
    <h2>I Like { name } </h2>    
    <img src={ picture } />
    </div>
  );
}

//const foodILike = [];  //foodILike 변수 만들고 빈 배열 할당
const foodILike = [
  {
    name : 'Kimchi',
    image: 'https://shopping-phinf.pstatic.net/main_1065829/10658291585.20191231172531.jpg?type=f300'
  },
  {
    name : 'Samgyopsal',
    image: 'http://post.phinf.naver.net/MjAxNzA5MjhfMTMg/MDAxNTA2NTI2MzQ1MDY3.bwNyLjWgTbY9JnHQUmOAT-hGjCz7aJUi_knQxWevDP4g.tCFC6CePWa6bS08nMvDnjgDuXdURFkQpUSi2vCarAQ8g.JPEG/IEJpHapG6r2q5UtDyexnmtOi_XPE.jpg'
  },
  {
    name : 'Bibimbap',
    image: 'http://post.phinf.naver.net/MjAxNzA1MjJfMTMw/MDAxNDk1NDM0NzQyMTYz.orS5r48A-dyd6RzToyT0FKgOd__A_ILKAI-MBAYGCG0g.pmJk2GQZiahDWEmwqbGHEn9uVE8kYQ8zMYXpzutWnwwg.JPEG/IKwluhGd7Ic0ozVBAVaO1IKFSuWE.jpg'
  },
  {
    name : 'Dongasu',
    image: 'http://post.phinf.naver.net/MjAxNzA1MjJfMTMw/MDAxNDk1NDM0NzQyMTYz.orS5r48A-dyd6RzToyT0FKgOd__A_ILKAI-MBAYGCG0g.pmJk2GQZiahDWEmwqbGHEn9uVE8kYQ8zMYXpzutWnwwg.JPEG/IKwluhGd7Ic0ozVBAVaO1IKFSuWE.jpg'
  },
  {
    name : 'Kimbap',
    image: 'http://post.phinf.naver.net/MjAxNzA1MjJfMTMw/MDAxNDk1NDM0NzQyMTYz.orS5r48A-dyd6RzToyT0FKgOd__A_ILKAI-MBAYGCG0g.pmJk2GQZiahDWEmwqbGHEn9uVE8kYQ8zMYXpzutWnwwg.JPEG/IKwluhGd7Ic0ozVBAVaO1IKFSuWE.jpg'
  },
];

//App 컴포넌트 정의
function App() {
  //return <div className="App"/>;
  //return <div>Hello!!!</div>
  //App 컴포넌트는 HTML을 반환하고 있음.
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
        ))}
      
    </div>
  );
}

export default App;
