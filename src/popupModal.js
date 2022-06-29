import "./popupModal.css";

export function PopupModal(props) {
  const { state } = props;
  return (
    <div className="popupDiv">
      {state.isModalShowing && <h3>{state.modalValue}</h3>}
    </div>
  );
}
