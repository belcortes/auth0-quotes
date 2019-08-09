import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

export default () => (
  <nav>
    <Link to="/">Auth 0 | Quotes</Link>
    <Search />
  </nav>
);
