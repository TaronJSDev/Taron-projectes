// import React, { Component } from "react";
// import { idgen } from "../Idgenerator";
// import { Container, Row, Button, Col } from "react-bootstrap";
// import Input from "../INPUT/Input";
// import Task from "../TASK/Task";
// import Modal from "../TaskModal/TaskModal";

// export default class ToDo extends Component {
//   state = {
//     task: [],
//     // checkedIdes: new Set(),
//     // showModal: false,
//     // currntTask: null,
//   };

//   // addTaskToTheList = (task) => {
//   //   const newtask = [...this.state.task];
//   //   newtask.push({
//   //     id: idgen(),
//   //     task: task,
//   //   });
//   //   this.setState({ task: newtask });
//   // }; //true

//   // checkboxChangeHandeler = (id) => () => {
//   //   const checkedIdes = new Set(this.state.checkedIdes);
//   //   if (checkedIdes.has(id)) {
//   //     checkedIdes.delete(id);
//   //   } else {
//   //     checkedIdes.add(id);
//   //   }
//   //   this.setState({ checkedIdes });
//   // }; //true

//   // removeBtnClicHandeler = () => {
//   //   let { checkedIdes, task } = this.state;

//   //   checkedIdes.forEach((id) => {
//   //     task = task.filter((task) => task.id !== id);
//   //   });

//   //   this.setState({ task });
//   // }; //true

//   // selectAllBtnClicHandeler = () => {
//   //   const checkedIdes = this.state.task.map((task) => task.id);
//   //   this.setState({ checkedIdes: new Set(checkedIdes) });
//   // }; //true

//   // deSelectAllBtnClicHandeler = () => {
//   //   this.setState({ checkedIdes: new Set() });
//   // }; //true

//   // saveTaskEdit = (id) => (text) => {
//   //   const tasks = JSON.parse(JSON.stringify(this.state.task));

//   //   for (let task of tasks) {
//   //     if (task.id === id) {
//   //       task.text = text;
//   //       break;
//   //     }
//   //   }
//   //   this.setState({ task: tasks, isEditing: false });
//   // }; //true

//   // deleteCurrontTaskHandeler = (id) => () => {
//   //   let newTask = [...this.state.task];
//   //   newTask = newTask.filter((task) => task.id !== id);
//   //   this.setState({ task: newTask });
//   // }; //true

//   // showModalHandeler = (task) => () => {
//   //   this.setState({ showModal: true, currntTask: task });
//   // };

//   // modalCloseBtnClicHandeler = () => {
//   //   this.setState({ showModal: false, currntTask: null });
//   // };

//   render() {
//     // const taskList = this.state.task.map((task) => (
//     //   <Task
//     //     key={task.id} //true
//     //     value={task.task} //true
//     //     checkboxChange={this.checkboxChangeHandeler(task.id)} //true
//     //     isTaskCheched={this.state.checkedIdes.has(task.id)} //true
//     //     saveEditedTask={this.saveTaskEdit(task.id)} //true
//     //     deleteCurrontTask={this.deleteCurrontTaskHandeler(task.id)}
//     //     onshowModal={this.showModalHandeler(task.task)}
//     //   />
//     // ));

//     return (
//       // <Container>
//       //   {this.state.showModal ? (
//       //     <Modal
//       //       onShowCurrentTask={this.state.currntTask}
//       //       modalCloseHandeler={this.modalCloseBtnClicHandeler}
//       //     />
//       //   ) : (
//       //     <>
//       //       {" "}
//       //       <Row>
//       //         <Input addTask={this.addTaskToTheList} />
//       //       </Row>
//       //       <Row>{taskList} </Row>
//       //       <Row>
//       //         <Col>
//       //           {!!this.state.task.length ? (
//       //             <Button
//       //               onClick={this.removeBtnClicHandeler} //true
//       //               disabled={!this.state.checkedIdes.size ? true : false} //true
//       //             >
//       //               Remove Selected
//       //             </Button>
//       //           ) : null}
//       //           {this.state.task.length !== this.state.checkedIdes.size && (
//       //             <Button onClick={this.selectAllBtnClicHandeler}>
//       //               Select All
//       //             </Button>
//       //           )}

//       //           {!!this.state.checkedIdes.size && (
//       //             <Button onClick={this.deSelectAllBtnClicHandeler}>
//       //               Deselect All
//       //             </Button>
//       //           )}
//       //         </Col>
//       //       </Row>
//       //     </>
//       //   )}
//       // </Container>
//     );
//   }
// }

import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Inputmodal from "../INPUTMODAL/Inputmodal";
import Task from "../TASK/Task";
import TaskModal from "../TaskModal/TaskModal";

export default class ToDo extends Component {
  state = {
    task: [],
    isCurrentTaskModalOpened: false,
    currntTask: {},
  };

  componentDidMount() {
    fetch("http://localhost:3001/tasks", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const task = [...this.state.task, data];
        this.setState({ task });
      });
  } //true

  saveNewTask = (fullTask) => {
    fetch("http://localhost:3001/tasks", {
      method: "POST",
      body: JSON.stringify(fullTask),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const task = [...this.state.task, data];
        this.setState({ task });
      });
  }; //true

  deleteTaskHandeler = (id) => () => {
    let task = [...this.state.task];
    console.log(id);
    console.log(task);
    task = task.filter((i) => i.id !== id);

    this.setState({ task });
  }; //true

  saveEdit = (id) => (fullTask) => {
    let task = [...this.state.task];
    task = task.map((elem) => {
      if (elem.id === id) {
        elem.title = fullTask.title;
        elem.description = fullTask.description;
        elem.date = fullTask.date;
      }
      this.setState({ task });
    });
  }; //true

  showCurrentTask = (task) => () => {
    this.setState({
      isCurrentTaskModalOpened: true,
      currntTask: task,
    });
  }; //true

  currentModalShow = (modalPosition) => {
    this.setState({ isCurrentTaskModalOpened: modalPosition });
  }; //true

  saveTaskModalEdit = (fulledittask) => {
    let task = [...this.state.task];
    task = task.map((elem) => {
      if (elem.id === fulledittask.id) {
        elem.title = fulledittask.title;
        elem.description = fulledittask.description;
        elem.date = fulledittask.date;
      }
      this.setState({ task });
    });
  }; //true

  render() {
    const task = this.state.task.map((task) => (
      <Task
        key={task.id}
        fullTask={task}
        onDeleteTask={this.deleteTaskHandeler(task.id)}
        onSaveEdit={this.saveEdit(task.id)}
        onShowCurrentTask={this.showCurrentTask(task)}
      />
    ));
    return (
      <Container>
        {this.state.isCurrentTaskModalOpened ? (
          <>
            <Row>
              <TaskModal
                isCurrentTaskModalOpened={this.currentModalShow}
                fullTask={this.state.currntTask}
                saveTaskModalBtnClic={this.saveTaskModalEdit}
              />
            </Row>
          </>
        ) : (
          <>
            <Inputmodal onSaveNewTask={this.saveNewTask} />
            <Row>{task}</Row>
          </>
        )}
      </Container>
    );
  }
}
