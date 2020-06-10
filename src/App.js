import React from 'react';

function Food(props){
  console.log(props);
  return <h1>I Like { props.fav } </h1>;
}

//App 컴포넌트 정의
function App() {
  //return <div className="App"/>;
  //return <div>Hello!!!</div>
  //App 컴포넌트는 HTML을 반환하고 있음.
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food fav='Kimchi' />
    </div>
  );
}

export default App;
