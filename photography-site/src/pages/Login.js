import {React,  useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

const Login = () => {
  
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [errorText, setErrorText] = useState("");

const navigate = useNavigate();
  const sendCredentials = (username, password) => {
    

    fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        console.warn("Invalid Username/Password");
        throw Error("Invalid Username/Password");
      })
      .then((json) => {
        window.localStorage.setItem('user', JSON.stringify(json))
        navigate('/showcase')
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username && password) {
      sendCredentials(username, password)
    } else {
      setErrorText("Please enter a valid information")
    }
  }


  return (
    <section className="section bg-black bg-no-repeat bg-cover">
      <div class="min-h-screen py-40">
        <div class="container mx-auto">
          <div class="flex flex-col lg:flex-row w-8/12 bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-xl mx-auto shadow-lg overflow-hidden">
            <div class="w-full lg:1/2 flex flex-col p-12 bg-lens2 bg-no-repeat bg-cover bg-center">
            </div>
            <div class="w-full lg:1/2 flex flex-col p-12 py-16 px-12">
              <h2 class="text-white text-3xl mb-4 font-fourth animate-bounce"> Log in </h2>
              {/* <p class='font-primary text-2xl mb-4'>Join the family</p> */}
              <form action="#">
                <div class="mt-5">
                  <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" required
                    placeholder="Username"
                    className="text-black border border-gray-400 py-1 px-2 w-full rounded-xl mx-auto"
                  />
                </div>
                <div class="mt-5">
                  <input value={password} onChange={(e) => setPassword(e.target.value)}
                    type="password" required
                    placeholder="Password"
                    className="text-black border border-gray-400 py-1 px-2 w-full rounded-xl mx-auto"
                  />
                </div>
                <div class="mt-5">
                <button id = "a" onClick={handleSubmit}
              className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all rounded-xl btn mb-[30px]"
            >
              <div class="font-primary">Join the family</div>
            </button>
            {errorText && <span>{errorText}</span>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Login;
