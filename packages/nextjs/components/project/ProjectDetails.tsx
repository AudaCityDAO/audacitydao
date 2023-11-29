import React from "react";

export const DetailsCard = ({ title = "", type = "", text = "" }) => {
  return (
    <div className="border border-base-400 p-4">
      <div className="flex gap-1 ">
        <span className="font-medium text-[32px] text-primary-content">{title}</span>
        <span>{type}</span>
      </div>
      <span className="text-xl text-base-400">{text}</span>
    </div>
  );
};

const ProjectDetails = () => {
  return (
    <div className="mt-10">
      <h5 className="text-base-400 my-5 text-2xl">Project Details</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <DetailsCard title="30" type="Properties" text="Number of Properties" />
        <DetailsCard title="60" type="rooms" text="Number of Rooms" />
        <DetailsCard title="50,000" type="sq ft" text="Area" />
        <DetailsCard title="12" type="months" text="Project Duration" />
        <DetailsCard title="Penthouse" type="" text="structure" />
        <DetailsCard title="60" type="cars parking" text="Parking" />
        <DetailsCard title="90" type="baths" text="Bath/toilet" />
        <DetailsCard title="Central" type="a/c" text="HVAC" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <DetailsCard title="Lagos" type="ng" text="location" />
        <DetailsCard title="Paramount Realtors" type="ng" text="Developers" />
      </div>
    </div>
  );
};

export default ProjectDetails;
