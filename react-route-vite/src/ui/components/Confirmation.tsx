import { useLocation } from 'react-router-dom';

export default function Confirmation() {
  const {state} = useLocation();
  return (
    <div className="container">
      <h1>Thank You!</h1>
      {state && (
        <>
        <p>{state.name}, You're now registered for FN Tech.</p>
        <p>We have sent more details on <strong>{state.email}</strong></p>
        </>
      )}
    </div>
  );
}
