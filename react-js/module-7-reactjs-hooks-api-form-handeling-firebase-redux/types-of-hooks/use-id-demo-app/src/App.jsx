import { useId } from "react";

function SignupForm() {
  const nameId = useId();

  return (
    <div>
      <label htmlFor={nameId}>Name</label>
      <input id={nameId} type="text" />
    </div>
  );
}

export default SignupForm;