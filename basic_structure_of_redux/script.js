// get required dom elements
const counterEl=document.getElementById('counter')
const incrementEl=document.getElementById('increment')
const decrementEl=document.getElementById('decrement')

// action identifiers 
const INCREMENT='increment';
const DECREMENT='decrement';

//actions creator
const increment=(val)=>{
    return {
        type:INCREMENT, // type property is mandatory 
        payload:val
    };
};
const decrement=(val)=>{
    return {
        type:DECREMENT,
        payload:val
    };
};

// initial state
const initialState={
    value:0
};

// reducer function 
const counterReducer=(state=initialState, action)=>{
    if(action.type===INCREMENT){
        return {
            ...initialState,
            value:state.value+ action.payload
        };
    }
    else if(action.type===DECREMENT){
        return {
            ...initialState,
            value:state.value-action.payload
        };
    }
    else return state;
};

// creating redux store 
const store=Redux.createStore(counterReducer);

const render=()=>{
    const state=store.getState();
    counterEl.innerText=state.value.toString();
};

// subscribe to redux store
store.subscribe(render);

// update UI initially 
render();

// button click listeners
incrementEl.addEventListener('click', ()=>{
    store.dispatch(increment(5))
});
decrementEl.addEventListener('click', ()=>{
    store.dispatch(decrement(2))
});


