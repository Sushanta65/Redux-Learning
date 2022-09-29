import React, { useReducer } from 'react';

const initialState = 0;
const reducerFun = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}
const Counter = () => {
    
    const [count, dispatch] = useReducer(reducerFun, initialState);
    return (
        <div>
            <h3 className='text-2xl m-4 text-cyan-600 '>Count: <span className='text-green-500 font-bold'>{count}</span></h3>
            <button onClick={() => dispatch('increment')} className='border-2 py-3 px-5 border-cyan-500 m-4 uppercase bg-cyan-400 hover:bg-cyan-600 font-semibold rounded'>Increment</button>
            <button onClick={() => dispatch('decrement')} className='border-2 py-3 px-5 border-cyan-500 m-4 uppercase bg-cyan-400 hover:bg-cyan-600 font-semibold rounded'>Decrement</button>
        </div>
    );
};

export default Counter;