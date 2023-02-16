import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MailIcon from "@mui/icons-material/Mail";

const Contact = () => {

   
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ibylisq",
        "template_x0cfqde",
        form.current,
        "uI6dem_EN1VmtKRlW"
      )
      .then(
        (result) => {
          setMessageSent(true);
          e.target.reset("Message sent");
        },
        (error) => {}
      );
  };

  return (
    <section className="section bg-black">
      <div class="flex w-full min-h-screen justify-center items-center">
        <div class="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-gradient-to-r from-gray-600 to-red-600 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
          <div class="flex flex-col justify-between">
            <div>
              <h1 class="font-bold font-primary text-4xl tracking-wide animate-bounce">
                Reach Me
              </h1>
              <p class="pt-4 text-sm font-primary ">
                {" "}
                The journey is to create images that not only freeze time, but
                also tell a story and evoke emotions. When I'm not taking
                pictures, you can find me dancing on instagram or on Vero. Feel
                free to reach out to me for inquiries or just to say hi.
              </p>
              <br />
              <div class="inline-flex space-x-2 items-center">
                <MailIcon />
                <span class="font-primary"> DelvinReyes.95@Gmail.com</span>
              </div>
              <h2 class="pt-2 font-primary "> Prices </h2>
              <p class="pt-4 text-sm font-primary "> COMING SOON</p>
            </div>

            <div class="flex space-x-4 text-lg"></div>
          </div>
          <div class="relative">
            <div class="absolute z-0 w-40 h-40 bg-gradient-to-r from-gray-600 to-red-600 -right-28 -top-28"></div>
            <div class="absolute z-0 w-40 h-40 bg-gradient-to-r from-gray-600 to-red-600 -left-28 -bottom-16"></div>

            <div class="relative z-10 bg-white rounded-xl shadow-lg p-8 md:w-80">
              <form
                ref={form}
                onSubmit={sendEmail}
                class="flex flex-col space-y-4"
              >
                <div>
                  <label for="" class="text-sm">
                    Your name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    class="text-black ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>

                <div>
                  <label for="" class="text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email address"
                    class="text-black ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
                <div>
                  <label for="" class="text-sm">
                    Message
                  </label>
                  <textarea
                    placeholder="Message"
                    name="message"
                    class="text-black ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
                <button
                  type="submit"
                  value="Send"
                  class="self-end bg-gradient-to-r from-gray-600 to-red-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all rounded-xl px-6 py-2 uppercase text-sm "
                >
                  {" "}
                  Send Message
                </button >
                {messageSent && <p className="text-black font-primary">Message Sent!</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
