import { React, useReducer, useRef } from "react";
import ReactDom from "react-dom";
import "./index.css";
import { ItemList } from "./itemList.js";
import { PopupModal } from "./popupModal.js";
function App() {
  function reducer(state, action) {
    if (action.type === "addPerson") {
      return {
        ...state,
        person: {
          id: new Date().getTime().toString(),
          personName: inputRef.current.value,
        },
      };
    } else if (action.type === "addPersonToList") {
      return {
        ...state,
        personList: [state.person, ...state.personList],
      };
    } else if (action.type === "removePersonFromList") {
      return {
        ...state,
        personList: state.personList.filter(
          (person) => person.id !== action.value.target.parentElement.dataset.id
        ),
      };
    } else if (action.type === "showModal") {
      return {
        ...state,
        isModalShowing: true,
      };
    } else if (action.type === "hideModal") {
      return {
        ...state,
        isModalShowing: false,
      };
    } else if (action.type === "AddModalValue") {
      return {
        ...state,
        modalValue: "Item added",
      };
    } else if (action.type === "removeModalValue") {
      return {
        ...state,
        modalValue: "Item removed",
      };
    } else if (action.type === "invalidInput") {
      return {
        ...state,
        modalValue: "Please enter a value",
      };
    } else {
      return state;
    }
  }

  function submitForm(e) {
    e.preventDefault();

    if (inputRef.current.value === "") {
      dispatch({ type: "invalidInput" });
      dispatch({ type: "showModal" });
      setTimeout(() => {
        dispatch({ type: "hideModal" });
      }, 1000);

      return;
    }

    dispatch({ type: "addPerson" });
    dispatch({ type: "addPersonToList" });
    dispatch({ type: "showModal" });
    dispatch({ type: "AddModalValue" });

    setTimeout(() => {
      dispatch({ type: "hideModal" });
    }, 1000);
  }

  function removeItem(e) {
    dispatch({ type: "removePersonFromList", value: e });

    dispatch({ type: "showModal" });
    dispatch({ type: "removeModalValue" });

    setTimeout(() => {
      dispatch({ type: "hideModal" });
    }, 1000);
  }

  const defaultValue = {
    isModalShowing: false,
    modalValue: "",
    person: { id: "", personName: "" },
    personList: [],
  };

  const inputRef = useRef(null);

  const [state, dispatch] = useReducer(reducer, defaultValue);

  return (
    <section className="container">
      <PopupModal state={state} />
      <div className="input-div">
        <input
          type="text"
          id="userInputField"
          ref={inputRef}
          onChange={(e) => e.target.value}
        />
        <button className="addBtn" type="submit" onClick={submitForm}>
          Add
        </button>
      </div>
      <ItemList removeItem={removeItem} state={state} />
    </section>
  );
}

ReactDom.render(<App />, document.querySelector("#root"));
