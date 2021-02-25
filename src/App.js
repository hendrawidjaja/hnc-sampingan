/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyles from "./styles/global";
import Home from "./pages/home/index";
import NavBar from "./components/navbar/index";
import Editor from "./components/editor/index";

//Users should be able to see the news list(title, score, source, etc) and it’s comment. Hackernews categorizes the data to story, news, comment, jobs, ask, poll, best, etc.
//You can check the api documentation at ​https://github.com/HackerNews/API

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        {/* adding some global styling */}
        <GlobalStyles />

        <Router>
          {/* called navbar */}
          <NavBar />

          {/* manage the routes */}
          <Switch>
            <Route path="/user/:editor" exact component={Editor} />
            <Route path="" exact component={Home} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
