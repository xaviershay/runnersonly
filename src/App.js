import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {switched: false}

    this.switchState = this.switchState.bind(this)
  }

  switchState() {
    this.setState({switched: !this.state.switched})
  }

  render() {
    var switched = this.state.switched;
    return (
      <div className="App container text-center">
      <div className='row center'>
        <h1 className='blink'>RUNNERS ONLY</h1>
        <img src='7upspot.gif' className='spot' />
        <p className='lead'>The premier dating site for runners. (No cyclists!)</p>
      </div>
        <div>
        <img src='mocko-3.jpg' width='300' />
        <img src='mocko-1.jpg' width='200'/>
        <img src='mocko-2.jpg' width='300' />
        </div>
        <p />
        <div>
          <p>
            <img className='pull-left' src='americanflag.gif' />
            <img className='pull-right' src='americanflag.gif' />
            <strong>CHRIS MOCKO. Would you date this man!?</strong></p>
          {!switched &&
          <div>
            <button id='no' className='btn btn-danger btn-large choice' onMouseOver={this.switchState}>No</button>
            &nbsp;
            <a id='yes' href='contact.html' className='btn btn-success btn-large choice'>
              <img className='pull-left' src='hot.gif' />
              Yes</a>
          </div>
          }
          {switched &&
          <div>
            <a id='yes' href='contact.html' className='btn btn-success btn-large choice'>
              <img className='pull-left' src='hot.gif' />
              Yes</a>
            &nbsp;
            <button id='no' className='btn btn-danger btn-large choice' onMouseOver={this.switchState}>No</button>
          </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
