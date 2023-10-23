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
            
        <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    </div>
  );
};

Pattern.propTypes = {
//   name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default Pattern;
