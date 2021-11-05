import "./App.css";
// import { Header } from "./component/layout/partials/Header.comp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DefaultLayout } from "./component/layout/DefaultLayout";
import { HomePage } from "./pages/homepage/HomePage.page";
import { SchoolList } from "./pages/school-list/SchoolList.page";
import { AddSchool } from "./pages/new-school/AddSchool.page";
import { EditSchool } from "./pages/edit-school/EditSchool.page";
import { School } from "./pages/school/School.page";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <DefaultLayout>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/schools">
              <SchoolList />
            </Route>
            <Route exact path="/add-schools">
              <AddSchool />
            </Route>
            <Route exact path="/edit-school/:sId">
              <EditSchool />
            </Route>
            <Route exact path="/school/:sId">
              <School />
            </Route>
          </DefaultLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
