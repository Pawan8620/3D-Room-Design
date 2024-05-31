import React,{ useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

/*Chaise */
export function Rideaux(props) {
  const { scene } = useGLTF("/Modeles/Objets/Deco/rideaux.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
