import { CssBaseline } from "@material-ui/core";
import { useState } from "react";
import Uutiset from "./components/Uutiset";
import Valikko from "./components/Valikko";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Info from "./components/Info";

function App() {

  return (
    <Router>
      <CssBaseline />
      <Valikko />
      <Route path="/" exact>
        <Redirect to="/uutiset/yleiset"/>
      </Route>
      <Route path="/uutiset/:kategoria" component={Uutiset}/>

      <Route path="/info" component={Info} />
    </Router>
  );
}

export default App;
