import React from 'react';
import { Route } from 'react-router-dom';

import ViewCompany from './ViewCompany';


const Companies = ({match}) => (
  <div className="content">
    <Route path={`${match.url}/viewCompany`} component={ViewCompany} />
  </div>
);

export default Companies;
