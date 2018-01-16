import React from 'react';
import { connect } from 'react-redux';

class HelloWorld extends React.Component {

  render () {

    return (
      <div>
        <h1>{this.props.display}</h1>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  display: state.display;
};

export default connect(mapStateToProps)(HelloWorld);
