import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BiHome,
  BiLogIn,
  BiMenu,
  BiSolidUserCircle,
  BiX,
} from "react-icons/bi";
import "./header.css";
import CollapsibleMenu from "./CollapsibleMenu";

const menuSubMenu = [
  {
    title: "Master",
    sub: [
      { name: "city", path: "/city" },
      { name: "quality", path: "/quality" },
      { name: "catagory", path: "/catagory" },
      { name: "transport", path: "transport" },
      { name: "process", path: "/process" },
      { name: "customer", path: "/customer" },
      { name: "supplier", path: "/supplier" },
    ],
  },
  {
    title: "Entery",
    sub: [{ name: "Customer wise Entry", path: "/customerwise" }],
  },
  {
    title: "Report",
    sub: [
      { name: "Customer wise outstanding", path: "/customerwisereport" },
      { name: "Supplier wise outstanding", path: "/printpage" },
    ],
  },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <nav>
        <div className="bg-red-600 flex justify-between md:px-52 py-2">
          {/* Logo */}

          <div className="flex justify-between items-center w-full px-3">
            <div className="flex gap-3 items-center py-3">
              <div
                onClick={toggleSidenav}
                className="md:hidden text-white cursor-pointer"
              >
                <BiMenu className="text-3xl" />
              </div>
              <Link to={"/"}>
                <label
                  alt="Shree tirupati textiles "
                  className="w-60 lg:w-72 font-bold text-2xl text-white uppercase"
                >
                  shree tirupati textiles
                </label>
              </Link>
            </div>
            <Link to={"/"} className="text-3xl md:hidden text-white">
              <BiHome />
            </Link>
          </div>
          {/* Nav */}
          <div className="hidden md:block">
            <ul className="flex gap-5">
              <li className="p- text-white">
                <div className="dropdown relative">
                  <Link to={"/"} className="text-white font-medium text-xl">
                    Home
                  </Link>
                </div>
              </li>
              {menuSubMenu.map((item, index) => (
                <li key={index} className="">
                  <div className="dropdown">
                    <button className="font-medium text-xl" type="button">
                      {item.title}
                    </button>
                    <div className="dropdown-menu z-50">
                      <div className=" flex flex-col">
                        {item.sub.map((item, index) => (
                          <Link
                            key={index}
                            to={`${item.path}`}
                            className="px-4 py-1 text-lg font-medium   capitalize italic w-full text-black hover:bg-red-100 hover:font-bold"
                          >
                            <label>{item.name}</label>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ))}

              <li className="">
                <div className="dropdown">
                  <Link className="font-medium text-xl">About</Link>
                </div>
              </li>
              <li className="">
                <div className="dropdown">
                  <div className="flex gap-3 items-center font-medium italic">
                    <BiSolidUserCircle className="text-white text-2xl" />
                    <div className="w-36 truncate text-lg">
                      {user ? user : <Link path="/login">Login</Link>}
                    </div>
                  </div>
                  <ul className="dropdown-menu">
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          localStorage.removeItem("token");
                          localStorage.removeItem("user");
                          navigate("/login");
                        }}
                        className="dropdown-item text-black flex items-center gap-3 text-lg font-medium hover:bg-red-100 hover:font-bold px-4 py-1 capitalize"
                      >
                        <BiLogIn />
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Side Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-200 absolute top-0 right-0 left-0 bottom-0">
          <div className="bg-red-600 w-64 absolute top-0 bottom-0">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-5xl absolute right-0"
            >
              <BiX />
            </button>
            <div className="offcanvas-header p-0">
              <div className="side-nav-userHeader border-b">
                <div className="w-24 h-24 relative m-3">
                  <div className="w-24 h-24 border rounded-full">
                    <img src="" alt="" />
                  </div>
                  <div className="absolute right-0 bottom-0 border rounded-full p-2 w-8 h-8 flex justify-center items-center text-white bg-red-600">
                    <i className="bi bi-camera"></i>
                  </div>
                </div>
                <div className="m-3 text-white">
                  <span className="flex">
                    <b className="capitalize">name :</b>
                    <p className="px-2 italic capitalize">amit pandey</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="overflow-x-scroll h-[460px]">
              {menuSubMenu.map((item) => (
                <CollapsibleMenu
                  close={() => setIsOpen(false)}
                  menuSubMenu={item}
                />
              ))}
            </div>
            <footer className="text-white fixed bottom-0 p-3 ">
              <span className="text-xs">
                Made By Amit Pandey Copyright <i className="bi bi-c-circle"></i>{" "}
                2023
              </span>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
