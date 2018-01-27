import React from 'react';
import AppLayout from '../../components/AppLayout';
import AsyncMapTimeline from '../MapTimeline/Async';
import Store from '../../Store';
import NetworkNotifier from '../../components/NetworkNotifier';

export default () => (
  <Store>
    <AppLayout>
      <AsyncMapTimeline />
      <NetworkNotifier />
    </AppLayout>
  </Store>
);
