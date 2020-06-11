import React from 'react';

class App extends React.Component {

  //컴포넌트가 마운트되면 true(처음에는 로딩상태)
  state = {
    isLoading: true,
  };

  render(){
        const { isLoading } = this.state;
        return <div>{isLoading ? 'Loading ... ' : 'we are ready'}</div>;
      }


}

export default App;
