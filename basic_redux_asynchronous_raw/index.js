const { createStore, applyMiddleware } = require("redux");
const {delayActionMiddleware, todoAsyncMiddleware}= require('./middlewares');
const {fetchTodos}= require('./utils.function');

// initial state
const initialState={
    todos:[],
}



// reducer
const todoReducer=(state=initialState, action)=>{
    switch (action.type) {
        case 'todos/todoAdded':
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        title:action.payload
                    }
                ]
            };
        
        case 'todos/todoLoaded':
            return {
                ...state,
                todos:[
                    ...state.todos,
                    ...action.payload
                ]
            };
    
        default:
            break;
    }
}



// store
const store=createStore(todoReducer, applyMiddleware(delayActionMiddleware,todoAsyncMiddleware));


// subscribe to store to state change
store.subscribe(()=>{
    console.log(store.getState());
});



// dispatch action
// store.dispatch(
//     {
//         type:'todos/todoAdded',
//         payload:"Let's learn Redux from Scratch in RAW manner",
//     }
// )
store.dispatch(fetchTodos);