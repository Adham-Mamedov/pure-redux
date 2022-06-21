import {CHANGE_THEME, DECREMENT, INCREMENT} from './types';

export function counterIncrement() {
  return {
    type: INCREMENT,
  }
}

export function counterDecrement() {
  return {
    type: DECREMENT,
  }
}

export function asyncCounterIncrement() {
  return function (dispatch) {
    setTimeout(() => dispatch(counterIncrement()), 1500)
  }
}

export function changeTheme(value) {
  return {
    type: CHANGE_THEME,
    payload: value
  }
}