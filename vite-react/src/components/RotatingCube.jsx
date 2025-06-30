import { Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import { useRef } from "react";

const RotatingCube = ({ position }) => {
  const [animated, setAnimated] = React.useState(false);
  const meshRef = useRef();
  useFrame(() => {
    if (!animated) return;
    console.log(meshRef.current);
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });
  return (
    <mesh
      ref={meshRef}
      onClick={() => {
        console.log("click");
        setAnimated(!animated);
      }}
      position={position}
      rotation={[1, 2, 0]}
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
