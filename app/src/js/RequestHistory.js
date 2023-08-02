export function RequestHistory() {
    const reqhistory = [];

    this.addRequest = (requestobj) => {
        reqhistory.push(requestobj)
    }

    this.getRequestObject = (index) => {
        reqhistory.indexOf(index);
    }
}