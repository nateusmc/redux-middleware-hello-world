import React from 'react';
import { connect } from 'react-redux';
import { helloWorld, resetWorld, HELLO_WORLD, RESET_WORLD } from './actions';
import { addTimeout } from 'redux-timeout';

class HelloWorld extends React.Component {

  // STEP 1: onClick action dispatch
  onUpdate = () => {
    this.props.helloWorld();
  }

  onReset = () => {
    this.props.resetWorld()
  }

  // STEP 2: redux-timeout
  componentDidMount() {
    const { addTimeout, helloWorld } = this.props
    addTimeout(5000, HELLO_WORLD, helloWorld());
  }

  render () {
    return (
      <div>
        <h1>{this.props.display}</h1>
        <button className='say-hello' onClick={this.onUpdate}>Say Hello</button>
        <button className='reset' onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  display: state.display
});

const mapDispatchToProps = (dispatch) => ({
  addTimeout: (timeout, action, fn) => {
    dispatch(addTimeout(timeout, action, fn))
  },
  helloWorld: () => {
    dispatch(helloWorld());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
