import React, { Component } from 'react';

import { connect } from 'react-redux';

import { testButton } from './../../redux/actionCreators';

class Demo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Test: 'kyralo'
        }
    }

    _sayHi() {
        this.props.reqTodoList("well");
        console.log('1', this.props);
        console.log('3', this.state);

    }

    render() {
        return (
            <div>
                <button onClick = { this._sayHi.bind(this) } >
                click </button>
            <hr />
                <p> { this.props.Test } </p>
            <hr />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log('2', state);
    return {
        Test: state.Test
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        reqTodoList(Test) {
            const action = testButton(Test);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);