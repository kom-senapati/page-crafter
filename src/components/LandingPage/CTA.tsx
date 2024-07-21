import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "wouter";

export default function CTA() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="py-20">
      <div className="container w-[70%] mx-auto p-5 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
        <p className="text-lg mb-8 text-pretty">
          Join thousands of users who are creating amazing landing pages with
          Page Crafter. Sign up now and start building your perfect landing page
          in minutes.
        </p>
        <Button size="lg" asChild>
          {user ? (
            <Link href="/dashboard">Dashboard</Link>
          ) : (
            <Link href="/signin">Sign In</Link>
          )}
        </Button>
      </div>
    </section>
  );
}
