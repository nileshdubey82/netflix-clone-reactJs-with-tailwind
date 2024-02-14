import { AiOutlineRight } from "react-icons/ai";
import React, { useState } from "react";

export default function HomePage() {
  const bgimages = [
    "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/u/p/k/small-avatar-2-movie-hd-printed-poster-empty-wall-decoration-12-original-imagq36sksbf3yrx.jpeg",
    "https://wallpapers.com/images/hd/avengers-endgame-be3i5shp129k8bd3.webp",
    "https://wallpapers.com/images/high/avengers-endgame-superheroes-2ujw4a3pp2gh8xpf.webp",
    "https://wallpapers.com/images/high/red-filter-on-star-wars-o3nkqkmr3hij9njs.webp",
    "https://wallpapers.com/images/high/tenet-cool-banner-gny44n1wmrqp8ikk.webp",
    "https://wallpapers.com/images/high/1080p-dragon-4dldkg71hyqgtdmj.webp",
    "https://wallpapers.com/images/high/1080p-dragon-axti4ekjns16t6jk.webp",
    "https://wallpapers.com/images/high/thrilling-paragliding-over-scenic-mountains-9b046sq3cdaegdxk.webp",
    "https://wallpapers.com/images/hd/hd-black-motorcycle-5zwbzrbv1maan3vq.webp",
    "https://wallpapers.com/images/hd/orange-black-racing-motorcycle-rj38c5j2q798bvn0.webp",
    "https://wallpapers.com/images/high/anime-classroom-with-sunset-lighting-msfwp627vtympppj.webp",
  ];
  const [hereBg, setHeroBg] = useState("");
  function setHeroBgSection() {
    let Number = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    let link = bgimages[Number];
    setHeroBg(link);
  }
  addEventListener("load", setHeroBgSection);

  return (
    <>
      <div
        id="here-section"
        style={{
          backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg)`,
        }}
        className="relative h-[90vh] bg-no-repeat bg-cover"
      >
        {/* Overlay */}
        <div className="px-[20px] absolute top-0 left-0 w-[100%] h-[100%] flex justify-center items-center align-middle flex-col bg-zinc-800/70">
          <h5 className="text-xl text-white my-1   lg:text-2xl ">
            Welcome back!
          </h5>
          <h1 className="text-3xl text-white my-2 font-black text-center  lg:text-5xl">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-2xl text-white my-2 bold text-center ">
            Watch anywhere. Cancel anytime.
          </p>
          <button className="bg-red-600 rounded-md p-5 text-white my-4 text-2xl text-bold hover:text-red-600 hover:bg-white">
            Finish Sign Up
          </button>
        </div>
      </div>
      {/* second section */}
      <div
        className="bg-black py-[50px] dark:bg-white text-center md:py-[20px] lg:px-20 md:grid md:grid-cols-2 border-t-[20px] border-stone-600 
        lg:py-[20px] 
        "
      >
        <div className="flex flex-col justify-center align-middle px-[20px]">
          <h1 className="text-white text-4xl lg:text-5xl font-bold dark:text-black">
            Enjoy on your TV
          </h1>
          <h5 className="text-white text-1xl my-4 lg:text-2xl dark:text-black">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h5>
        </div>
        <div id="videosecond1" className="px-[20px] relative">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            className="relative z-50"
          />
          <video
            autoPlay={true}
            playsInline={true}
            muted={true}
            loop={true}
            id="tvvideo"
            className="absolute 
            top-[20.5%]
  w-[73%]
  left-[13%]
  
            "
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      {/* third section */}
      <div className="bg-black px-10 md:grid  md:py-[20px] md:grid-cols-2 border-t-[20px] border-stone-600 gap-2 grid-flow-row-dense dark:bg-white">
        <div id="Download-your-first">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
        </div>
        <div className="flex flex-col justify-center align-middle  ps-0">
          <h1 className="text-white text-2xl font-bold text-center lg:text-5xl dark:text-black">
            Download your shows to watch offline
          </h1>
          <h5 className="text-white text-2xl my-4 text-center lg:text-2xl  dark:text-black">
            Save your favourites easily and always have something to watch.
          </h5>
        </div>
      </div>
      {/* FAQ SECTION */}
      <div
        className="bg-black border-t-8 border-stone-600  lg:px-[250px] lg:py-[50px] md:px-[50px] md:py-[50px]
      px-[50px] py-[20px]  dark:bg-white
      
      "
      >
        <h1 className="text-white text-3xl font-bold text-center lg:text-4xl lg:my-10  dark:text-black">
          Frequently Asked Questions
        </h1>
        <div className="collapse collapse-plus bg-stone-600 my-3 text-white lg:px-[50px] md:px-[20px] rounded-none">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-1xl lg:text-3xl">
            What is Netflix?
          </div>
          <div className="collapse-content  text-sm lg:text-lg">
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices.
            </p>
            <p>
              You can watch as much as you want, whenever you want, without a
              single ad – all for one low monthly price. There's always
              something new to discover, and new TV shows and movies are added
              every week!
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-stone-600 my-3 text-white lg:px-[50px] rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-1xl lg:text-3xl">
            How much does Netflix cost?
          </div>
          <div className="collapse-content  text-sm lg:text-lg">
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹649 to ₹149 a month. No extra costs, no contracts.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-stone-600 my-3 text-white lg:px-[50px] rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-1xl lg:text-3xl">
            Where can I watch?
          </div>
          <div className="collapse-content  text-sm lg:text-lg">
            <p>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
            </p>
            <p>
              You can also download your favourite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-red-600 rounded-md p-5 text-white my-4 text-1xl text-bold lg:text-4xl hover:text-red-600 hover:bg-white ">
            Finish Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
