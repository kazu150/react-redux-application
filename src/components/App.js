import React, { useReducer, createContext} from 'react';
import reducer from '../reducers/';
import Events from './Events';
import EventForm from './EventForm';

export const EventContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
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
  );
}

export default App;
