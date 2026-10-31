import { useRef, useEffect } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";
import birdScene from '../assets/3d/bird.glb'


const Bird = () => {
    const { scene, animations } = useGLTF(birdScene);
    const birdRef = useRef();
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
      actions['Take 001'].play();
    }, [])
  
    useFrame(({ clock, camera }) => {
      // Update bird position using Sin wave to simulate birdlike motion
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
    
      // If bird reaches some end, change direction
      if (birdRef.current.position.x > camera.position.x + 10) {
        // Change direction backwards and rotate bird 180 degrees on y axis
        birdRef.current.rotation.y = Math.PI;
      } else if (birdRef.current.position.x < camera.position.x - 10) {
        // Change direction and reset bird's rotation
        birdRef.current.rotation.y = 0;
      }

      if (birdRef.current.rotation.y === 0) {
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01
      } else {
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
      }
    })

  return (
    <mesh 
      position={[-5, 2, 1]} 
      scale={[0.003, 0.003, 0.003]} 
      ref={birdRef}
    > 
        <primitive object={scene} />
    </mesh>
  )
}

export default Bird