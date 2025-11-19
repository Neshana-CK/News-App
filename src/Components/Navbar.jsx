
// import React from 'react'

// const Navbar = ({ setCategory }) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           <span className="badge bg-light text-dark fs-4">NewsMag</span>
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">

//             <li className="nav-item">
//               <div className="nav-link" onClick={() => setCategory("technology")}>
//                 Technology
//               </div>
//             </li>

//             <li className="nav-item">
//               <div className="nav-link" onClick={() => setCategory("business")}>
//                 Business
//               </div>
//             </li>

//             <li className="nav-item">
//               <div className="nav-link" onClick={() => setCategory("health")}>
//                 Health
//               </div>
//             </li>

//             <li className="nav-item">
//               <div className="nav-link" onClick={() => setCategory("sports")}>
//                 Sports
//               </div>
//             </li>

//             <li className="nav-item">
//               <div className="nav-link" onClick={() => setCategory("entertainment")}>
//                 Entertainment
//               </div>
//             </li>

//           </ul>

//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-success" type="submit">Search</button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar;


import React from "react";

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-blue-nav shadow-sm py-3">
      <div className="container-fluid">

        {/* Brand */}
        <a className="navbar-brand fs-3 fw-bold" href="#">
          NewsMag
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarMenu">

          {/* Categories */}
          <ul className="navbar-nav mx-auto gap-2">
            {[
              "general",
              "technology",
              "business",
              "health",
              "sports",
              "entertainment",
            ].map((item) => (
              <li className="nav-item" key={item}>
                <button
                  className="nav-link category-btn"
                  onClick={() => setCategory(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          {/* Search Bar */}
          <form className="d-flex mt-3 mt-lg-0">
            <input
              className="form-control me-2 search-input"
              type="search"
              placeholder="Search news..."
            />
            <button className="btn btn-light search-btn" type="submit">
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
