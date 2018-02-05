import { asyncComponent } from 'react-async-component';

const AsyncTripStart = asyncComponent({
  resolve: () => import('./Connected').then(x => x.default),
});

export default AsyncTripStart;
