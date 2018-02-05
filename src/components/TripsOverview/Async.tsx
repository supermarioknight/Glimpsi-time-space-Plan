import { asyncComponent } from 'react-async-component';

const AsyncTripsOverview = asyncComponent({
  resolve: () => import('./Connected').then(x => x.default),
});

export default AsyncTripsOverview;
