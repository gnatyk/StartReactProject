import React, { Component } from 'react';
import { sayHi } from '../../api.jsx';
class First extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: '',
        }

    }
    testRequest() {
        sayHi().then((data) => {
          this.setState(data)
        });
    }

  render() {
    return (
      <div>
        <h1>First!</h1>
        <button onClick={() => this.testRequest()}>test request</button>
        <p>{this.state.data ? this.state.data : null }</p>
      </div>
    );
  }
}
export default First;