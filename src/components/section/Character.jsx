import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";

export default function Character() {
  const modelRef = useRef();
  const { scene, animations } = useGLTF("/buster_drone/scene.gltf"); // Asigură-te că calea este corectă
  const { actions } = useAnimations(animations, modelRef);

  useEffect(() => {
    if (actions) {
      const firstAction = Object.values(actions)[0];
      firstAction?.play();
    }
  }, [actions]);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1.5}
      position={[0, -1, 0]}
    />
  );
}
