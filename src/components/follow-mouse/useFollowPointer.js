import { useState, useEffect } from "react";

export default function useFollowPointer(ref) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

    //   const x = clientX - element.offsetLeft - element.offsetWidth / 2;
    //   const y = clientY - element.offsetTop - element.offsetHeight / 2;
    //   setPoint({ x, y });
    if(clientX < element.offsetLeft){
        setPoint({x: -20, y: 0})
    }else{
        setPoint({x: 20, y: 0})
    }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
}
