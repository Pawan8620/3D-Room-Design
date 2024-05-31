import React,{ useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

/*Lit */
export function Lit(props) {
  const { scene } = useGLTF("/Modeles/Lit/lit.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
