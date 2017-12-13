import React from 'react';
import AppSkeleton from '../../components/AppSkeleton';
import AsyncMapTimeline from '../MapTimeline/Async';
import Store from '../../Store';

export default () => (
  <Store>
    <AppSkeleton>
      <AsyncMapTimeline />
    </AppSkeleton>
  </Store>
);
