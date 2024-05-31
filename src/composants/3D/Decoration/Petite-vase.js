import React,{ useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

export function Petitevase(props) {
  const { scene } = useGLTF("/Modeles/Objets/Deco/petite-vase-plante.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
