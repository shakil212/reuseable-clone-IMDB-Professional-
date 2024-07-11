import React from 'react';

function TableBody({ items, columns }) {
  return (
        <tbody>
            {
                items.map((item, index) => (
                    <tr key={ index }>
                    {
                        columns.map(column => (
                            <td key={column.path}>{ column.content(item,column.path) }</td>
                        ))
                    }
                   </tr>
                ))
            }
       </tbody>
  );
}
 
export default TableBody;


// import React from 'react';

// function TableBody ({ items, columns }) {
//     return (
//         <tbody>
//             { 
//             items.map((item) => (
//                         <tr key = { item.path } >
//                             {
//                             columns.map(column=>(
//                                 <td>{ item[column.path] }</td>
//                         ))}            
//                     </tr>
//                 ))}
//     </tbody>
//     );
// }
 
// export default TableBody;

