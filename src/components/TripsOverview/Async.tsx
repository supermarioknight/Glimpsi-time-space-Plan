import withAsyncFadeIn from '../../decorators/asyncFade';

const AsyncTripOverview = withAsyncFadeIn(() => import('./Connected').then(x => x.default));

export default AsyncTripOverview;
