import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <button onClick={()=> this.props.history.push('/first')}>Click</button>
      <h1>Hello Kitty!</h1>
      </div>
    );
  }
}
export default Home;