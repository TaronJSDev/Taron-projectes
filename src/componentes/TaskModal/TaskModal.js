// // // import React, { Component } from "react";
// // // import { Row, Col, Modal, Button } from "react-bootstrap";

// // // export default class TaskModal extends Component {
// // //   state = {
// // //     task: this.props.onShowCurrentTask,
// // //     isModalEdited: false,
// // //   };

// // //   modalClose = () => {
// // //     this.props.modalCloseHandeler();
// // //   };

// // //   modalEdit = () => {
// // //     this.setState({ isModalEdited: true });
// // //   };

// // //   modalInputChange = (event) => {
// // //     this.setState({ task: event.target.value });
// // //   };

// // //   render() {
// // //     return (
// // //       <Row>
// // //         <Col>
// // //           <Modal.Dialog>
// // //             <Modal.Header closeButton onClick={this.modalClose}>
// // //               <Modal.Title>Modal title</Modal.Title>
// // //             </Modal.Header>
// // //             {this.state.isModalEdited ? (
// // //               <Modal.Body>
// // //                 <input
// // //                   value={this.state.task}
// // //                   onChange={this.modalInputChange}
// // //                 ></input>
// // //               </Modal.Body>
// // //             ) : (
// // //               <Modal.Body>{this.state.task}</Modal.Body>
// // //             )}
// // //             <Modal.Footer>
// // //               {this.state.isModalEdited ? (
// // //                 <>
// // //                   <Button variant="secondary" onClick={this.modalClose}>
// // //                     {" "}
// // //                     Close
// // //                   </Button>
// // //                   <Button variant="primary">Save changes</Button>
// // //                 </>
// // //               ) : (
// // //                 <Button variant="primary" onClick={this.modalEdit}>
// // //                   Edit
// // //                 </Button>
// // //               )}
// // //             </Modal.Footer>
// // //           </Modal.Dialog>
// // //         </Col>
// // //       </Row>
// // //     );
// // //   }
// // // }
// import React, { Component } from "react";
// import { Col, Modal, Button } from "react-bootstrap";

// export default class TaskModal extends Component {
//   state = {
//     title: this.props.fullTask.title,
//     description: this.props.fullTask.description,
//     date: this.props.fullTask.date,
//     id: this.props.fullTask.id,
//     isTaskModalEdited: false,
//   };

//   onCloseCurrentTaskModal = () => {
//     this.props.isCurrentTaskModalOpened(false);
//   }; //true
//   editTaskModal = () => {
//     this.setState({ isTaskModalEdited: true });
//   }; //true
//   changeTaskModal = (type) => (event) => {
//     this.setState({ [type]: event.target.value });
//   };

//   onSaveBtnClic = () => {
//     let fulledittask = {
//       title: this.state.title,
//       description: this.state.description,
//       date: this.state.date,
//       id: this.state.id,
//     };
//     this.props.saveTaskModalBtnClic(fulledittask);
//     this.setState({ isTaskModalEdited: false });
//   };

//   render() {
//     return (
//       <Col>
//         <Modal.Dialog>
//           {this.state.isTaskModalEdited ? (
//             <>
//               <Modal.Header
//                 closeButton
//                 onClick={this.onCloseCurrentTaskModal}
//               ></Modal.Header>

//               <Modal.Body>
//                 <input
//                   value={this.state.title}
//                   onChange={this.changeTaskModal("title")}
//                 ></input>
//               </Modal.Body>

//               <Modal.Body>
//                 <input
//                   value={this.state.description}
//                   onChange={this.changeTaskModal("description")}
//                 ></input>
//               </Modal.Body>
//               <Modal.Body>
//                 <input
//                   value={this.state.date}
//                   onChange={this.changeTaskModal("date")}
//                 ></input>
//               </Modal.Body>
//               <Modal.Footer>
//                 <Button variant="primary" onClick={this.onSaveBtnClic}>
//                   Save
//                 </Button>
//                 <Button
//                   variant="primary"
//                   onClick={this.onCloseCurrentTaskModal}
//                 >
//                   Close
//                 </Button>
//               </Modal.Footer>
//             </>
//           ) : (
//             <>
//               <Modal.Header
//                 closeButton
//                 onClick={this.onCloseCurrentTaskModal}
//               ></Modal.Header>
//               <Modal.Body>{this.state.title}</Modal.Body>
//               <Modal.Body>{this.state.description}</Modal.Body>
//               <Modal.Body>{this.state.date}</Modal.Body>
//               <Modal.Footer>
//                 <Button variant="primary" onClick={this.editTaskModal}>
//                   Edit
//                 </Button>
//                 <Button
//                   variant="primary"
//                   onClick={this.onCloseCurrentTaskModal}
//                 >
//                   Close
//                 </Button>
//               </Modal.Footer>
//             </>
//           )}
//         </Modal.Dialog>
//       </Col>
//     );
//   }
// }
