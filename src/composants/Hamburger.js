import React from "react";
export default function Hamburger({ isOpen }) {
  return (
    <div className="hamburger">
      <span className="line premier" />
      <span className="line deuxieme" />
      <span className="line troisieme" />
      <style jsx="true">
        {`
          .premier {
            transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
          }
          .deuxieme {
            transform: ${isOpen ? "translateX(100%)" : "translateX(0)"};
            opacity: ${isOpen ? 0 : 1};
          }

          .troisieme {
            transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
          }
        `}
      </style>
    </div>
  );
}
