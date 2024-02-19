import { AiFillNotification } from "react-icons/ai";
import { BiCreditCard } from "react-icons/bi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import React from "react";

export default function ContactUs() {
  return (
    <section className="py-[100px] flex justify-center bg-[url('https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430867.jpg')] bg-no-repeat bg-cover">
      <div className="w-[40%]  backdrop-blur-sm bg-black/30 p-[50px] rounded-md">
        <h1 className="text-4xl text-white">Contact Us</h1>
        <p className="text-xl text-white my-2">
          Tell us more and we'll find the best solution for you
        </p>
        <form>
          <input
            type="text"
            name="username"
            className="user-name input-info w-[100%] input-md rounded-lg my-2"
            placeholder="Describe your issue"
          />
        </form>
        <div>
          <h1 className="text-2xl text-white my-10">Quick Links</h1>
          <h1 className="text-md text-white my-5 flex items-center">
            {" "}
            <AiOutlineInfoCircle />{" "}
            <a href="#" className="underline mx-2">
              Content Grievances in India
            </a>
          </h1>
          <h1 className="text-md text-white my-5 flex items-center">
            {" "}
            <RiLockPasswordFill />{" "}
            <a href="#" className="underline mx-2">
              Reset password
            </a>
          </h1>
          <h1 className="text-md text-white my-5 flex items-center">
            <MdEmail />{" "}
            <a href="#" className="underline mx-2">
              Update email
            </a>
          </h1>
          <h1 className="text-md text-white my-5 flex items-center">
            {" "}
            <AiFillQuestionCircle />{" "}
            <a href="#" className="underline mx-2">
              Get help signing in
            </a>
          </h1>
          <h1 className="text-md text-white my-5 flex items-center">
            {" "}
            <BiCreditCard />{" "}
            <a href="#" className="underline mx-2">
              Update payment method
            </a>
          </h1>
          <h1 className="text-md text-white my-5 flex items-center">
            {" "}
            <AiFillNotification />{" "}
            <a href="#" className="underline mx-2">
              Request TV shows or movies
            </a>
          </h1>
        </div>
      </div>
    </section>
  );
}
