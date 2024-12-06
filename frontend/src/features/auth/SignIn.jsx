import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import React from "react";
import MyCard from "../../components/SignInCard";
import SignInCard from "../../components/SignInCard";
import login1 from "../../assets/login1.png";
const SignIn = () => {
  return (
    <div className="w-2/3 flex-col">
      <div className="m-10 text-2xl flex justify-center items-center">
        モラブ阪神工業株式会社
      </div>
      <div className="flex  ">
        {/* Left Content Section */}
        <div className="flex  justify-center items-center w-1/2 ">
          <div className="w-full max-w-md">
            <SignInCard />
          </div>
        </div>

        {/* Right Background Section */}
        <div
          className="w-1/2 bg-cover bg-center rounded-lg shadow-lg"
          style={{
            backgroundImage: `url(${login1})`,
          }}
        >
          {/* Optional Overlay */}
          {/* <div className="w-full h-full bg-black/30"></div> */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
