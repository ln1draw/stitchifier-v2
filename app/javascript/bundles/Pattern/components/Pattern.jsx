import PropTypes from 'prop-types';
import React, { useState } from 'react';
import style from './Pattern.module.css';

const Pattern = (props) => {
  const [name, setName] = useState(props.name);

  return (
    <div>
      <h3>Hello, {name}! this is a pattern!</h3>
      <hr />
      <form>
        <label className={style.bright} htmlFor="name">
          Say hello to:
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </form>
    </div>
  );
};

Pattern.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default Pattern;
