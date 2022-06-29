import "./itemList.css";
export function ItemList(props) {
  const { removeItem, state } = props;
  return (
    <div className="itemList">
      {state.personList.map((person) => {
        return (
          <section className="item" key={person.id} data-id={person.id}>
            <h3>{person.personName}</h3>
            <button onClick={(e) => removeItem(e)}>remove</button>
          </section>
        );
      })}
    </div>
  );
}
