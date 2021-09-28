import './styles/App.css';
import Index from 'pages';
import RhodesianInfoPage from 'pages/rhodesian';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Layout from 'layouts/Layout';


function App() {
  return (
    <div className="App">
        <Router>
          <Layout>
            <Switch>
                <Route path="/rhodesian">
                    <RhodesianInfoPage/>
                </Route>
                <Route path="/">
                    <Index/>
                </Route>
            </Switch>
          </Layout>
        </Router>
    </div>
  );
}

export default App;
