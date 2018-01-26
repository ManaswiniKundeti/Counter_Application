const redux = require('redux');   // nodejs syntax for import
const createStore = redux.createStore;

const initialState = {
  counter : 0
}

//reducer is strongly connected to the store. its the only thing that updates
//state in the store. We need to pass reducer to the creation function up.
//so we need to create reducer even before we create store
//reducer
const rootReducer = (state = initialState ,action) => {
    if(action.type == 'INC_COUNTER') {
      return {
        ...state,
        counter : state.counter + 1
      };
    }
    if(action.type == 'ADD_COUNTER') {
      return {
        ...state,
        counter : state.counter + action.value
      };
    }
    return state;
};
//store
const store = createStore(rootReducer);
console.log(store.getState());  //func to pullout to display state from store

//subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

//dispatching action
store.dispatch({type : 'INC_COUNTER'});
store.dispatch({type : 'ADD_COUNTER', value : 10});
console.log(store.getState());
