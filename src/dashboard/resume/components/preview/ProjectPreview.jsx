import React from "react";

function ProjectPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Projects
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      {resumeInfo?.project.map((project, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {project?.projectTitle}
          </h2>
          <h2 className="text-xs flex justify-between">
            <span>
              {project?.startDate}-
              {project?.currentlyWorking ? "Present" : project?.endDate}
            </span>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: project?.projectSummery }} />
        </div>
      ))}
    </div>
  );
}

export default ProjectPreview;
