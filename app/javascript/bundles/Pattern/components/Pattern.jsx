import PropTypes from 'prop-types';
import React, { useState } from 'react';
import style from './Pattern.module.css';
import Stitch from '../../Stitch/components/Stitch';
import Instruction from '../../Instruction/components/Instruction';

const Pattern = (props) => {

//   test data
const startingBackstitches = [
    {
        starting: {x: 1, y: 3},
        ending: {x: 2, y: 1}
    },
    {
        starting: {x: 2, y: 1},
        ending: {x: 3, y: 1}
    },
    {
        starting: {x: 3, y: 1},
        ending: {x: 5, y: 3}
    },
    {
        starting: {x: 5, y: 3},
        ending: {x: 7, y: 1}
    },
    {
        starting: {x: 7, y: 1},
        ending: {x: 8, y: 1}
    },
    {
        starting: {x: 8, y: 1},
        ending: {x: 9, y: 3}
    },
    {
        starting: {x: 9, y: 3},
        ending: {x: 9, y: 5}
    },
    {
        starting: {x: 9, y: 5},
        ending: {x: 5, y: 9}
    },
    {
        starting: {x: 5, y: 9},
        ending: {x: 1, y: 5}
    },
    {
        starting: {x: 1, y: 5},
        ending: {x: 1, y: 3}
    }
]

const other_triangles = [
    [5, 2],
    [6, 2],
    [2, 7],
    [2, 8],
    [2, 9],
    [3, 8],
    [3, 9],
    [4, 9],
    [7, 9],
    [8, 9],
    [9, 9],
    [9, 8],
    [8, 8],
    [9, 7],
    [2, 2, 1],
    [4, 2, 2],
    [7, 2, 1],
    [9, 2, 2],
    [2, 6, 4],
    [3, 7, 4],
    [4, 8, 4],
    [5, 9, 4],
    [6, 9, 3],
    [7, 8, 3],
    [8, 7, 3],
    [9, 6, 3],
    [5, 3, 2],
    [6, 3, 1]
  ]

  const startingCircles = [
    [3, 2],
    [3, 3],
    [3, 4],
    [4, 3],
    [2, 4],
    [2, 5],
    [3, 5],
    [3, 6],
    [4, 4],
    [5, 4],
    [4, 5],
    [5, 5],
    [4, 6],
    [5, 6],
    [4, 7],
    [5, 7],
    [5, 8],
    [6, 8],
    [6, 7],
    [7, 7],
    [6, 6],
    [7, 6],
    [8, 6],
    [6, 5],
    [7, 5],
    [8, 5],
    [9, 5],
    [6, 4],
    [7, 4],
    [8, 4],
    [9, 4],
    [7, 3],
    [8, 3],
    [8, 2],
    [2, 3, 3],
    [4, 2, 4],
    [2, 6, 2],
    [9, 6, 1],
    [5, 3, 4],
    [6, 3, 3],
    [9, 3, 4],
    [3, 7, 2],
    [4, 8, 2],
    [5, 9, 2],
    [6, 9, 1],
    [7, 8, 1],
    [8, 7, 1],
    [7, 2, 3]
  ]


  const [
    sectionsWide,
    setSectionsWide
  ] = useState(props.sectionsWide);
  const [sectionsHigh, setSectionsHigh] = useState(props.sectionsHigh);
  const [backstitchInstructions, setBackstitchInstructions] = useState(props.backstitchInstructions);
  const [triangleInstructions, setTriangleInstructions] = useState(props.triangleInstructions);
  const [unitWidth, setUnitWidth] = useState(props.unitWidth);
  const width = sectionsWide * unitWidth * 10;
  const height = sectionsHigh * unitWidth * 10;
  const tenUnit = unitWidth * 10;
  const backstitches = []
  const stitches = []

  for (let i = 0; i < startingBackstitches.length; i++) {
    backstitches.push(
        <line x1={startingBackstitches[i].starting.x * unitWidth} y1={startingBackstitches[i].starting.y * unitWidth}
            x2={startingBackstitches[i].ending.x * unitWidth} y2={startingBackstitches[i].ending.y * unitWidth} stroke-width="2" stroke="black"/>
    )
  }

  function addStitch (shape, coords, fill="none") {
    const quadrant = coords[2] ? coords[2] : 0;
    return (<Stitch shape={shape} fill={fill} unitWidth={unitWidth} xVal={coords[0]} yVal={coords[1]} quadrant={quadrant}></Stitch>)
  }

  for (let i = 1; i < 11; i++) {
    stitches.push(addStitch('triangle', [i, 1]))
    stitches.push(addStitch('triangle', [1, i]))
    stitches.push(addStitch('triangle', [10, i]))
    stitches.push(addStitch('triangle', [i, 10]))
  }

  for (let i = 0; i < other_triangles.length; i++) {
    stitches.push(addStitch('triangle', other_triangles[i]))
  }

  for (let i=0; i < startingCircles.length; i++) {
    stitches.push(addStitch('circle', startingCircles[i]))
  }

  return (
    <div class="stitchifier">
      <form>
        <label className={style.bright} htmlFor="triangleInstructions">
          What should be triangles?
          <input id="triangleInstructions" type="text" value={triangleInstructions} onChange={(e) => setTriangleInstructions(e.target.value)} />
        </label>
        <label className={style.bright} htmlFor="backstitchInstructions">
          What should be backstitched?
          <input id="backstitchInstructions" type="text" value={backstitchInstructions} onChange={(e) => setBackstitchInstructions(e.target.value)} />
        </label>
        <label className={style.bright} htmlFor="sectionsWide">
          How many sections wide?
          <input id="sectionsWide" type="text" value={sectionsWide} onChange={(e) => setSectionsWide(e.target.value)} />
        </label>

        <label className={style.bright} htmlFor="sectionsHigh">
          How many sections high?
          <input id="sectionsHigh" type="text" value={sectionsHigh} onChange={(e) => setSectionsHigh(e.target.value)} />
        </label>
      </form>
      <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="smallGrid" width={unitWidth} height={unitWidth} patternUnits="userSpaceOnUse">
            <path d={"M " + unitWidth + " 0 L 0 0 0 " + unitWidth} fill="none" stroke="gray" stroke-width="0.5"/>
            </pattern>
            <pattern id="grid" width={tenUnit} height={tenUnit} patternUnits="userSpaceOnUse">
            <rect width={tenUnit} height={tenUnit} fill="url(#smallGrid)"/>
            <path d={"M " + tenUnit + " 0 L 0 0 0 " + tenUnit} fill="none" stroke="gray" stroke-width="1"/>
            </pattern>
        </defs>
        {backstitches}
        {stitches}
        {/* <Stitch shape="circle" fill="none" xVal="1" yVal="1" unitWidth={unitWidth}></Stitch>
        <Stitch shape="circle" fill="true" xVal="2" yVal="1" unitWidth={unitWidth}></Stitch>
        <Stitch shape="triangle" fill="none" xVal="5" yVal="5" unitWidth={unitWidth}></Stitch>
        <Stitch shape="triangle" fill="true" xVal="6" yVal="5" unitWidth={unitWidth}></Stitch>
        <Stitch shape="flippedTriangle" fill="true" xVal="6" yVal="6" unitWidth={unitWidth}></Stitch>
        <Stitch shape="flippedTriangle" fill="none" xVal="5" yVal="6" unitWidth={unitWidth}></Stitch>
        <Stitch shape="x" xVal="4" yVal="1" unitWidth={unitWidth}></Stitch>
        <Stitch shape="square" xVal="5" yVal="1" unitWidth={unitWidth} fill="none"></Stitch>
        <Stitch shape="square" xVal="6" yVal="1" unitWidth={unitWidth} fill="true"></Stitch> */}
        <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    </div>
  );
};

Pattern.propTypes = {
//   name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default Pattern;
