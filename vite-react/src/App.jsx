import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RotatingCube from "./components/RotatingCube";

function App() {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9cdba6} />
      <color attach="background" args={["#000"]} />
      <RotatingCube position={[0, 0, 0]} />
      <RotatingCube position={[0, 2, 0]} />
      <RotatingCube position={[0, -2, 0]} />
    </Canvas>
  );
}

export default App;
