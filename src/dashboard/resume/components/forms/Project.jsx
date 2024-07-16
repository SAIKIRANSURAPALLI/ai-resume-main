import React, { useContext, useEffect, useState } from "react";

import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { LoaderCircle } from "lucide-react";
import GlobalApi from "./../../../../../service/GlobalApi";
import { useParams } from "react-router-dom";

import { Input } from "@/components/ui/input";
import RichTextEditor from "../RichTextEditor";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
const formField = {
  title: "",
  startDate: "",
  endDate: "",
  projectSummery: "",
};
function Project() {
  const [projectList, setProjectList] = useState([formField]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    resumeInfo?.project.length > 0 && setProjectList(resumeInfo?.project);
  }, []);
  const handleChange = (event, index) => {
    const newEntries = projectList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setProjectList(newEntries);
  };
  const handleRichTextEditor = (e, name, index) => {
    const newEntries = projectList.slice();
    newEntries[index][name] = e.target.value;
    setProjectList(newEntries);
  };
  const AddNewProject = () => {
    setProjectList([...projectList, formField]);
  };
  const RemoveProject = () => {
    setProjectList((projectList) => projectList.slice(0, -1));
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      project: projectList,
    });
  }, [projectList]);
  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        project: projectList.map(({ id, ...rest }) => rest),
      },
    };

    GlobalApi.UpdateResumeDetail(params.resumeId, data).then(
      (resp) => {
        console.log(resp);
        setLoading(false);
        toast("Project Details updated !");
      },
      (error) => {
        setLoading(false);
        toast("Server Error, Please try again!");
      }
    );
  };
  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Projects</h2>
        <p>Add Your Projects</p>
        <div>
          {projectList.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div>
                  <label className="text-xs">Project Title</label>
                  <Input
                    name="projectTitle"
                    onChange={(event) => handleChange(event, index)}
                    defaultValue={item?.projectTitle}
                  />
                </div>
                <div>
                  <label className="text-xs">Start Date</label>
                  <Input
                    type="date"
                    name="startDate"
                    onChange={(event) => handleChange(event, index)}
                    defaultValue={item?.startDate}
                  />
                </div>
                <div>
                  <label className="text-xs">End Date</label>
                  <Input
                    type="date"
                    name="endDate"
                    onChange={(event) => handleChange(event, index)}
                    defaultValue={item?.endDate}
                  />
                </div>
                <div className="col-span-2">
                  <RichTextEditor
                    index={index}
                    defaultValue={item?.workSummery}
                    onRichTextEditorChange={(event) =>
                      handleRichTextEditor(event, "projectSummery", index)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="text-primary"
              onClick={AddNewProject}
            >
              Add
            </Button>
            <Button
              variant="outline"
              className="text-primary"
              onClick={RemoveProject}
            >
              Delete
            </Button>
          </div>
          <Button type="submit" disabled={loading} onClick={() => onSave()}>
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Project;
