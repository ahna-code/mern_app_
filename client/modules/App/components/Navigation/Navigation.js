import React from 'react';
//import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Navigation.css';

const Navigation = (props, context) => {
  return (
        <nav>
            <ul>
                <li><Link className={styles.link} to="/home" >Home</Link></li>
                <li><Link className={styles.link} to="/" >Posts</Link></li>
                <li><Link className={styles.link} to="/about" >About</Link> </li>
            </ul>
        </nav>
    );
};


Navigation.propTypes = {
};

export default Navigation;
