import { Canvas, extend } from "@react-three/fiber";
import React,{ useLayoutEffect } from "react";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  SSAO,
  DepthOfField
} from "@react-three/postprocessing";

/* Les objets 3D*/
import { Lit } from "./composants/3D/Meubles/Lit";
import { Bibliotheque } from "./composants/3D/Meubles/Bibliotheque";
import { Meuble } from "./composants/3D/Meubles/Meuble";
import { Dressing } from "./composants/3D/Meubles/Dressing";
import { Tablechevet1, Tablechevet2 } from "./composants/3D/Meubles/Chevets";
import { Tableverre } from "./composants/3D/Meubles/Verre";

import { Cadre } from "./composants/3D/Objets/Cadre";
import { Chaise } from "./composants/3D/Objets/Chaise";
import { Couverture } from "./composants/3D/Objets/Couverture";
import { Lampe1, Lampe2 } from "./composants/3D/Objets/Lampes";
import { Matelas } from "./composants/3D/Objets/Matelas";
import { Pouf } from "./composants/3D/Objets/Pouf";
import { Rideaux } from "./composants/3D/Objets/Rideaux";
import { Vase } from "./composants/3D/Decoration/Vase";
import { Petitevase } from "./composants/3D/Decoration/Petite-vase";
import { Pot } from "./composants/3D/Decoration/Pot";
import { Moquette } from "./composants/3D/Decoration/Moquette";

import {
  Coussin,
  Coussin1,
  Coussin2,
  Coussin3,
  Coussin4
} from "./composants/3D/Decoration/Coussins-lit";
import {
  Coussin5,
  Coussin6,
  Coussin7,
  Coussin8
} from "./composants/3D/Decoration/Coussins-fenetre";

import {
  Caisson,
  Livre,
  Livres,
  MacBookPro,
  TV,
  Coussinchaise
} from "./composants/3D/Accessoires/Accessoires";

extend({ OrbitControls });

export default function Room() {
  return (
    <Canvas camera={{ position: [90, 0, -10], fov: 25 }}>
      <color attach="background" args={["#f4eccf"]} />

      {/* Les lumières */}
      {/*<directionalLight
                castShadow
                position={[1, 20, 3]}
                shadow-mapSize={[5000, 5000]}
              />*/}

      <pointLight
        castShadow
        intensity={0.5}
        args={["#f4eccf"]}
        position={[1, 0, 3]}
      />
      <ambientLight castShadow intensity={0.1} />

      {/* La chambre déclarée*/}
      <Chambre castShadow receiveShadow />

      {/* Meubles, objets que j'ai déclaré */}

      <Bibliotheque castShadow receiveShadow />
      <Dressing castShadow receiveShadow />
      <Meuble castShadow receiveShadow />
      <Tablechevet1 castShadow receiveShadow />
      <Tablechevet2 castShadow receiveShadow />
      <Tableverre castShadow receiveShadow />
      <Cadre castShadow receiveShadow />
      <Chaise castShadow receiveShadow />

      <Lampe1 castShadow receiveShadow />
      <Lampe2 castShadow receiveShadow />
      <Petitevase castShadow receiveShadow />
      <Vase castShadow receiveShadow />
      <Pouf castShadow receiveShadow />
      <Pot castShadow receiveShadow />

      <Lit castShadow receiveShadow />
      <Matelas castShadow receiveShadow />
      <Couverture castShadow receiveShadow />
      <Coussin castShadow receiveShadow />
      <Coussin1 castShadow receiveShadow />
      <Coussin2 castShadow receiveShadow />
      <Coussin3 castShadow receiveShadow />
      <Coussin4 castShadow receiveShadow />

      <group>
        <Coussin5 castShadow receiveShadow />
        <Coussin6 castShadow receiveShadow />
        <Coussin7 castShadow receiveShadow />
        <Coussin8 castShadow receiveShadow />
        <Rideaux castShadow receiveShadow />
      </group>
      <MacBookPro castShadow receiveShadow />
      <Moquette castShadow receiveShadow />
      <TV castShadow receiveShadow />
      <Caisson castShadow receiveShadow />
      <Livre castShadow receiveShadow />
      <Livres castShadow receiveShadow />
      <Coussinchaise position={[-1, -1, -1]} />

      {/* Options & Effets */}
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      <Environment preset="night" />
      <EffectComposer smaa>
        <Bloom />
        <SSAO />
        <DepthOfField />
      </EffectComposer>
    </Canvas>
  );
}

/*La chambre */

function Chambre(props) {
  const { scene } = useGLTF("/Modeles/chambre.glb");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  });
  return <primitive object={scene} {...props} />;
}
