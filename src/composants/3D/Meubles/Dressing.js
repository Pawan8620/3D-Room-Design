import React,{ useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

export function Dressing(props) {
  const { scene } = useGLTF("/Modeles/Meubles/dressing.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
