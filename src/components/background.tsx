"use client";
// @eslint-ignore

import { useEffect, useState } from "react";
import { Footer } from "./footer";
import Image from "next/image";

export const Background = () => {
  const innerWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const innerHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  useEffect(() => {
    let speed = 500;

    let paused = false;

    const v2 = document.getElementById("v2") as HTMLVideoElement;
    const container = document.getElementById("container") as HTMLDivElement;

    if (!v2) null;

    v2.addEventListener("loadedmetadata", () => {
      container.style.height = Math.floor(v2.duration) * speed + "px";
    });

    v2.pause();

    function animate() {
      if (paused) return;
      v2.currentTime = window.scrollY / speed;

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    return () => {
      paused = true;
    };
  }, []);

  return (
    <div id="container" className="relative items-center">
      <video
        id="v2"
        preload="auto"
        poster="https://d3v5naxe3z2qca.cloudfront.net/forest-vid-fallback.png"
        className=" w-screen inset-0  top-0 h-screen left-0 fixed z-30 object-cover"
      >
        <source
          src="https://d3v5naxe3z2qca.cloudfront.net/output_1920.mp4"
          type="video/mp4"
        />
        <source
          src="https://d3v5naxe3z2qca.cloudfront.net/forest-v3-output.mp4"
          type="video/mp4"
        />
        <source
          src="https://d3v5naxe3z2qca.cloudfront.net/forest-outfile.h264"
          type="video/h264"
        />
        <source
          src="https://d3v5naxe3z2qca.cloudfront.net/output_960.mp4"
          type="video/mp4"
        />
        <Image
          width={1200}
          height={800}
          src="https://d3v5naxe3z2qca.cloudfront.net/forest-vid-fallback.png"
          alt="Your browser does not support the <video> tag"
          title="Your browser does not support the <video> tag"
        />
      </video>
      <Footer />
    </div>
  );
};
