// import React, { Component } from "react";
// import Data from "./Data";

// export default class Input extends Component {
//   constructor(propes) {
//     super(propes);

//     this.state = {
//       inp: "",
//       currnt: "",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           onChange={(event) => {
//             this.setState({ inp: event.target.value });
//           }}
//         />

//         <button
//           onClick={() => {
//             this.setState({ currnt: this.state.inp });
//           }}
//         >
//           Add
//         </button>

//         <Data input={this.state.currnt} />
//       </div>
//     );
//   }
// }
