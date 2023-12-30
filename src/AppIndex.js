import "./App.css";
import {Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./components/homePage/Feedback"
import HomePage from "./components/homePage/HomePage";
import ScrollArrow from "./Scroll.jsx"
import { BallTriangle } from 'react-loader-spinner'

class AppIndex extends Component {
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

  componentDidMount(){
  const proxyUrl = 'https://api.codetabs.com/v1/proxy?quest=';
  fetch(proxyUrl + 'https://komarev.com/ghpvc/?username=kaushikjadhav01')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'image/svg+xml');
      const textContent = doc.querySelectorAll('text')[2].textContent.trim();
      let localStorageCount = localStorage.getItem("kaushikjadhav01_pagecount");
      if (!localStorageCount || Number(textContent) > Number(localStorageCount)) {
        let count = Number(textContent) + Math.floor(Math.random() * (299 - 101 + 1) + 101);
        localStorage.setItem("kaushikjadhav01_pagecount", count);
        this.setState({countData:count,status:true});
        this.setState({isLoading:false});
      }
      else {
        localStorageCount = Number(localStorageCount) + 1;
        localStorage.setItem("kaushikjadhav01_pagecount", localStorageCount);
        this.setState({countData:localStorageCount,status:true});
        this.setState({isLoading:false});
      }      
    })
    .catch(error => {
      console.error('Error making GET request:', error);
      this.setState({ isLoading: false });
    });
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
  if(this.state.isLoading){
    console.log(" countData",this.state.countData)       
    return (
    <div className="spinner">
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#54C9F2"
      ariaLabel="ball-triangle-loading"
      wrIndexerStyle={{alighItems:"center",justifyContent:"center",marginTop:"20%"}}
      wrapperClass=""
      visible={true}
      />;
      </div>
    )
  }  
  
  else {
    return (
      <div className="App">
        <HomePage countData = {this.state.countData} />
        <Feed 
        data-tut="reactour__copy"
        dddd = {this.state.isTourOpen}
        openTour={this.openTour}
        toggleShowMore={this.toggleShowMore}
        isShowingMore={this.state.isShowingMore}
        />
        <ScrollArrow/>
      </div>
    );
  }}
}

export default AppIndex;
