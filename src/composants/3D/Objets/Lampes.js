import React,{ useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

export function Lampe1(props) {
  const { scene } = useGLTF("/Modeles/Objets/Deco/lampe1.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}

export function Lampe2(props) {
  const { scene } = useGLTF("/Modeles/Objets/Deco/lampe2.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
