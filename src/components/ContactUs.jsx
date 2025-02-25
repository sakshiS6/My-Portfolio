import { IconArrowRightBar } from "@tabler/icons-react";
import React, { useState } from "react";

const ContactUs = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ff435a03-ef7f-4853-9e29-ab8e796674f6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Nunito">Connect with me</h4>
      <h2 className="text-center text-5xl font-Nunito">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Nunito">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
        voluptas quibusdam officia aliquam quam saepe veniam, sed porro vero?
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input name="name" className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkhover/30 dark:border-white/90" type="text" placeholder="Enter your Name" required />
          <input name="email" className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkhover/30 dark:border-white/90" type="email" placeholder="Enter your Email" required />
        </div>
        <textarea
        name="message"
         className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkhover/30 dark:border-white/90"
          rows="6"
          placeholder="Type your message here..."
          required
        ></textarea>
        <button className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkhover" type="submit">Submit Now</button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default ContactUs;
