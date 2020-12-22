import React, { useReducer, createContext} from 'react';
import reducer from '../reducers/';
import Events from './Events';
import EventForm from './EventForm';
import AppContext from '../contexts/AppContext';

export const EventContext = createContext();

const App = () => {
  const initialState = {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
}

export default App;
