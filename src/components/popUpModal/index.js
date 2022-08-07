import styles from './index.module.css';

const PopupModal = (props) => {
  const { state } = props;
  return (
    <div className={styles.popupDiv}>
      {state.isModalShowing && <h3>{state.modalValue}</h3>}
    </div>
  );
};

export default PopupModal;
