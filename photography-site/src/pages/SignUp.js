import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  function registerUser() {
    fetch("http://localhost:3001/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: userName,
        email: email,
        password: password,
      }),
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("submit is working")
    registerUser();
    navigate("/login");

  };


  return (
    <section className="section bg-black bg-no-repeat bg-cover">
      <div class="min-h-screen py-40">
        <div class="container mx-auto">
          <div class="flex flex-col lg:flex-row w-8/12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mx-auto shadow-lg overflow-hidden">
            <div class="w-full lg:1/2 flex flex-col p-12 py-16 px-12">
              <h2 class="text-3xl mb-4 font-fourth animate-bounce"> Sign Up </h2>
              <p class='font-primary text-2xl mb-4'>Join the family</p>
              <form action="#">
                <div class="mt-5">
                  <input value={name} onChange={(e) => setName(e.target.value)} type="name" required
                    placeholder="Name"
                    className="border border-gray-400 py-1 px-2 w-full rounded-xl mx-auto"
                  />
                </div>
                <div class="mt-5">
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2 w-full rounded-xl mx-auto"
                  />
                </div>
                <div class="mt-5">
                  <input value={userName} onChange={(e) => setUsername(e.target.value)} type="Username" required
                    placeholder="Username"
                    className="border border-gray-400 py-1 px-2 w-full rounded-xl mx-auto"
                  />
                </div>
                <div class="mt-5">
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 w-full rounded-xl mx-auto"
                  />
                </div>
                <div class="mt-5">
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required
                    placeholder="Confirm Password"
                    className="border border-gray-400 py-1 px-2 w-full rounded-xl mx-auto"
                  />
                </div>
                <div class="mt-5">
                  <button onClick={handleSubmit}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all rounded-xl btn mb-[30px] animate-pulse"
                  >
                    <div class="text ">Login</div>
                  </button>
                </div>
              </form>
            </div>
            <div class="w-full lg:1/2 flex flex-col p-12 bg-lens2 bg-no-repeat bg-cover bg-center">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
