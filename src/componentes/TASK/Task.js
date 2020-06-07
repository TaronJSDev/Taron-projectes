// import React, { Component } from "react";
// import { Col, Card, Button } from "react-bootstrap";

// export default class Task extends Component {
//   state = {
//     inputTaskText: this.props.value,
//     editedValue: this.props.edited,
//     isEditedTask: false,
//   };

//   onEditClicHandeler = () => {
//     this.setState({ isEditedTask: true });
//   }; //true

//   onEditCancelClicHandeler = () => {
//     this.setState({ isEditedTask: false, inputTaskText: this.props.value });
//   }; //true

//   inputEditHandeler = (event) => {
//     this.setState({ inputTaskText: event.target.value });
//   };

//   onEditSaveClicHandeler = () => {
//     this.props.saveEditedTask(this.state.inputTaskText);
//     this.setState({ isEditedTask: false });
//   };

//   onDeleteTask = () => {
//     this.props.deleteCurrontTask();
//   };

//   showMoadal = () => {
//     this.props.onshowModal();
//   };

//   render() {
//     return (
//       <Col>
//         <Card style={{ width: "18rem" }}>
//           <Card.Body>
//             <input
//               type="checkbox"
//               onChange={this.props.checkboxChange}
//               checked={this.props.isTaskCheched}
//             ></input>

//             {this.state.isEditedTask ? (
//               <>
//                 <Card.Text>
//                   <input
//                     value={this.state.inputTaskText}
//                     onChange={this.inputEditHandeler}
//                   ></input>
//                 </Card.Text>
//                 <Button variant="primary" onClick={this.onEditSaveClicHandeler}>
//                   Save
//                 </Button>
//                 <Button
//                   variant="primary"
//                   onClick={this.onEditCancelClicHandeler}
//                 >
//                   {" "}
//                   Cancel{" "}
//                 </Button>{" "}
//               </>
//             ) : (
//               <>
//                 <Card.Text>{this.state.inputTaskText}</Card.Text>
//                 <Button variant="primary" onClick={this.onEditClicHandeler}>
//                   Edit
//                 </Button>
//                 <Button variant="primary" onClick={this.onDeleteTask}>
//                   {" "}
//                   X{" "}
//                 </Button>
//               </>
//             )}

//             <Col>
//               <Button variant="primary" onClick={this.showMoadal}>
//                 Show All
//               </Button>
//             </Col>
//           </Card.Body>
//         </Card>
//       </Col>
//     );
//   }
// }

import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";

export default class Task extends Component {
  state = {
    title: this.props.fullTask.title,
    description: this.props.fullTask.description,
    date: this.props.fullTask.date,

    isTaskEdited: false,
  };

  showAllBtnClic = () => {
    const fullEditedTask = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
    };
    this.props.onShowCurrentTask(fullEditedTask);
  };

  deleteTask = () => {
    this.props.onDeleteTask();
  }; //true
  editTask = () => {
    this.setState({ isTaskEdited: true });
  }; //true
  changeTitleHandeler = (event) => {
    this.setState({ title: event.target.value });
  }; //true
  changeTaskHandeler = (event) => {
    this.setState({ description: event.target.value });
  }; //true

  closeEditModal = () => {
    this.setState({
      title: this.props.fullTask.title,
      description: this.props.fullTask.description,
      date: this.props.fullTask.date,
      isTaskEdited: false,
    });
  }; //true

  saveTaskEdit = () => {
    const fullEditedTask = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
    };

    this.props.onSaveEdit(fullEditedTask);
    this.setState({ isTaskEdited: false });
  }; //true

  render() {
    return (
      <Col>
        <Card className="text-center">
          {this.state.isTaskEdited ? (
            <>
              <Card.Header>
                <input type="checkbox"></input>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <input
                    value={this.state.title}
                    onChange={this.changeTitleHandeler}
                  ></input>
                </Card.Title>
                <Card.Text>
                  <input
                    value={this.state.description}
                    onChange={this.changeTaskHandeler}
                  ></input>
                </Card.Text>
                <Button variant="primary" onClick={this.closeEditModal}>
                  Close
                </Button>
                <Col>
                  <Button variant="primary" onClick={this.saveTaskEdit}>
                    Save
                  </Button>
                </Col>
              </Card.Body>
              <Card.Footer className="text-muted">
                <input type="date"></input>
              </Card.Footer>
            </>
          ) : (
            <>
              <Card.Header>
                <input type="checkbox"></input>
              </Card.Header>
              <Card.Body>
                <Card.Title>{this.state.title}</Card.Title>
                <Card.Text>{this.state.description}</Card.Text>
                <Button variant="primary" onClick={this.editTask}>
                  Edit
                </Button>
                <Button variant="primary" onClick={this.deleteTask}>
                  X
                </Button>
                <Col>
                  <Button variant="primary" onClick={this.showAllBtnClic}>
                    Show All
                  </Button>
                </Col>
              </Card.Body>
              <Card.Footer className="text-muted">
                {this.state.date}
              </Card.Footer>{" "}
            </>
          )}
        </Card>
      </Col>
    );
  }
}
