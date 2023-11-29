import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import abi from "../../nextjs/components/utils/abi.json";
import { parseEther } from "viem";
import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { MetaHeader } from "~~/components/MetaHeader";
import EllipseIcon from "~~/components/assets/icons/EllipseIcon";
import ProjectDetails from "~~/components/project/ProjectDetails";
import { Button } from "~~/components/utils/Button";
import ProjectDetailsCard from "~~/components/utils/ProjectDetailsCard";
import { audaciousProjects, propertyProjects } from "~~/constants";

const Project = () => {
  const router = useRouter();
  const { address } = useAccount();
  const [userToken, setUserToken] = useState(0);
  const [availableTokens, setAvailableTokens] = useState(500000);
  const [input, setInput] = useState(1);
  const allProjects = [...propertyProjects, ...audaciousProjects];
  const findProject = allProjects?.filter(project => project.name === router.query.project);
  const project = findProject[0];
  //   console.log(project);

  //   const { data: totalBalance } = useContractRead({
  //     address: "0xd2293FF3F8042e2C56967c554939dfDb4B556344",
  //     abi: abi,
  //     functionName: "getBalance",
  //     args: [],
  //   });

  const {
    data: transaction,
    writeAsync,
    isLoading,
    isSuccess,
  } = useContractWrite({
    address: "0xd2293FF3F8042e2C56967c554939dfDb4B556344",
    abi: abi,
    functionName: "deposit",
    args: [1],
    value: parseEther(`0.01`, "wei"),
  });
  const { data } = useWaitForTransaction({
    hash: transaction?.hash,
  });

  useEffect(() => {
    if (data) {
      setUserToken(prev => Number(prev) + Number(input));
      setAvailableTokens(prev => prev - Number(input));
      alert("Transaction successful");
    }
  }, [isSuccess, data]);

  return (
    <>
      <MetaHeader title={project?.name} />
      <div className="mx-8 mt-5 md:mt-10">
        <div className="flex gap-2 items-center cursor-pointer" onClick={() => router.back()}>
          <ChevronLeftIcon width={20} />
          <span className=" text-primary-content">Back</span>
        </div>

        <div className="mt-5 flex flex-col md:flex-row gap-4">
          <div className="rounded-lg">
            <img className="w-[900px] h-[550px] object-cover" src={project?.image} alt={project?.name} />
          </div>

          <div className="flex flex-col">
            {/* <div className="p-4 rounded-lg bg-base-800 min-w-[280px]">
              <div className="flex flex-row gap-1">
                <span className="font-medium text-3xl text-white">10</span>
                <span className="text-[12px] text-base-400">pCity</span>
              </div>
              <span className="text-base-400 text-[10px]">Min. investment</span>
            </div>

            <div className="p-4 rounded-lg bg-base-800">
              <div className="flex flex-row gap-1">
                <span className="font-medium text-3xl text-white">1,000</span>
                <span className="text-[12px] text-base-400">pCity</span>
              </div>
              <span className="text-base-400">Max. investment</span>
            </div> */}

            <input
              placeholder="Enter Token Amount"
              type="number"
              onChange={e => setInput(Number(e.target.value))}
              className="my-2 rounded-lg p-4 placeholder:text-white placeholder:bg-transparent bg-base-800"
            />
            <Button className="!p-4 !bg-secondary" disabled={!address || isLoading} onClick={() => writeAsync()}>
              {address ? "Buy token" : "Connect wallet to buy token"}
            </Button>
            <p className="mt-1 my-0 text-[12px] text-base-400">(Min. investment 10 pCity Tokens )</p>
            <p className="mt-1 text-[12px] text-base-400">(Max. investment 10000 pCity Tokens )</p>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="font-bold text-[48px] text-primary-content mt-10">{project?.name}</h2>
          <div className="bg-blue-200 text-white rounded-full py-2 px-4 w-fit">Property Project</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          <ProjectDetailsCard title="10,000,000" subTitle="Total fractional value" type="USDC" />
          <ProjectDetailsCard title="10,000,000" subTitle="Total Tokens" type="pCity" />
          <ProjectDetailsCard title={availableTokens} subTitle="Available Tokens" type="pCity" />
          <ProjectDetailsCard title="Nov 1 - Nov 30" subTitle="Pool duration" type="pCity" />
        </div>

        <ProjectDetails />

        <div className="mt-12"></div>
        <h2 className="text-[32px] text-primary-content my-5 flex items-center gap-4">
          <EllipseIcon /> Portfolio Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectDetailsCard title={userToken} subTitle="Balance" type="pCity" />
          <ProjectDetailsCard title={userToken} subTitle="USDC Equivalent" type="USDC" />
        </div>
      </div>
    </>
  );
};

export default Project;
