import React, { useState } from 'react';
import TableComponent from './common/table.component';

function StudentList (props) {
    const [students, setStudent] = useState(
        [
            {
                name: "Shakil", 
                roll: 212 ,
                imgPath: "https://yt3.googleusercontent.com/iAZGIkSMLwRgT8Bh8CCdtATwlMJFTzK_6gQrrrtK9bO1ICQqMVhZc2ye3hi-dgr3ZSjI5RmDv7c=s176-c-k-c0x00ffffff-no-rj",
                father_name:  "xyz"
            },

            { 
                name: "Nabil",
                roll: 25 ,
                imgPath:"https://yt3.googleusercontent.com/iAZGIkSMLwRgT8Bh8CCdtATwlMJFTzK_6gQrrrtK9bO1ICQqMVhZc2ye3hi-dgr3ZSjI5RmDv7c=s176-c-k-c0x00ffffff-no-rj",
                father_name:  "xyz"
            },
            { 
                name: "Novo",
                roll: 25 ,
                imgPath:"https://yt3.googleusercontent.com/iAZGIkSMLwRgT8Bh8CCdtATwlMJFTzK_6gQrrrtK9bO1ICQqMVhZc2ye3hi-dgr3ZSjI5RmDv7c=s176-c-k-c0x00ffffff-no-rj",
                father_name:  "xyz"      
            }
        ]
  );

const  columns = [
    { label: "Name", path: "name",content: (item, path)=> <td>{item[path]}</td> },
    { label: "Roll", path: "roll", content: (item, path)=> <td>{item[path]}</td> },
    { label: "Photo", path: "imgPath", content: (item, path)=> <td> <img src={item[path]} alt='name'/></td> },
    { label: "Father's Name", path: "father_name", content: (item, path)=> <td> <button>{item[path]}</button> </td> }
  ]

    return (
      <TableComponent 
        items={students}
        columns={columns}
      />
    );
}
 
export default StudentList;


//--> using class component
// class StudentList extends Component {
//   state = { 
//     data: [
//       { name: "Shakil", 
//         roll: 212 ,
//         imgPath: "https://yt3.googleusercontent.com/iAZGIkSMLwRgT8Bh8CCdtATwlMJFTzK_6gQrrrtK9bO1ICQqMVhZc2ye3hi-dgr3ZSjI5RmDv7c=s176-c-k-c0x00ffffff-no-rj",
//         father_name:  "xyz"
//       },

//       { name: "Nabil",
//         roll: 25 ,
//         imgPath:"https://yt3.googleusercontent.com/iAZGIkSMLwRgT8Bh8CCdtATwlMJFTzK_6gQrrrtK9bO1ICQqMVhZc2ye3hi-dgr3ZSjI5RmDv7c=s176-c-k-c0x00ffffff-no-rj",
//         father_name:  "xyz"
//       },
//       { name: "Novo",
//         roll: 25 ,
//         imgPath:"https://yt3.googleusercontent.com/iAZGIkSMLwRgT8Bh8CCdtATwlMJFTzK_6gQrrrtK9bO1ICQqMVhZc2ye3hi-dgr3ZSjI5RmDv7c=s176-c-k-c0x00ffffff-no-rj",
//         father_name:  "xyz"      },
//       { name: "Pratik",
//         roll: 25 ,
//         imgPath:"https://yt3.googleusercontent.com/iAZGIkSMLwRgT8Bh8CCdtATwlMJFTzK_6gQrrrtK9bO1ICQqMVhZc2ye3hi-dgr3ZSjI5RmDv7c=s176-c-k-c0x00ffffff-no-rj",
//         father_name:  "xyz"      }
//     ],
//   }; 
//   columns= [
//     { label: "Name", path: "name",content: (item, path)=> <td>{item[path]}</td> },
//     { label: "Roll", path: "roll", content: (item, path)=> <td>{item[path]}</td> },
//     { label: "Photo", path: "imgPath", content: (item, path)=> <td> <img src={item[path]} alt='name'/></td> },
//     { label: "Father's Name", path: "father_name", content: (item, path)=> <td> <button>{item[path]}</button> </td> }
//   ]
//   render() { 
//     return (
//       <TableComponent 
//         items={this.state.data}
//         columns={this.columns}
//       />
//     );
//   }
// }
 
// export default StudentList;

// import React, { Component } from 'react';
// import Table from './components/common/table.component';

// class StudentList extends Component {
//     state = { 
//         data: [
//             {
//                 name:"Shakil",
//                 roll:212
//             },
//             {
//                 name: "Nabil",
//                 roll: 25
//             }
//         ]
//      } 
//     render() { 
//         return (
//             <Table items={this.state.data}
//             columns={[ { label:"Name",path:"name" },{ label:"Roll",path:"roll" } ]}
//             />
//         );
//     }
// }
 
// export default StudentList;