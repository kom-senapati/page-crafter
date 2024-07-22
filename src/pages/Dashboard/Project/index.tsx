import CodeRenderer from "@/components/Dashboard/CodeRenderer";
import ProjectEditForm from "@/components/Dashboard/ProjectEdit";
import ProjectRender from "@/components/Dashboard/ProjectRender";
import { Button } from "@/components/ui/button";
import { Project } from "@/constants/projects";
import { templates } from "@/constants/templates";
import { getProjectById } from "@/services/projectService";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { initialData } from "@/constants/templates";

export default function Template(params: { id: string }) {
  const [project, setProject] = useState<Project>({
    title: "Project",
    description: "Description",
    data: initialData,
    templateId: "0",
    id: "0",
  });

  const templateId: number = Number(project.templateId);
  const initialjsxString: string = templates[templateId].generateJSXString(
    project.data
  );

  const [data, setData] = useState(project.data);
  const [jsxString, setjsxString] = useState(initialjsxString);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await getProjectById(params.id);
        console.log(projectData);
        setProject(projectData);
        setData(projectData.data);
        setjsxString(templates[templateId].generateJSXString(project.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchProject();
  }, []);

  useEffect(() => {
    setjsxString(templates[templateId].generateJSXString(data));
  }, [data, templateId]);

  return (
    <div className="bg-primary p-5 h-screen overflow-hidden flex flex-col">
      <div className="flex flex-row w-full justify-between">
        <Link
          href="/dashboard"
          className="text-2xl font-bold text-primary-foreground"
        >
          Dashboard
        </Link>
        <h1 className="text-xl font-mono text-primary-foreground">
          {project.title}
        </h1>
        <div className="flex justify-end gap-2 max-w-fit mb-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setEditing(!editing)}
          >
            Edit
          </Button>
          <Button variant="secondary" size="sm">
            Save
          </Button>
          <Button variant="secondary" size="sm">
            Delete
          </Button>
          <CodeRenderer jsxString={jsxString} />
          {editing && (
            <ProjectEditForm
              data={initialData}
              set={setData}
              setEditing={setEditing}
            />
          )}
        </div>
      </div>
      <ProjectRender jsxString={jsxString} />
    </div>
  );
}
