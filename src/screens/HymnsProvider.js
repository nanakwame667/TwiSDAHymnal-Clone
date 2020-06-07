import React, { Component } from 'react';

import { DATA } from '../../DATA';

import HymnsContext from './hymnsContext';

export default class HymnsProvider extends Component{
     state={
         data:DATA
     }
    render(){
        return(
            <HymnsContext.Provider
            value={{
                data:this.state.data
            }}
            >
            {this.props.children}
            </HymnsContext.Provider>
        )
    }
}