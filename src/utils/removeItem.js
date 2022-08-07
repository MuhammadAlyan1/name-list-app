function removeItem({ e, dispatch }) {
  dispatch({
    type: 'removePersonFromList',
    payload: { id: e.target.parentElement.dataset.id },
  });

  dispatch({ type: 'showModal' });
  dispatch({ type: 'removeModalValue' });

  setTimeout(() => {
    dispatch({ type: 'hideModal' });
  }, 1000);
}

export default removeItem;
