import {Environment, Center} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';
import Cake from './Cake';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5}/>
      <Environment preset='city'/>
       <CameraRig>
        {/* <Backdrop/>  */}
          <Center>
            <Cake>

            </Cake>
          </Center>
      
      </CameraRig>



    </Canvas>
  )
}

export default CanvasModel
