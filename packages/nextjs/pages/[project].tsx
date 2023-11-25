import React, { useEffect } from "react";
import { useRouter } from "next/router";
import abi from "../../nextjs/components/utils/abi.json";
import { parseEther } from "viem";
import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { MetaHeader } from "~~/components/MetaHeader";
import EllipseIcon from "~~/components/assets/icons/EllipseIcon";
import { propertyProjects } from "~~/components/home/PropertyProjects";
import ProjectDetails from "~~/components/project/ProjectDetails";
import { Button } from "~~/components/utils/Button";
import ProjectDetailsCard from "~~/components/utils/ProjectDetailsCard";

const Project = () => {
  const router = useRouter();
  const { address } = useAccount();

  const findProject = propertyProjects?.filter(project => project.name === router.query.project);
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
    write,
    isLoading,
    isSuccess,
  } = useContractWrite({
    address: "0xd2293FF3F8042e2C56967c554939dfDb4B556344",
    abi: abi,
    functionName: "deposit",
    args: [1],

    value: parseEther("0.01"),
  });
  const { data } = useWaitForTransaction({
    hash: transaction?.hash,
  });
  console.log("data", data);
  useEffect(() => {
    if (data) {
      alert("Transaction successfull");
    }
  }, [isSuccess]);

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
            <img src={project?.image} alt={project?.name} />
          </div>

          <div className="flex flex-col gap-5">
            <div className="p-4 rounded-lg bg-base-800 min-w-[280px]">
              <div className="flex flex-row gap-1">
                <span className="font-medium text-3xl text-white">1,000</span>
                <span className="text-[12px] text-base-400">aCity</span>
              </div>
              <span className="text-base-400">Min. investment</span>
            </div>

            <div className="p-4 rounded-lg bg-base-800">
              <div className="flex flex-row gap-1">
                <span className="font-medium text-3xl text-white">1,000</span>
                <span className="text-[12px] text-base-400">aCity</span>
              </div>
              <span className="text-base-400">Min. investment</span>
            </div>

            <Button className="!p-4 !bg-secondary" disabled={!address || isLoading} onClick={() => write()}>
              {address ? "Buy token" : "Connect wallet to buy token"}
            </Button>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="font-bold text-[48px] text-primary-content">{project?.name}</h2>
          <div className="bg-blue-200 text-white rounded-full py-2 px-4 w-fit">Property Project</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5">
          <ProjectDetailsCard title="100,000" subTitle="Total fractional value" type="USDC" />
          <ProjectDetailsCard title="50,000" subTitle="Total Tokens" type="pCity" />
          <ProjectDetailsCard title="50,000" subTitle="Total Tokens" type="pCity" />
          <ProjectDetailsCard title="50,000" subTitle="Total Tokens" type="pCity" />
        </div>

        <ProjectDetails />

        <div className="mt-12"></div>
        <h2 className="text-[32px] text-primary-content my-5 flex items-center gap-4">
          <EllipseIcon /> Project Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectDetailsCard title="300,000" subTitle="Return on investment" type="aCity" />
          <ProjectDetailsCard title="3,000" subTitle="USDT Equivalent" type="USDT" />
        </div>
      </div>
    </>
  );
};

export default Project;
