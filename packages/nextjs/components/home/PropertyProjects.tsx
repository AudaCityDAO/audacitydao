import React from "react";
import Link from "next/link";
import DoubleArrowIcon from "../assets/icons/DoubleArrowIcon";
import HexagonIcon from "../assets/icons/HexagonIcon";
import TokenIcon from "../assets/icons/TokenIcon";
import { Button } from "../utils/Button";

export const propertyProjects = [
  {
    name: "Hotel Pennsylvania",
    image: "/images/pennsylvania.png",
    totalTokens: "100,000",
    availableTokens: "30,000",
    opeaSea: "https://github.com/",
  },
  {
    name: "DAO Estate",
    image: "/images/estate.png",
    totalTokens: "50,000",
    availableTokens: "5,000",
    opeaSea: "https://github.com/",
  },
  {
    name: "Clean Energy",
    image: "/images/cleanEnergy.png",
    totalTokens: "100,000",
    availableTokens: "30,000",
    opeaSea: "https://github.com/",
  },
  {
    name: "Clean Energy",
    image: "/images/cleanEnergy.png",
    totalTokens: "100,000",
    availableTokens: "30,000",
    opeaSea: "https://github.com/",
  },
];

const PropertyProjects = ({ name: ProjectName }: { name: string }) => {
  return (
    <div className="mx-8 mt-10 md:mt-20 pb-16 border-b border-[#6D6D6D]">
      <h2 className="text-2xl font-medium">{ProjectName}</h2>
      <div className="flex gap-4 mt-10">
        <Button>Open pools</Button>
        <Button disabled variant="outline">
          Closed pools
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        {propertyProjects.map(({ name, availableTokens, totalTokens, image }, index) => (
          <div key={index} className="flex flex-col rounded-lg border bg-base-500 border-base-800">
            <div className="relative">
              <img src={image} className="rounded-b-lg w-full h-full" alt="Pennsylvania" />
              <Button className="absolute bottom-2 left-2 !rounded-full px-4 !py-1 text-[12px]" variant="rounded">
                View on OpenSea
              </Button>
            </div>
            <div className="flex flex-col gap-4 px-3 pt-3 pb-5">
              <h5 className="font-semibold text-xl text-white text-ellipsis overflow-hidden whitespace-nowrap">
                {name}
              </h5>
              <div className="flex gap-2 justify-between">
                <div className="flex items-start gap-2">
                  <TokenIcon />
                  <div className="flex flex-col">
                    <div className="flex gap-1">
                      <span className="font-medium text-white">{totalTokens}</span>
                      <span className="text-[12px] text-base-400 ">
                        {ProjectName === "Property Projects" ? "pCity" : "aCity"}
                      </span>
                    </div>
                    <span className="text-base-400 font-light text-[8px]">Total tokens</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <HexagonIcon />
                  <div className="flex flex-col">
                    <div className="flex gap-1">
                      <span className="font-medium text-white">{availableTokens}</span>
                      <span className="text-[12px] text-base-400 ">
                        {ProjectName === "Property Projects" ? "pCity" : "aCity"}
                      </span>
                    </div>
                    <span className="text-base-400 font-light text-[8px]">Available tokens</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Link
                  href={`/${name}`}
                  className="bg-base-800 font-medium flex items-center text-[14px] gap-1 rounded-lg py-2 px-3 h-fit"
                >
                  Go to pool
                  <DoubleArrowIcon />
                </Link>
                <div>
                  <div className="bg-[#85CAFF] text-[12px] border-2 border-[#85CAFF] text-[#103E9F] font-medium rounded-full px-2 py-[2px]">
                    Nov 1 - Nov 30
                  </div>
                  <div className="text-[8px] text-right mt-1 text-base-400">Pool duration</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyProjects;
