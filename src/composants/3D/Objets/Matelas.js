import React,{ useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

/*Matelas */
export function Matelas(props) {
  const { scene } = useGLTF("/Modeles/Lit/matelas.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
