const { useState } = require("react");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password);
  }
  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log in</h3>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button>Log in</button>
    </form>
  );
};

export default Login;
