import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, name);
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-md">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create account" : "Login"}
        </p>
        <p className="">
          Please {state === "Sign Up" ? "sign up" : "login"} to book an
          appointment
        </p>
        <div className="w-full">
          <p>Full name</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button className="w-full bg-app-primary text-white py-2 rounded">
          {state === "Sign Up" ? "Create account" : "Login"}
        </button>
        <p className="w-full text-center">
          Already have an account? Login here
        </p>
      </div>
    </form>
  );
};

export default Login;
