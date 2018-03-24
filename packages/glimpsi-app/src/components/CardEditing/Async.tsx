import { asyncComponent } from 'react-async-component';

const AsyncCardEditing = asyncComponent({
  resolve: () => import('./Connected').then(x => x.default),
});

export default AsyncCardEditing;
