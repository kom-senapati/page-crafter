import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "wouter";

export default function Header() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <header className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Page Crafter</div>
        <Button variant="secondary" asChild>
          {user ? (
            <Link href="/dashboard">Dashboard</Link>
          ) : (
            <Link href="/signin">Sign In</Link>
          )}
        </Button>
      </div>
    </header>
  );
}
