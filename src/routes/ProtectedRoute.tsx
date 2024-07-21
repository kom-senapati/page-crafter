import { Route, Redirect } from "wouter";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";

const ProtectedRoute = ({
  component,
  path,
}: {
  component: (() => JSX.Element) | ((params: { id: string }) => JSX.Element);
  path: string;
}) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {user ? (
        <Route path={path}>{component}</Route>
      ) : (
        <Route path={path}>
          <Redirect to="/signin" />
        </Route>
      )}
    </>
  );
};

export default ProtectedRoute;
