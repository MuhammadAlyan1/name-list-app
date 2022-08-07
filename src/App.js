import { React, useReducer, useState } from 'react';
import './index.css';
import ItemList from './components/itemList/index.js';
import PopupModal from './components/popUpModal/index.js';
import reducer from './reducer';
import submitName from './utils/submitName';
import removeItem from './utils/removeItem';

function App() {
  const defaultValue = {
    isModalShowing: false,
    modalValue: '',
    person: { id: '', personName: '' },
    personList: [],
  };

  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultValue);

  return (
    <section className="container">
      <PopupModal state={state} />
      <div className="input-div">
        <input
          type="text"
          id="userInputField"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="addBtn"
          type="submit"
          onClick={(e) => submitName({ e, name, setName, dispatch })}
        >
          Add
        </button>
      </div>
      <ItemList removeItem={(e) => removeItem({ e, dispatch })} state={state} />
    </section>
  );
}

export default App;
