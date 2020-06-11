import React from 'react';

class App extends React.Component {
  
  constructor(props){
    super(props);
    console.log('hello');
  }

  componentDidMount(){
    console.log('component rendered - componentDidMount');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate - component update');
  }

  //컴포넌트가 화면을 떠날때 실행
  componentWillUnmount(){
    console.log('Goodbye, cruel world');    
  }

  state = {
    count : 0,
  };

  add = () =>{
    //this.state.count = 1;
    //this.setState( { count : 1 });
    //this.setState( { count : this.state.count + 1 })
    this.setState(current => (
        {
          count : current.count + 1
        }
      )
    );
  };

  minus = () =>{
    //this.setState( { count : -1 });
    //this.setState( { count : this.state.count - 1 })
    this.setState(current => (
        {
          count : current.count -1
        }
      )
    );
  };

  render(){
    console.log('render');
    return (
      <div>
        <h1>
        The number is : {this.state.count}  
        </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );

  }
}


export default App;
