import withAsyncFadeIn from '../../decorators/asyncFade';

const AsyncTripStart = withAsyncFadeIn(() => import('./Connected').then(x => x.default));

export default AsyncTripStart;
