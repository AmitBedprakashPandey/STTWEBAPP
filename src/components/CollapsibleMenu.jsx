import { useState } from "react";
import { Link } from "react-router-dom";

const CollapsibleMenu = ({ close, menuSubMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative bg-red-600">
        <div className="max-w-7xl mx-auto sm:px-6">
          <div
            onClick={toggleMenu}
            className="flex items-center justify-between px-3 py-3 border-b"
          >
            <div className="flex-shrink-0 border-separate">
              <span className="text-white">{menuSubMenu.title}</span>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            {/* Your collapsible menu content */}
            <div className="bg-red-700">
              {menuSubMenu.sub.map((menuSubMenu) => (
                <Link
                  to={`/${menuSubMenu.name}`}
                  onClick={close}
                  className="capitalize block px-4 py-2 text-base font-medium text-white"
                >
                  {menuSubMenu.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CollapsibleMenu;
