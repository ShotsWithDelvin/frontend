import {React,  useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import APIURL from '../apiEndpoint'


const Login = () => {
const { setUser } = useContext(UserContext);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [errorText, setErrorText] = useState("");

const navigate = useNavigate();
  const sendCredentials = (username, password) => {
    

    fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        console.warn("Invalid Username/Password");
      })
      .then((json) => {
        setUser(json.user)
        localStorage.setItem('showcase-token', JSON.stringify(json))
        navigate('/showcase')
      })
      // .catch((err) => console.log(err));
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
      <div className="min-h-screen py-40">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-8/12 bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:1/2 flex flex-col p-12 bg-lens2 bg-no-repeat bg-cover bg-center">
            </div>
            <div className="w-full lg:1/2 flex flex-col p-12 py-16 px-12">
              <h2 className="text-white text-3xl mb-4 font-fourth animate-bounce"> Log in </h2>
              {/* <p className='font-primary text-2xl mb-4'>Join the family</p> */}
              <form action="#">
                <div className="mt-5">
                  <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" required
                    placeholder="Username"
                    className="text-black border border-gray-400 py-1 px-2 w-full rounded-xl mx-auto"
                  />
                </div>
                <div className="mt-5">
                  <input value={password} onChange={(e) => setPassword(e.target.value)}
                    type="password" required
                    placeholder="Password"
                    className="text-black border border-gray-400 py-1 px-2 w-full rounded-xl mx-auto"
                  />
                </div>
                <div className="mt-5">
                <button id = "a" onClick={handleSubmit}
              className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all rounded-xl btn mb-[30px]"
            >
              <div className="font-primary">Join the family</div>
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
