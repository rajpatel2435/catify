"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchCatData } from "../lib/CatApi";

function CatsInfo() {
  // define state variables
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [catImage, setCatImage] = useState<string | null>(null);
  const [catFact, setCatFact] = useState<string | null>(null);

  // function to fetch data
  async function fetchData() {
    try {
      // start fetching the data
      setLoading(true);

      const result = await fetchCatData();

      if (result) {
        const { catImage, catFact } = result;
        // set state data
        setCatImage(catImage);
        setCatFact(catFact);
      }

    } catch (error) {

      console.error(error);
      setError(error as string);

    } finally {

      setLoading(false);

    }
  }
  // fetch data on load
  useEffect(() => {

    fetchData();

  }, []);

  return (
    <>
      <div className="flex items-center justify-center overflow-x-hidden">
        <div
          className="mt-5 block cursor-pointer rounded-full border border-white px-5 py-[15px] text-center font-nexaheavy text-[20px] sm:inline-block"
          onClick={fetchData}
          aria-label="get new kitty"
        >
          <span className="font-[tahoma]">Get New Kitty</span>

          <Image
            src="/refresh.png"
            width="30"
            height="30"
            alt="Reload"
            className="inline-block ml-2"
          />
        </div>
      </div>

      {error && (
        <p className="text-center" aria-label="error">
          {error}
        </p>
      )}

      {/* see if loading or not */}
      {loading ? (
        <div
          className="flex justify-center items-center absolute top-1/2 left-[35%] md:left-[45%] "
          aria-label="loading"
        >
          <Image
            src={"/loader.gif"}
            width="128"
            height="100"
            alt="Loading..."
          />
        </div>
      ) : catImage !== null ? (
        <>
          <div className="p-5 overflow-x-hidden ">
            <div
              className=" flex flex-col justify-center items-center p-5"
              aria-label="cat info"
            >
              <div className="  w-full order-1 md:w-1/2" aria-label="cat image">
                <div className=" relative flex h-[350px] w-full overflow-hidden rounded-[10px_10px_10px_10px]">
                  <Image
                    width="1024"
                    height="682"
                    className="post-img absolute left-0 top-0 z-[-1] h-[350px] w-full rounded-[10px] object-cover "
                    src={catImage}
                    alt="Cat Images from Catify"
                    data-src={catImage}
                  />
                </div>
              </div>

              <div
                className=" relative pt-5  w-full sm:pl-[15px] order-2 md:mb-0 md:w-1/2"
                aria-label="cat fact"
              >
                <div className=" font-nexaheavy text-2xl leading-9 md:text-4xl">
                  {catFact}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center" aria-label="no image available">
          No image available
        </p>
      )}
    </>
  );
}

export default CatsInfo;
