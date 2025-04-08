import React from "react";
import Banner from "./Banner";

function Banners() {
  const banners = [
    {
      id: 1,
      title: "Congratulations!",
      icon: "✅",
      variant: "success",
      text: "You have successfully created your account",
    },
    {
      id: 2,
      title: "Attention!",
      icon: "⚠️",
      variant: "warning",
      text: "Please verify your email address",
    },
    {
      id: 3,
      title: "There is a problem with your application.",
      icon: "❌",
      variant: "error",
      text: "You are unable to solve it here. Please contact support",
    },
    {
      id: 4,
      title: "Update available...",
      icon: "ℹ️",
      variant: "neutral",
      text: "A new version is available. Please update and restart your app.",
    },
    {
      id: 5,
      title: "Congratulations!",
      icon: "✅",
      variant: "success",
      text: "",
    },
    {
      id: 6,
      title: "Attention!",
      icon: "⚠️",
      variant: "warning",
    },
    {
      id: 7,
      title: "There is a problem with your application.",
      icon: "❌",
      variant: "error",
      text: "",
    },
    {
      id: 8,
      title: "Update available...",
      icon: "ℹ️",
      variant: "neutral",
    },
  ];

  return (
    <>
      <h2>Banners collection</h2>
      <div className="banners">
        {banners.map((banner) => {
          return (
            <Banner
              key={banner.id}
              icon={banner.icon}
              variant={banner.variant}
              text={banner.text}
            >
              {banner.title}
            </Banner>
          );
        })}
      </div>
    </>
  );
}

export default Banners;
