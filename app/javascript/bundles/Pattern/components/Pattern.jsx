import PropTypes from 'prop-types';
import React, { useState } from 'react';
import style from './Pattern.module.css';

const Pattern = (props) => {
  const [
    sectionsWide,
    setSectionsWide
  ] = useState(props.sectionsWide);
  const [sectionsHigh, setSectionsHigh] = useState(props.sectionsHigh)
  const [unitWidth, setUnitWidth] = useState(props.unitWidth)
  const width = sectionsWide * unitWidth * 10;
  const height = sectionsHigh * unitWidth * 10;
  const tenUnit = unitWidth * 10;
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

  const backstitches = []
  for (let i = 0; i < startingBackstitches.length; i++) {
    backstitches.push(
        <line x1={startingBackstitches[i].starting.x * unitWidth} y1={startingBackstitches[i].starting.y * unitWidth}
            x2={startingBackstitches[i].ending.x * unitWidth} y2={startingBackstitches[i].ending.y * unitWidth} stroke-width="0.5" stroke="black"/>
    )
  }

  return (
    <div>
      <h3>Hello, {sectionsHigh}! this is a pattern!</h3>
      <hr />
      <form>
        <label className={style.bright} htmlFor="sectionsWide">
          how many sections wide:
          <input id="sectionsWide" type="text" value={sectionsWide} onChange={(e) => setSectionsWide(e.target.value)} />
        </label>

        <label className={style.bright} htmlFor="sectionsHigh">
          how many sections High:
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
        <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    </div>
  );
};

Pattern.propTypes = {
//   name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default Pattern;
