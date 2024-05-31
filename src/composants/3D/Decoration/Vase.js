import React,{ useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

export function Vase(props) {
  const { scene } = useGLTF("/Modeles/Objets/Deco/grande-vase-plante.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
