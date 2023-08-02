import Broadcast from "./Broadcast";
import { RequestHistory } from "./RequestHistory";

function Mediator() {
  var reqType = "GET";
  var url = null;
  var ajax = new XMLHttpRequest();

  var responseText = null;
  var statustext = null;
  var responseSize = null;
  
  var start = 0

  const history = new RequestHistory();
 
  this.events = {
    onResponseLoad : new Broadcast()
  }

  this.setRequestType = (type) => {
    this.reqType = type
  }

  this.setUrl = (urltext) => {
    url = urltext;
    console.log(urltext)
  }

  this.getUrl = () => url;
  this.getRequestType = () => reqType
  this.getResponseText = () => responseText
  this.getStatusText = () => statustext
  this.getResponseSize = () => responseSize

  //sends ajax request
  this.sendRequest = () => {
    ajax.open(reqType , url);
    start = window.performance.now();
    ajax.send();
    
  }

  ajax.onload = function () {
    console.log(this);
    responseText = JSON.stringify(JSON.parse(this.responseText),undefined,4);
    statustext = `Status: ${this.status}`;
    responseSize = `Size: ${this.responseText.length}`;

    this.events.onResponseLoad.dispatch();
  };

  //let timeDifference = 0;
  // ajax.onloadend = function () {
  //   R.timeDifference = Math.abs(window.performance.now() - start);
  //   R.timetext.textContent = `Time: ${millisToMilliSeconds(timeDifference)}`;
  
  // };
  
  function millisToMilliSeconds(millis) {
    var seconds = millis.toFixed("0000");
    return seconds;
  }
}

export default Mediator;

