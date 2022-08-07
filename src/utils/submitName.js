function submitName({ e, name, setName, dispatch }) {
  e.preventDefault();

  if (name === '') {
    dispatch({ type: 'invalidInput' });
    dispatch({ type: 'showModal' });

    setTimeout(() => {
      dispatch({ type: 'hideModal' });
    }, 1000);

    return;
  }

  dispatch({ type: 'addPerson', payload: { name } });
  dispatch({ type: 'addPersonToList' });
  dispatch({ type: 'showModal' });
  dispatch({ type: 'AddModalValue' });
  setName('');

  setTimeout(() => {
    dispatch({ type: 'hideModal' });
  }, 1000);
}

export default submitName;
