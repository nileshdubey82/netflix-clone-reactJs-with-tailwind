import React from "react";

export default function Login() {
  return (
    <>
      <div
        id="login-hero-container"
        style={{
          backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg)`,
        }}
      >
        <div
          id="form-container"
          className=" px-8 py-8 bg-black w-auto flex justify-center flex-col align-middle backdrop-opacity-10 backdrop-invert bg-black/70"
        >
          <h1 className="text-5xl text-white my-5 font-bold">Sign In</h1>
          <form>
            <div>
              <label className="text-white">User Name</label>
              <br />
              <input
                type="text"
                name="username"
                className="user-name input-info w-80 input-md rounded-lg"
                placeholder="Enter User Name"
              />
            </div>
          </form>
          <br></br>
          <button className="bg-red-600 text-white p-3 rounded-lg w-80 hover:bg-white hover:text-red-600">
            Send Sign-in code
          </button>
          <h6 className="text-white text-start w-80 flex justify-center my-3">
            OR
          </h6>
          <button className="bg-stone-600 backdrop-opacity-10 backdrop-invert bg-white/30 text-white p-3 rounded-lg w-80">
            Use Password
          </button>

          <a className="underline text-white text-center my-5" href="">
            Forgot email or phone number?
          </a>
          <div className="flex gap-2 align-middle items-center">
            <input
              type="checkbox"
              className="underline text-white text-center checkbox-error checkbox"
            />
            <span className=" text-white text-center"> Remember me</span>
          </div>
          <div className=" text-white  my-1 font-light">
            <span className=" text-white  ">New to Netflix?</span>{" "}
            <a className=" underline  my-5 text-blue-600" href="">
              Sign up now.
            </a>
          </div>
          <div className=" text-white font-light w-80">
            <span className=" text-white  my-5">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </span>{" "}
            <a className="underline text-blue-600  my-5">Learn more.</a>
          </div>
        </div>
      </div>
      {/* second section */}
    </>
  );
}
