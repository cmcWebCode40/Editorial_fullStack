import React from "react";
import PaginationItem from "reactstrap/lib/PaginationItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
     const pageNumbers = [];

     for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
          pageNumbers.push(i);
     }
     return (
          <nav className="pagination-wrapper">
               <h5 className="text-white ml-5 font-italic">view news page</h5>
               <ul className=" page-grid">
                    {pageNumbers.map(number => (
                         <li key={number}>
                              <a
                                   onClick={() => paginate(number)}
                                   href=""
                                   className="page-link"
                              >
                                   {number}
                              </a>
                         </li>
                    ))}
               </ul>
          </nav>
     );
};

export default Pagination;

// import React from 'react';
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

// const Example = (props) => {
//   return (
//     <Pagination aria-label="Page navigation example">
//     <PaginationItem>
//         <PaginationLink first href="#" />
//       </PaginationItem>
//       <PaginationItem>
//         <PaginationLink previous href="#" />
//       </PaginationItem>
//       <PaginationItem>
//         <PaginationLink href="#">
//           1
//         </PaginationLink>
//       </PaginationItem>
//       <PaginationItem>
//         <PaginationLink href="#">
//           2
//         </PaginationLink>
//       </PaginationItem>
//       <PaginationItem>
//         <PaginationLink href="#">
//           3
//         </PaginationLink>
//       </PaginationItem>
//       <PaginationItem>
//         <PaginationLink href="#">
//           4
//         </PaginationLink>
//       </PaginationItem>
//       <PaginationItem>
//         <PaginationLink href="#">
//           5
//         </PaginationLink>
//       </PaginationItem>
//       <PaginationItem>
//         <PaginationLink next href="#" />
//       </PaginationItem>
//       <PaginationItem>
//         <PaginationLink last href="#" />
//       </PaginationItem>
//     </Pagination>
//   );
// }

// export default Example;
