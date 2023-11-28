import React from "react";

const ProjectDetailsCard = ({
  title = 0,
  subTitle = "",
  type = "",
}: {
  title: string | number;
  subTitle: string;
  type: string;
}) => {
  return (
    <div className="p-4 rounded-lg bg-base-800">
      <div className="flex flex-row gap-1">
        <span className="font-medium text-3xl text-white">{title}</span>
        <span className="text-[12px] text-base-400">{type}</span>
      </div>
      <span className="text-base-400">{subTitle}</span>
    </div>
  );
};

export default ProjectDetailsCard;
