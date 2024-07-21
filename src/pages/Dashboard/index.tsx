import SignOut from "@/components/Auth/SignOut";

export default function Dashboard() {
  return (
    <div>
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Projects</h1>
          <SignOut />
        </div>
      </nav>
    </div>
  );
}
