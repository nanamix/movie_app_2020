import React from 'react';

function Food(props){
  console.log(props);
  return <h1>I Like Potato</h1>;
}

//App 컴포넌트 정의
function App() {
  //return <div className="App"/>;
  //return <div>Hello!!!</div>
  //App 컴포넌트는 HTML을 반환하고 있음.
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food fav='Kimchi' something={true} papapa={['hello, 1,2,3,4,true']} />
    </div>
  );
}

export default App;
