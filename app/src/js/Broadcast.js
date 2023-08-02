function Broadcast() {
    var handlers = [];
    var enabled = true;
  
    this.register = (callback) => {
      if (callback instanceof Function) {
        handlers.push(callback);
      } else {
        throw "Exception: incompatible parameter type. Can register only callback functions";
      }
    };
  
    this.enable = () => {
      enabled = true;
    };
  
    this.disable = () => {
      enabled = false;
    };
  
    this.dispatch = (...args) => {
      if (enabled) {
        for (let callback of handlers) {
          callback(...args);
        }
      }
    };
  }
  
  export default Broadcast;