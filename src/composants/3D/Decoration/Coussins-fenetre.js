import React,{ useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

/*Coussin5 */
export function Coussin5(props) {
  const { scene } = useGLTF("/Modeles/Objets/Coussins/Fenetre/coussin5.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}

/*Coussin6 */
export function Coussin6(props) {
  const { scene } = useGLTF("/Modeles/Objets/Coussins/Fenetre/coussin6.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}

/*Coussin7 */
export function Coussin7(props) {
  const { scene } = useGLTF("/Modeles/Objets/Coussins/Fenetre/coussin7.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}

/*Coussin8 */
export function Coussin8(props) {
  const { scene } = useGLTF("/Modeles/Objets/Coussins/Fenetre/coussin8.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
