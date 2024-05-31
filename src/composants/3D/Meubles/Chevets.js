import React,{ useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

export function Tablechevet1(props) {
  const { scene } = useGLTF("/Modeles/Meubles/table-chevet1.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}

export function Tablechevet2(props) {
  const { scene } = useGLTF("/Modeles/Meubles/table-chevet2.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
