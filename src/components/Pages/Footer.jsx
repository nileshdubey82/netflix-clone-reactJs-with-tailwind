import React, { useState } from "react";

export default function Footer() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <footer className=" bg-black text-center px-[10%] text-white py-10">
      <div className="text-start">
        <span className="text-sm lg:text-xl">
          Questions? Call 000-800-919-1694
        </span>
      </div>
      <br></br>
      <div className="footerlinks bg-black-50 text-start">
        <ul className="grid  grid-cols-2  md:grid-cols-4 gap-4  text-sm lg:text-xl ">
          <li>
            <a className="underline" href="/faq">FAQ</a>
          </li>
          <li>
            <a className="underline" href="/Help Centre">Help Centre</a>
          </li>
          <li>
            <a className="underline" href="/Account">Account</a>
          </li>
          <li>
            <a className="underline" href="/Media Centre">Media Centre</a>
          </li>
          <li>
            <a className="underline" href="/Investor Relations">Investor Relations</a>
          </li>
          <li>
            <a className="underline" href="/">Jobs</a>
          </li>
          <li>
            <a className="underline" href="/Ways to Watch">Ways to Watch</a>
          </li>
          <li>
            <a className="underline" href="/Terms of Use">Terms of Use</a>
          </li>
          <li>
            <a className="underline" href="/Privacy">Privacy</a>
          </li>
          <li>
            <a className="underline" href="/Cookie Preferences">Cookie Preferences</a>
          </li>
          <li>
            <a className="underline" href="/">Corporate Information</a>
          </li>
          <li>
            <a className="underline" href="/">Contact Us</a>
          </li>
          <li>
            <a className="underline" href="/Speed Test">Speed Test</a>
          </li>
          <li>
            <a className="underline" href="/Legal Notices">Legal Notices</a>
          </li>
          <li>
            <a className="underline" href="/Only on Netflix">Only on Netflix</a>
          </li>
        </ul>
      </div>
      <br></br>
      <div className="text-start">
        <form>
          <select
            id="mySelect"
            value={selectedOption}
            onChange={handleSelectChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-black"
          >
            <option value="option1">English</option>
            <option value="option2">Hindi</option>
          </select>
        </form>
      </div>
      <br></br>
      <div className="text-start">
        <span className="text-sm lg:text-xl">Netflix India</span>
      </div>
    </footer>
  );
}
