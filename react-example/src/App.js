import React, { Component } from 'react';
import { console } from 'dev-say';

import './normalize.css';
import './skeleton.css';

const quotedCode = `
const someObject = {
  keyA: 1,
  keyB: {
    keyC: {
      keyD: [2,2,3, 'Hello, there', { keyE: 'END.' }]
    }
  }
};
console.log_obj(someObject);
console.log_obj_tree(someObject);
`;

class App extends Component {

  state = {
    someObject: {
     keyA: 1,
     keyB: {
       keyC: {
         keyD: [2,2,3, 'Hello, there', { keyE: 'END.' }]
       }
     }
   }
 };

 demonstrateDevSay = () => {
   console.log('console.log_obj:');
   console.log_obj(this.state.someObject);
   console.log('console.log_obj_tree:');
   console.log_obj_tree(this.state.someObject);
 };

  render() {

    return (
      <div className="container">
        <div className="row">
          <h3 style={{textAlign: 'center', marginTop: '25px'}}>
            <span style={{color: 'blue'}}>dey-say</span>
            . A browser console debugging library
          </h3>
        </div>

        <div
          className="row"
          style={{marginTop: '25px'}}>
          <div className="twelve columns">
            <pre>
            <code>
              { quotedCode }
            </code>
            </pre>
            <input
              className="button-primary"
              type="submit"
              onClick={ this.demonstrateDevSay }
              value="Try dev-say"
              />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
