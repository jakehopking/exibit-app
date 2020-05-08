import React, { useState } from 'react';
import SceneManager from '../ThreeJSManager';
import Cube from './Cube';
import Grid from './Grid';
import CameraControls from './CameraControls';
import { getCamera, getRenderer, getScene } from './threeSetup';

const CubeExample = () => {
  const [color, setColor] = useState('0000ff');
  const [color2, setColor2] = useState('ff00ff');
  const [color3, setColor3] = useState('ffff00');
  const [showGrid, setShowGrid] = useState(true);
  const [showCube, setShowCube] = useState(true);

  return (
    <SceneManager
      getCamera={getCamera}
      getRenderer={getRenderer}
      getScene={getScene}
      canvasStyle={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: -1,
      }}
    >
      <CameraControls />
      {console.log(getCamera)}
      {showGrid && <Grid />}
      {showCube && <Cube x={0} color={Number(`0x${color}`)} />}
      {showCube && <Cube x={50} color={Number(`0x${color2}`)} />}
      {showCube && <Cube x={100} color={Number(`0x${color3}`)} />}
      <div
        style={{
          width: '100px',
          padding: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <input
            type="text"
            placeholder="hex color"
            onChange={e => setColor(e.target.value)}
          />
          <input
            type="text"
            placeholder="hex color 2"
            onChange={e => setColor2(e.target.value)}
          />
          <input
            type="text"
            placeholder="hex color 3"
            onChange={e => setColor3(e.target.value)}
          />

          <label>
            <input
              type="checkbox"
              checked={showGrid}
              onChange={() => setShowGrid(!showGrid)}
            />
            show grid
          </label>

          <label>
            <input
              type="checkbox"
              checked={showCube}
              onChange={() => setShowCube(!showCube)}
            />
            show cube
          </label>
        </div>
      </div>
    </SceneManager>
  );
};

export default CubeExample;
