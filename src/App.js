import React, {Component} from 'react';
import Message from './component/Message';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Message></Message>
        {/* <Greet name="amit" role="superman">
          <input type="button" value="check me!!" />
        </Greet>
        <Greet name="Anu" role="Wonder Lady"></Greet>
        <Welcome  name="amit" role="superman"/>
        <Welcome  name="amit" role="superman"/>
        <Hello></Hello> */}
      </div>
  );
  }
}

export default App;