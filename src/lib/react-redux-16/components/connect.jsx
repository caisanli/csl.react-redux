import React from 'react';
import StoreContext from '../context';

export default function (mapStateToProps, mapDispatchToProps) {
    return function (WrappedComponent) {
        class Connect extends React.Component {
            componentDidMount() {
                this.context.store.subscribe(this.handleStoreChange.bind(this))
            }
            handleStoreChange() {
                  // 触发更新                 
                  this.forceUpdate();
            }
            render() {
                return (
                    <WrappedComponent 
                        {...this.props}
                        {...mapStateToProps(this.context.store.getState())}
                        {...mapDispatchToProps(this.context.store.dispatch)}
                    />
                )
            }
        }
        Connect.contextType = StoreContext;
        return Connect;
    }
}