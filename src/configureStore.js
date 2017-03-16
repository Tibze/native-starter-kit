
import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducer from './reducers';
import promise from './promise';

export default function configureStore(onCompletion:()=>void):any {
  // const enhancer = compose(
  //   applyMiddleware(thunk, promise),
  //   devTools({
  //     name: 'nativestarterkit', realtime: true,
  //   }),
  // );

  const middlewares = [thunk, promise]
  const enhancer = composeWithDevTools({
    // Options: https://github.com/jhen0409/react-native-debugger#options
  })(
    applyMiddleware(...middlewares)
  )

  const store = createStore(reducer, enhancer);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}
