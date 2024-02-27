import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

function AvatarModel({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} />;
}

export default function Avatar({ url }) {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <Suspense fallback={null}>
        <AvatarModel url={url} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
