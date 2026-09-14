import { useNavigate } from 'react-router';
import classes from './Modal.module.css';

function Modal({ children }) {
  const navigate = useNavigate();
  
  return (
    <>
      <div className={classes.backdrop} onClick={() => navigate('..')} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;