import CodeRenderer from "@/components/Dashboard/CodeRenderer";
import ProjectEditForm from "@/components/Dashboard/ProjectEdit";
import ProjectRender from "@/components/Dashboard/ProjectRender";
import { Button } from "@/components/ui/button";
import { templates } from "@/constants/templates";
import { useEffect, useState } from "react";

const initialData: any = {
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
  const id: number = Number(params.id);
  const initialjsxString: string = templates[id].generateJSXString(initialData);

  const [data, setData] = useState(initialData);
  const [jsxString, setjsxString] = useState(initialjsxString);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setjsxString(templates[id].generateJSXString(data));
  }, [data, id]);

  return (
    <div className="bg-primary p-5 h-screen overflow-hidden flex flex-col items-end">
      <div className="bg-background text-primary flex justify-end gap-4 max-w-fit p-2 rounded-md mb-2">
        <Button size="sm" onClick={() => setEditing(!editing)}>
          Edit
        </Button>
        <p>Save</p>
        <CodeRenderer jsxString={jsxString} />
        {editing && (
          <ProjectEditForm
            data={initialData}
            set={setData}
            setEditing={setEditing}
          />
        )}
      </div>
      <ProjectRender jsxString={jsxString} />
    </div>
  );
}
