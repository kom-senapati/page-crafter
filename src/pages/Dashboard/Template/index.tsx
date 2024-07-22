import CodeRenderer from "@/components/Dashboard/CodeRenderer";
import ProjectEditForm from "@/components/Dashboard/ProjectEdit";
import ProjectRender from "@/components/Dashboard/ProjectRender";
import { Button } from "@/components/ui/button";
import { type ProjectData } from "@/constants/projects";
import { templates } from "@/constants/templates";
import { auth } from "@/lib/firebase";
import { addProject } from "@/services/projectService";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "wouter";

const initialData: ProjectData = {
  hero: {
    title: "Hero Title",
    description: "Hero Description",
  },
  about: {
    title: "About Title",
    description: "About Description",
  },
};

export default function Template(params: { id: string }) {
  const [user, loading] = useAuthState(auth);
  const userId: string = user?.uid;

  const id: number = Number(params.id);
  const initialjsxString: string = templates[id].generateJSXString(initialData);

  const [data, setData] = useState<ProjectData>(initialData);
  const [jsxString, setjsxString] = useState(initialjsxString);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setjsxString(templates[id].generateJSXString(data));
  }, [data, id]);

  return (
    <div className="bg-primary p-5 h-screen overflow-hidden flex flex-col">
      <div className="flex flex-row w-full justify-between">
        <Link
          href="/dashboard"
          className="text-xl font-bold text-primary-foreground"
        >
          Dashboard
        </Link>
        <div className="flex justify-end gap-2 max-w-fit mb-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setEditing(!editing)}
          >
            Edit
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={async () => {
              await addProject({
                userId,
                title: "Title",
                description: "desc",
                templateId: String(id),
                data,
              });
            }}
          >
            Save
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
