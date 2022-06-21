export function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, {type: '__INIT__'});
  const subscriptions = [];

  return {
    dispatch(action) {
      state = rootReducer(state, action);
      subscriptions.forEach(cb => cb())
    },
    subscribe(callback) {
      subscriptions.push(callback);
    },
    getState() {
      return state;
    }
  }
}