import withAsyncFadeIn from '../../../decorators/asyncFade';

const AsyncMapTimeline = withAsyncFadeIn(() => import('./').then(x => x.default));

export default AsyncMapTimeline;
