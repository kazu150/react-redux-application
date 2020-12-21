import React, { useReducer, createContext} from 'react';
import reducer from '../reducers/';
import Events from './Events';
import EventForm from './EventForm';
import AppContext from '../contexts/AppContext';

export const EventContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={'hello'}>
      <div className="container-fluid">
        <EventForm 
          state={state}
          dispatch={dispatch}
        />
        <Events 
          state={state} 
          dispatch={dispatch}
        />
      </div>
    </AppContext.Provider>
  );
}

export default App;
