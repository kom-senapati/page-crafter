import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ProjectCard({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="w-96 transition duration-300 ease-in-out">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="justify-end gap-4">
        <Button asChild>
          <Link to={`/dashboard/project/${id}`}>View</Link>
        </Button>
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  );
}
