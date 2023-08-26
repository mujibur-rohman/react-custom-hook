import { useRef, useState } from "react";
import useClickOutside from "./hooks/useClickOutside";

function App() {
  const modalRef = useRef<HTMLDivElement>(null);

  const [open, setIsIpen] = useState(false);
  useClickOutside(modalRef, () => {
    setIsIpen(false);
  });

  const toggle = () => {
    setIsIpen(!open);
  };
  return (
    <main>
      <button onClick={toggle}>Open Modal</button>
      <div
        ref={modalRef}
        style={{
          display: open ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "calc(50% - 50px)",
          left: "calc(50% - 50px)",
        }}
      >
        modal
      </div>
    </main>
  );
}

export default App;
