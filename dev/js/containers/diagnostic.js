import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

const Diagnostic = ({xxx, myState, on, mtoggle}) => {
      return(
          <div>
              <button onClick={mtoggle}>toggle</button>
              <br />
              {on && <span>{myState}</span>}
          </div>
      );
}

function mapStateToProps(state) {
    return {
      myState: JSON.stringify(state),
      on: state.diagnostic.on
    }
}

function matchDispatchToProps(dispatch) {
  return {
    mtoggle: function() {
      const action = {
        type: "TOGGLE_DIAGNOSTIC"
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Diagnostic);
