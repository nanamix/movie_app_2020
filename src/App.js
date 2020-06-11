import React from 'react';
import axios from 'axios';

class App extends React.Component {

  //컴포넌트가 마운트되면 true(처음에는 로딩상태)
  state = {
    isLoading: true,
    movies : [],  //로딩된 영화데이터를 저장할 수 있도록 movies state를 만듦.
  };

  //async => 자바스크립트에게 getMovies() 함수가 비동기라고 말해주는 것임
  //즉 자바스크립에게 getMovies() 함수는 비동기라서 기다려야 한다고 자바스크립에게 말한거라고 생각하면 됨.
  //await라는 키워드는 자바스크립에게 getMovioes() 함수의 axios.get()이 실행완료를 기다렸다가 끝나면 계속 진행해줘라고 말한거임.!
  getMovies = async () =>{ //async => 자바스크립트에게 getMovies()함수는 시간이 필요하고
    const movies = await axios.get('https://yts.mx/api/v2/list_movies.json'); //await => axios.get()의 실행을 기다려 달라고 말해줌
    console.log(movies.data.data.movies);
  };

  //API에서 데이터를 받아오는 => axios.get()을 실행하려면 시간이 핋요하고 , 그 사실을 자바스크립트에게 알려야만 데이터를 잡을 수 있으므로 async, await를 사용했음. 

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
