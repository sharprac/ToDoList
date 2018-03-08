import React from "react";

export default class ToDoListItem extends React.Component {
  render() {
    return (
      this.props.data.map((value,index)=>(
         <div>
            <input type="checkbox"/>
            <span>{value}</span>
        </div>
      ))
    );
  }
}
