import React from 'react';
import AppLayout from '../../components/AppLayout';
import AsyncMapTimeline from '../MapTimeline/Async';
import Store from '../../Store';

export default () => (
  <Store>
    <AppLayout>
      <AsyncMapTimeline />
    </AppLayout>
  </Store>
);
