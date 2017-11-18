import React from 'react';
import App from '../../components/App';
import MapTimeline from '../MapTimeline';
import Store from '../../Store';

export default () => (
  <Store>
    <App>
      <MapTimeline />
    </App>
  </Store>
);
