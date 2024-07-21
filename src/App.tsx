import { Route, Switch } from "wouter";
import ProtectedRoute from "@/routes/ProtectedRoute";
import SignInPage from "@/pages/Auth/SignInPage";
import LandingPage from "@/pages/LandingPage";
import Dashboard from "@/pages/Dashboard";
import Templates from "@/pages/Dashboard/Templates";
import Template from "@/pages/Dashboard/Template";
import Project from "@/pages/Dashboard/Project";
import NotFound from "@/pages/NotFound";

export default function Home() {
  return (
    <>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/signin" component={SignInPage} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/dashboard/projects/:id" component={Project} />
        <ProtectedRoute path="/dashboard/templates" component={Templates} />
        <ProtectedRoute path="/dashboard/templates/:id" component={Template} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
