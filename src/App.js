import React from 'react';

class App extends React.Component {

  //컴포넌트가 마운트되면 true(처음에는 로딩상태)
  state = {
    isLoading: true,
    movies : [],  //로딩된 영화데이터를 저장할 수 있도록 movies state를 만듦.
  };

  componentDidMount(){
    //영화 데이터 로딩!
    setTimeout(() =>{
      this.setState({ isLoading : false });
    }, 6000);
  }
  render(){
        const { isLoading } = this.state;
        return <div>{isLoading ? 'Loading ... ' : 'we are ready'}</div>;
      }


}

export default App;
