import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigation = useNavigate();
  const emailRef = useRef(null);
  const nameRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const email = emailRef.current as unknown as Record<string, unknown>;
    const name = nameRef.current as unknown as Record<string, unknown>;
    navigation('/confirmation', { 
      state: {name: name?.value, email: email?.value }
    });
  }

  return (
    <div className="container">
      <h1>Register for FN Tech</h1>
      <p>
        Make sure to grab your spot for this year's conference! We love
        technology and consistently work towards being the premier provider of
        technology solutions and events that connect the world.
      </p>
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input type="text" name="email" ref={nameRef} />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
