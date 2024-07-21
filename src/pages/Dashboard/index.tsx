import SignOut from "@/components/Auth/SignOut";
import ProjectCard from "@/components/Dashboard/ProjectCard";
import { type Project, Projects } from "@/constants/projects";

export default function Dashboard() {
  return (
    <div className="p-12 space-y-4 relative min-h-screen w-full">
      <div className="mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Projects</h1>
        <SignOut />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {Projects.map((project: Project, index) => (
          <ProjectCard
            key={index}
            id={project.id}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
