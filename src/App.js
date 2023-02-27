import "./App.css";
import { Canvas } from "@react-three/fiber";
import Model from "./components/Model";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import WebCam from "./components/WebCam";

function App() {
    let results;

    const onHolisticResults = (newResults) => {
        results = newResults;
    }

    const getHolisticResults = () => {
        return results;
    }
    return (
            <div className='App'>
                <Canvas>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.001} />
                        <directionalLight color="white" position={[1, 1, 1]} normalize={true} />
                        <Model getHolisticResults={getHolisticResults} />
                        <OrbitControls />
                        <Environment preset="sunset" background />
                    </Suspense>
                </Canvas>
                <WebCam onHolisticResults={onHolisticResults} />
            </div>
    );
}

export default App;