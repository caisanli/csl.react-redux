import React from 'react';
import PropTypes from 'prop-types';
import StoreContext from '../context';

export default class Provider extends React.Component {
    render() {
        return (
            <StoreContext.Provider value={{store: this.props.store}}>
                { this.props.children }
            </StoreContext.Provider>
        );
    }
}

Provider.propType = {
    store: PropTypes.object
}