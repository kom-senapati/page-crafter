import { Route, Switch } from "wouter";
import LandingPage from "@/pages/LandingPage";
import Templates from "@/pages/Dashboard/Templates";
import Template from "@/pages/Dashboard/Template";
import NotFound from "@/pages/NotFound";

export default function Home() {
  return (
    <>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/dashboard/templates">{Templates}</Route>
        <Route path="/dashboard/templates/:id">
          {Template}
        </Route>
        <Route><NotFound /></Route>
      </Switch>
    </>
  );
}
