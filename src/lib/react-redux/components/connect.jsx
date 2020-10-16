import React from 'react';
import PropTypes from 'prop-types';

export default function (mapStateToProps, mapDispatchToProps) {
    return function(WrappedComponent) {
        class Connect extends React.Component {
            componentDidMount() {          
                //从context获取store并订阅更新          
                this.context.store.subscribe(this.handleStoreChange.bind(this));        
            }       
            handleStoreChange() {          
                // 触发更新                 
                this.forceUpdate();        
            }  
            render() {
                return <WrappedComponent 
                            // 传入该组件的props,需要由connect这个高阶组件原样传回原组件              
                            { ...this.props }              
                            // 根据mapStateToProps把state挂到this.props上              
                            { ...mapStateToProps(this.context.store.getState()) }               
                            // 根据mapDispatchToProps把dispatch(action)挂到this.props上              
                            { ...mapDispatchToProps(this.context.store.dispatch) }    
                        />
            }
        }
        //接收context的固定写法      
        Connect.contextTypes = {        
            store: PropTypes.object      
        }  
        return Connect;
    }
}
