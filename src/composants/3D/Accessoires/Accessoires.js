import React,{ useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

/*Caisson*/
export function Caisson(props) {
  const { scene } = useGLTF("/Modeles/Objets/Deco/caisson.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}

/*Livre*/
export function Livre(props) {
  const { scene } = useGLTF("/Modeles/Objets/Deco/livre.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}

/*Livres*/
export function Livres(props) {
  const { scene } = useGLTF("/Modeles/Objets/Deco/livres.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}

/*MacBook*/
export function MacBookPro(props) {
  const { scene } = useGLTF("/Modeles/Objets/Deco/MacbookPro.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}

/*TV*/
export function TV(props) {
  const { scene } = useGLTF("/Modeles/Objets/Deco/TV.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}

/*Coussin sur la chaise*/
export function Coussinchaise(props) {
  const { scene } = useGLTF("/Modeles/Objets/Coussins/coussin-chaise.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
