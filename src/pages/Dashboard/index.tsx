import SignOut from "@/components/Auth/SignOut";
import ProjectCard from "@/components/Dashboard/ProjectCard";
import { Button } from "@/components/ui/button";
import { type Project } from "@/constants/projects";
import { auth } from "@/lib/firebase";
import { getProjects } from "@/services/projectService";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "wouter";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [Projects, setProjects] = useState<Project[]>([]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchProjects = async () => {
      if (user) {
        try {
          const userId = user.uid;
          const projectsData = await getProjects(userId);
          setProjects(projectsData);
          console.log(userId, projectsData)
        } catch (error) {
          console.error("Error fetching projects:", error);
        }
      } else {
        setProjects([]);
      }
    };
    fetchProjects();
  }, [user]);

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
      <Button asChild className="absolute bottom-12 right-12">
        <Link href="/dashboard/templates">Create New Project</Link>
      </Button>
    </div>
  );
}
