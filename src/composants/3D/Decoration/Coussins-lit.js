import React,{ useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

/*Coussin */
export function Coussin(props) {
  const { scene } = useGLTF("/Modeles/Objets/Coussins/Lit/coussin.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}

/*Coussin1 */
export function Coussin1(props) {
  const { scene } = useGLTF("/Modeles/Objets/Coussins/Lit/coussin1.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}

/*Coussin2 */
export function Coussin2(props) {
  const { scene } = useGLTF("/Modeles/Objets/Coussins/Lit/coussin2.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}

/*Coussin3 */
export function Coussin3(props) {
  const { scene } = useGLTF("/Modeles/Objets/Coussins/Lit/coussin3.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}

/*Coussin4 */
export function Coussin4(props) {
  const { scene } = useGLTF("/Modeles/Objets/Coussins/Lit/coussin4.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
