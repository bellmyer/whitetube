import { applyMiddleware, createStore } from 'redux'
import { Reducer, initialState } from './reducer'
import { logger } from 'redux-logger'

export const ConfigureStore = () => {
  const store = createStore(
    Reducer,
    applyMiddleware(logger)
  );

  return store;
}