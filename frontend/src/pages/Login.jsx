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
        {state === "Sign Up" && (
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
        )}
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
        {state === "Sign Up" ? (
          <p className="w-full text-center">
            Already have an account?
            <span
              className="cursor-pointer text-app-primary underline"
              onClick={() => setState("Login")}
            >
              &nbsp;Login here
            </span>
          </p>
        ) : (
          <p className="w-full text-center">
            Create a new account?
            <span
              className="cursor-pointer text-app-primary underline"
              onClick={() => setState("Sign Up")}
            >
              &nbsp;Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
