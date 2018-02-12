import withAsyncFadeIn from '../../decorators/asyncFade';

const AsyncTimelineActions = withAsyncFadeIn(() => import('./Connected').then(x => x.default));

export default AsyncTimelineActions;
