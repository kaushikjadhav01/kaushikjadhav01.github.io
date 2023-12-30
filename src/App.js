import "./App.css";
import {Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TyperAnimation from "./TyperAnimation.js";
import AppIndex from "./AppIndex.js";

class App extends Component {
  constructor(){
    super()
    this.state = {
      isTourOpen : true,
      isShowingMore: false,
      countData:0,
      status:false,
      isLoading:true
    }
  }
  
  closeTour = () =>{
    this.setState({ isTourOpen: false });
  }
  
  toggleShowMore = () => {
    this.setState((prevState) => ({
      isShowingMore: !prevState.isShowingMore
    }));
  };

  render(){
    return (
      <div className="App">
        <>
              <BrowserRouter>
                  <Routes>
                      <Route
                          exact
                          path="/"
                          element={<TyperAnimation />}
                      />
                      <Route
                          exact
                          path="/index"
                          element={<AppIndex />}
                      />
                  </Routes>
              </BrowserRouter>
          </>
      </div>
    );
  }
}

export default App;
