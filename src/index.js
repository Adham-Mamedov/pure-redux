import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './redux/rootReducer';
import {asyncCounterIncrement, changeTheme, counterDecrement, counterIncrement} from './redux/actions';
import './styles.css'

const counter = document.querySelector('#counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const themeBtn = document.querySelector('#theme')

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.counter;
  document.body.className = state.theme;
})
store.dispatch({type: 'INIT'})

addBtn.addEventListener('click', () => {
  store.dispatch(counterIncrement());
})

subBtn.addEventListener('click', () => {
  store.dispatch(counterDecrement());
})

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncCounterIncrement())
})

themeBtn.addEventListener('click', () => {
  store.dispatch(changeTheme(document.body.classList.contains('dark') ? 'light': 'dark'))
})
