// import { useLayoutEffect } from "react";
// import { useGLTF } from "@react-three/drei";

// export function Bibliotheque(props) {
//   const { scene } = useGLTF("/Modeles/Meubles/bibliotheque.glb");
//   useLayoutEffect(() => {
//     scene.traverse(
//       (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
//     );
//   });
//   return <primitive object={scene} {...props} />;
// }
import React, { useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

export function Bibliotheque(props) {
  const { scene } = useGLTF("/Modeles/Meubles/bibliotheque.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}

