import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RotatingCube from "./components/RotatingCube";

function App() {
  return (
    <div>
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      >
        <OrbitControls enableZoom enablePan enableRotate />
        <directionalLight
          position={[1, 1, 1]}
          intensity={10}
          color={0x9cdba6}
        />
        <color attach="background" args={["#000"]} />
        <RotatingCube position={[0, 0, 0]} />
        <RotatingCube position={[0, 2, 0]} />
        <RotatingCube position={[0, -2, 0]} />
        <RotatingCube position={[2, 0, 0]} />
        <RotatingCube position={[-2, 0, 0]} />
      </Canvas>
      <section className="section-container hero">
        <h1>Vite + React + Three.js</h1>
        <p>this is a simple three.js scene with a rotating cubes.</p>
      </section>
      <section className="section-container hero">
        <h1>Vite + React + Three.js</h1>
        <p>this is a simple three.js scene with a rotating cubes.</p>
      </section>
      <section className="section-container hero">
        <h1>Vite + React + Three.js</h1>
        <p>this is a simple three.js scene with a rotating cubes.</p>
      </section>
    </div>
  );
}

export default App;
