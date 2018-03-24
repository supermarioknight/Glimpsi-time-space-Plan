import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
import ReactGA from 'react-ga';
import { findLast, last } from 'lodash-es';

export function trackEvent({ payload, context }: UIAnalyticsEvent) {
  const hasContext = findLast(context, data => !!data.view);

  ReactGA.event({
    ...payload,
    action: `${payload.action}`,
    category: `${payload.category}`,
    label: hasContext ? `${hasContext.view}` : undefined,
  });

  if (process.env.NODE_ENV !== 'production') {
    // tslint:disable-next-line no-any no-console
    console.log('track:', last((ReactGA as any).testModeAPI.calls));
  }
}

export function trackView({ context }: UIAnalyticsEvent) {
  const name = context.reduce((acc, val) => (acc ? `${acc}->${val.view}` : val.view), '') as string;

  if (name.includes('Modal')) {
    ReactGA.modalview(name);
  } else {
    ReactGA.pageview(name);
  }

  if (process.env.NODE_ENV !== 'production') {
    // tslint:disable-next-line no-any no-console
    console.log('track:', last((ReactGA as any).testModeAPI.calls));
  }
}
