import React,{ useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

export function Meuble(props) {
  const { scene } = useGLTF("/Modeles/Meubles/meuble.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
