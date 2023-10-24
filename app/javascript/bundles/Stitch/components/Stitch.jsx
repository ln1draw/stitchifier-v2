import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Stitch = (props) => {
  const shape = props.shape;
  let xVal = props.xVal;
  let yVal = props.yVal;
  const quadrant = props.quadrant;
  const fill = props.fill == "none" ? 'none' : 'black'
  let unitWidth = props.unitWidth;
  let halfUnit = unitWidth / 2;
  let fifthUnit = unitWidth / 5;
  let fourFifthUnit = fifthUnit * 4;
  let xUnit = xVal * unitWidth;
  let yUnit = yVal * unitWidth;

  function setUnits() {
    halfUnit = unitWidth / 2;
    fifthUnit = unitWidth / 5;
    fourFifthUnit = fifthUnit * 4;
  }

  let ret = '';

  if (quadrant > 0) {
    unitWidth = unitWidth / 2
    setUnits();
    if (quadrant == 4) {
        console.log('in the if')
        xVal = xVal - unitWidth / 2
        console.log(xVal)
    }
  }

  if (shape == "circle") {
    const r = (unitWidth) / 3;
    const cx = xUnit - halfUnit;
    const cy = yUnit - halfUnit;
    ret = (<circle cx={cx} cy={cy} r={r} stroke="black" stroke-width="1" fill={fill}/>)
  }


  if (shape == "triangle") {
    const p1x = xUnit - halfUnit;
    const p1y = yUnit - fourFifthUnit;
    const p2x = xUnit - fourFifthUnit;
    const p2y = yUnit - fifthUnit;
    const p3x = xUnit - fifthUnit;
    const p3y = yUnit - fifthUnit;
    ret = (<polygon points={`${p1x},${p1y} ${p2x},${p2y} ${p3x},${p3y}`} fill={fill} stroke="black" />)
  }

  if (shape == "flippedTriangle") {
    const p1x = xUnit - halfUnit;
    const p1y = yUnit - fifthUnit;
    const p2x = xUnit - fourFifthUnit;
    const p2y = yUnit - fourFifthUnit;
    const p3x = xUnit - fifthUnit;
    const p3y = yUnit - fourFifthUnit;
    ret = (<polygon points={`${p1x},${p1y} ${p2x},${p2y} ${p3x},${p3y}`} fill={fill} stroke="black" />)
  }

  if (shape == "x") {
    const x1 = xUnit - fourFifthUnit;
    const y1 = yUnit - fourFifthUnit;
    const x2 = xUnit - fifthUnit;
    const y2 = yUnit - fifthUnit;
    ret = []
    ret.push(<line x1={x1} y1={y1} x2={x2} y2={y2} stroke-width="1" stroke="black"/>);
    ret.push(<line x1={x2} y1={y1} x2={x1} y2={y2} stroke-width="1" stroke="black"/>);
  }

  if (shape == "square") {
    const p1x = xUnit - fourFifthUnit;
    const p1y = yUnit - fourFifthUnit;
    const p2x = xUnit - fifthUnit;
    const p2y = yUnit - fourFifthUnit;
    const p3x = xUnit - fifthUnit;
    const p3y = yUnit - fifthUnit;
    const p4x = xUnit - fourFifthUnit;
    const p4y = yUnit - fifthUnit;
    ret = (<polygon points={`${p1x},${p1y} ${p2x},${p2y} ${p3x},${p3y} ${p4x},${p4y}`} fill={fill} stroke="black" />)
  }

  return ret;
};

Stitch.propTypes = {
//   name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default Stitch;
