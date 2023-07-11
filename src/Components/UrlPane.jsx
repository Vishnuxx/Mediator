import { Button, Container, Input, InputPicker, SelectPicker, Stack } from "rsuite";

const data = [
  "GET",
  "POST",
  "UPDATE",
  "SELECT",
  "DELETE"
].map((item) => ({ label: item, value: item }));


function UrlPane() {
    return (
      <Container style={{width:"100%" , flexDirection:"row"}}>
        <InputPicker size="sm" data={data} style={{ width: 100 }} />
        <Input placeholder="https://google.com/" size="sm" style={{width:"100%"}}></Input>
        <Button color="blue" appearance="primary" size='sm'>
          Send
        </Button>
      </Container>
      // <div className="Url-pane">
      //     <select name="req-type" id="req-type">
      //         <option value="GET">GET</option>
      //         <option value="POST">POST</option>
      //         <option value="UPDATE">UPDATE</option>
      //         <option value="DELETE">DELETE</option>
      //     </select>
      //     <input type="url" className="url-input" placeholder="Enter a url eg: https://google.com" />
      //     <button className="btn-send">
      //         Send
      //     </button>
      // </div>
    );
}

export default UrlPane;