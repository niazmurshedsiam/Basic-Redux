import React, { useReducer } from 'react';
const initialState = {count : 0}
const reducer = (state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {count : state.count + 1}
            
        case 'DECREMENT':
            return {count : state.count - 1}
            
        default :
        return state;
        
    }

}

const ReducerCount = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>This is Dispatch {state.count}</h1>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>ADD Count</button>
            <br/>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>Sub Count</button>
        </div>
    );
};

export default ReducerCount;