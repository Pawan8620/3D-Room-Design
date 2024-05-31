import React,{ useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

/*Chaise */
export function Chaise(props) {
  const { scene } = useGLTF("/Modeles/Objets/Deco/chaise.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
