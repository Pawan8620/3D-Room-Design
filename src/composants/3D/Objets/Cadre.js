import React,{ useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

/*Matelas */
export function Cadre(props) {
  const { scene } = useGLTF("/Modeles/Objets/Deco/cadre.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
