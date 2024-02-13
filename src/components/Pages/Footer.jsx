import React, { useState } from "react";

export default function Footer() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <footer className="py-5">
      <div className="text-start">
        <span className="font-size">Questions? Call 000-800-919-1694</span>
      </div>
      <br></br>
      <div className="footerlinks bg-black-50 text-start">
        <ul className="grid grid-cols-4 gap-4   ">
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/Help Centre">Help Centre</a>
          </li>
          <li>
            <a href="/Account">Account</a>
          </li>
          <li>
            <a href="/Media Centre">Media Centre</a>
          </li>
          <li>
            <a href="/Investor Relations">Investor Relations</a>
          </li>
          <li>
            <a href="/">Jobs</a>
          </li>
          <li>
            <a href="/Ways to Watch">Ways to Watch</a>
          </li>
          <li>
            <a href="/Terms of Use">Terms of Use</a>
          </li>
          <li>
            <a href="/Privacy">Privacy</a>
          </li>
          <li>
            <a href="/Cookie Preferences">Cookie Preferences</a>
          </li>
          <li>
            <a href="/">Corporate Information</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/Speed Test">Speed Test</a>
          </li>
          <li>
            <a href="/Legal Notices">Legal Notices</a>
          </li>
          <li>
            <a href="/Only on Netflix">Only on Netflix</a>
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
        <span className="font-size">Netflix India</span>
      </div>
    </footer>
  );
}
