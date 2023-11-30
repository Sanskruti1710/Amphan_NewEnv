import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaUser, FaPlusSquare } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiCog } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
// Assuming you have SidebarMenu component imported here

const routes = [
  {
    path: "/User Profile",
    name: "User Profile",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "/UserProfile/profile",
        name: "Profile",
      },
      {
        path: "/UserProfile/MyAccount",
        name: "My Account",
      },
      {
        path: "/UserProfile/logout",
        name: "Logout",
      },
    ],
  },
  {
    path: "/Help",
    name: "Help",
    icon: <MdMessage />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
  },
  {
    path: "/User Profile",
    name: "Workspace",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "/Workspace/Private",
        name: "Private",
        icon: <FaPlusSquare />,
        onClick: (navigate) => {
          const newPagePath = `/Workspace/private/`;
          navigate(newPagePath);
        },
      },
    ],
  },
  // New route for creating a new page
  
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [pages, setPages] = useState([]); //i put 
  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      maxWidth: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      maxWidth: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  const createNewPage = () => { //i put
    const newPagePath = `/newpage/${Date.now()}`;
    setPages([...pages, newPagePath]);
    navigate(newPagePath);
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  username
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
          {pages.map((page, index) => (
              <div key={index}>
                <NavLink
                  to={page}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">
                    <FaPlusSquare />
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {`New Page ${index + 1}`}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              </div>
            ))}

            <div className="link" onClick={createNewPage}>
              <div className="icon">
                <FaPlusSquare />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    New Page
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                    key={index}
                  />
                );
              }

              return (
                <div key={index}>
                  {route.onClick ? (
                    <div
                      className="link"
                      onClick={() => route.onClick(navigate)}
                    >
                      <div className="icon">{route.icon}</div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="link_text"
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={route.path}
                      className="link"
                      activeClassName="active"
                    >
                      <div className="icon">{route.icon}</div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="link_text"
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </NavLink>
                  )}
                </div>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;

// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaBars, FaUser, FaPlusSquare } from "react-icons/fa";
// import { MdMessage } from "react-icons/md";
// import { BiCog } from "react-icons/bi";
// import { AnimatePresence, motion } from "framer-motion";

// const SideBar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [pages, setPages] = useState([]);
//   const navigate = useNavigate();

//   const toggle = () => setIsOpen(!isOpen);

//   const inputAnimation = {
//     hidden: {
//       width: 0,
//       padding: 0,
//       transition: {
//         duration: 0.2,
//       },
//     },
//     show: {
//       width: "140px",
//       padding: "5px 15px",
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   const showAnimation = {
//     hidden: {
//       width: 0,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//     show: {
//       opacity: 1,
//       width: "auto",
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   const createNewPage = () => {
//     const newPagePath = `/newpage/${Date.now()}`;
//     setPages([...pages, newPagePath]);
//     navigate(newPagePath);
//   };

//   return (
//     <>
//       <div className="main-container">
//         <motion.div
//           animate={{
//             width: isOpen ? "200px" : "45px",
//             transition: {
//               duration: 0.5,
//               type: "spring",
//               damping: 10,
//             },
//           }}
//           className={`sidebar `}
//         >
//           <div className="top_section">
//             <AnimatePresence>
//               {isOpen && (
//                 <motion.h1
//                   variants={showAnimation}
//                   initial="hidden"
//                   animate="show"
//                   exit="hidden"
//                   className="logo"
//                 >
//                   username
//                 </motion.h1>
//               )}
//             </AnimatePresence>

//             <div className="bars">
//               <FaBars onClick={toggle} />
//             </div>
//           </div>

//           <section className="routes">
//             {pages.map((page, index) => (
//               <div key={index}>
//                 <NavLink
//                   to={page}
//                   className="link"
//                   activeClassName="active"
//                 >
//                   <div className="icon">
//                     <FaPlusSquare />
//                   </div>
//                   <AnimatePresence>
//                     {isOpen && (
//                       <motion.div
//                         variants={showAnimation}
//                         initial="hidden"
//                         animate="show"
//                         exit="hidden"
//                         className="link_text"
//                       >
//                         {`New Page ${index + 1}`}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </NavLink>
//               </div>
//             ))}

//             <div className="link" onClick={createNewPage}>
//               <div className="icon">
//                 <FaPlusSquare />
//               </div>
//               <AnimatePresence>
//                 {isOpen && (
//                   <motion.div
//                     variants={showAnimation}
//                     initial="hidden"
//                     animate="show"
//                     exit="hidden"
//                     className="link_text"
//                   >
//                     New Page
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* ... existing routes ... */}
//           </section>
//         </motion.div>

//         <main>{children}</main>
//       </div>
//     </>
//   );
// };

// export default SideBar;

