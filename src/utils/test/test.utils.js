import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { legacy_createStore as createStore } from 'redux'
import {rootReducer} from '../../store/root-reducer'
export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = createStore(rootReducer,preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>
        <Router>
             {children}  
        </Router>
        </Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}