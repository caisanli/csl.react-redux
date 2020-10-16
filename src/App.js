import React from 'react'
import './App.css'
import { connect } from './lib/react-redux-16'
function App (props) {
    var action = {
        type: 'ADD'
    }
    function addCount () {
        props.addCount(action)
    }
    return (
        <div className="App">
            <div className="count-box">
                { props.count }
            </div>
            <button onClick={addCount}> +1 </button>
        </div>
    )
}

var app = connect(
    function (state) {
        console.log('state：', state)
        return {
            count: state.count,
        }
    },
    function (dispatch) {
        return {
            addCount: function (action) {
                dispatch(action)
            },
        }
    }
)(App);

export default app;
