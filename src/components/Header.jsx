import nutriCount from "../imgs/nutriCount.svg";

export default function Header({ setModalState, modalState }) {
  return (
    <div className="header">
      <img src={nutriCount} alt="NutriCount Logo" />
      <div>
        <a
          className="info-modal-button"
          onClick={() => setModalState(!modalState)}
        >
          How To Use
        </a>
      </div>
    </div>
  );
}
