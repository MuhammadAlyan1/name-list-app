export default function reducer(state, action) {
  switch (action.type) {
    case 'addPerson':
      const { name } = action.payload;
      return {
        ...state,
        person: {
          id: new Date().getTime().toString(),
          personName: name,
        },
      };

    case 'addPersonToList':
      return {
        ...state,
        personList: [state.person, ...state.personList],
      };

    case 'removePersonFromList':
      const { id } = action.payload;
      return {
        ...state,
        personList: state.personList.filter((person) => person.id !== id),
      };

    case 'showModal':
      return {
        ...state,
        isModalShowing: true,
      };

    case 'hideModal':
      return {
        ...state,
        isModalShowing: false,
      };

    case 'AddModalValue':
      return {
        ...state,
        modalValue: 'Item added',
      };

    case 'removeModalValue':
      return {
        ...state,
        modalValue: 'Item removed',
      };

    case 'invalidInput':
      return {
        ...state,
        modalValue: 'Please enter a value',
      };

    default:
      return {
        ...state,
      };
  }
}
