import React from 'react';
import PropTypes from 'prop-types';

export default class Provider extends React.Component {

    static childContextTypes = {
        store: PropTypes.object
    }
    // 实现getChildContext方法,返回context对象,也是固定写法  
    getChildContext() {    
        return { store: this.store }  
    }  

    constructor(props) {
        super();
        this.store = props.store;
    }
    render() {
        return this.props.children;
    }
}

Provider.propType = {
    store: PropTypes.object.isRequired,
    // children: PropTypes.element
}