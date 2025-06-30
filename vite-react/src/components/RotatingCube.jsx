import { Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

const RotatingCube = ({ position }) => {
  const meshRef = useRef();

  const [scrollDirection, setScrollDirection] = useState(null);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      const currentPosition = window.scrollY;

      console.log(currentPosition, prevScrollY);

      if (currentPosition > prevScrollY) {
        setScrollDirection("down");
      }
      if (currentPosition < prevScrollY) {
        setScrollDirection("up");
      }
      setPrevScrollY(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
  if (scrollDirection === "down") {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
    meshRef.current.position.z += 0.01;
  }
  if (scrollDirection === "up") {
    meshRef.current.rotation.x -= 0.01;
    meshRef.current.rotation.y -= 0.01;
    meshRef.current.position.z -= 0.01;
  }
  return (
    <mesh
      ref={meshRef}
      onClick={() => {
        console.log("click");
        setAnimated(!animated);
      }}
      position={position}
      rotation={[1, 2, 0]}
      scale={[1, 1, 1]}
      href={meshRef}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color={"#fff"} emissive={"#fff"} />
      <Sparkles
        count={100}
        scale={1}
        size={6}
        speed={0.5}
        noise={0.1}
        color={"#468585"}
      />
    </mesh>
  );
};

export default RotatingCube;
