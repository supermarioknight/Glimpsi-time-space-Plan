import { asyncComponent } from 'react-async-component';

const AsyncMapTimeline = asyncComponent({
  resolve: () => import('./').then(x => x.default),
});

export default AsyncMapTimeline;
