import React,{Component} from "react"
import Feedback from "feeder-react-feedback"; // import Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css"; // import stylesheet
import "./Feeder.css"

class Feed extends Component {
  render() {
    const {dddd } = this.props
    Feedback.defaultProps = {
      email: true,
      emailRequired: true,
      emailDefaultValue: "",
      projectName: "",
      subProject: "",
      primaryColor: dddd ? 'Yellow' :'white',
      textColor: "black",
      hoverBorderColor: "#000000",
      postSubmitButtonMsg: "Thanks!",
      submitButtonMsg: "Send Feedback",
      feedbackTypes: ["general", "bug", "idea"],
      zIndex: "100000000"
    };
    return <span><Feedback projectId="658a9b9f0670450002cfa752" classname = 'frf-feedback-container'/></span>;
  }
}

export default Feed