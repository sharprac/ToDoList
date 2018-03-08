import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./components/ToDoList";



class Layout extends React.Component {
  render() {
    return (
      <div>
        <ToDoList />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
