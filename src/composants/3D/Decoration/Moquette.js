import React,{ useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

export function Moquette(props) {
  const { scene } = useGLTF("/Modeles/Objets/Deco/moquette.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
