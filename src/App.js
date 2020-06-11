import React from 'react';
import axios from 'axios';

class App extends React.Component {

  //컴포넌트가 마운트되면 true(처음에는 로딩상태)
  state = {
    isLoading: true,
    movies : [],  //로딩된 영화데이터를 저장할 수 있도록 movies state를 만듦.
  };

  getMovies = async () =>{ //async => 자바스크립트에게 getMovies()함수는 시간이 필요하고
    const movies = await axios.get('https://yts.mx/api/v2/list_movies.json'); //await => axios.get()의 실행을 기다려 달라고 말해줌
  };

  componentDidMount(){
    //영화 데이터 로딩!
    this.getMovies();
  };


  render(){
        const { isLoading } = this.state;
        return <div>{isLoading ? 'Loading ... ' : 'we are ready'}</div>;
      }


}

export default App;
