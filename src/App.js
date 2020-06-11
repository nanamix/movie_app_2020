import React from 'react';
import axios from 'axios';

class App extends React.Component {

  //컴포넌트가 마운트되면 true(처음에는 로딩상태)
  state = {
    isLoading: true,
    movies : [],  //로딩된 영화데이터를 저장할 수 있도록 movies state를 만듦.
  };

  componentDidMount(){
    //영화 데이터 로딩!
    axios.get('https://yts.mx/api/v2/list_movies.json');
  }
  render(){
        const { isLoading } = this.state;
        return <div>{isLoading ? 'Loading ... ' : 'we are ready'}</div>;
      }


}

export default App;
