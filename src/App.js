import "./App.css";
import { Canvas } from "@react-three/fiber";
import Cylinder3d from "./components/Cylinder3d";
 
function App() {
  return (
    <section className='App-header'>
      <h1>Hello World!</h1>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        {/* <pointLight position={[10, 10, 10]} /> */}
        <ambientLight />
        <Cylinder3d position={[-1.2, 0, 0]} />
        <Cylinder3d position={[1.2, 0, 0]} />
      </Canvas>
    </section>
  );
}
 
export default App;