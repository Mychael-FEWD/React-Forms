import { useState } from "react";
export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
async function handleSubmit (e) {
 e.preventDefault();
try {
  const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{method:"POST", body:{username, password}})
  const result = await response.json();
  console.log(result);
} catch(error){setError(error)}
}
  return (
    <div>
      <h2>Sign Up!</h2>
     {error && <p>{error}</p>}
      <label>
        Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
      </label>
      <br />
      <label>
        Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
      </label>
      <br />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  );
}
