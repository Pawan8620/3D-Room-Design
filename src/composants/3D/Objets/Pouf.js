import React,{ useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

/*Chaise */
export function Pouf(props) {
  const { scene } = useGLTF("/Modeles/Objets/Deco/pouf.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
