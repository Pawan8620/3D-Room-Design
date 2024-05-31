import React,{ useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

export function Tableverre(props) {
  const { scene } = useGLTF("/Modeles/Meubles/table-verre.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
