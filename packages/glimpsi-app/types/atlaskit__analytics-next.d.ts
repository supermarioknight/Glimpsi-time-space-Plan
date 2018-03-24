declare module '@atlaskit/analytics-next' {
  import * as React from 'react';
  import { Omit } from 'react-redux';

  interface Payload {
    [key: string]: string | number;
  }

  type PayloadUpdater = (payload: Payload) => Payload;

  interface UIAnalyticsEvent {
    payload: Payload;
    context: Payload[];
    handlers: Handler[];
    clone: UIAnalyticsEvent | null;
    fire(channel?: string): void;
    update(updater: Payload | PayloadUpdater): UIAnalyticsEvent;
  }

  export const AnalyticsListener: React.ComponentType<{
    children: React.ReactNode;
    onEvent: (event: UIAnalyticsEvent) => void;
    channel?: string;
  }>;

  export const AnalyticsContext: React.ComponentType<{
    children: React.ReactNode;
    data: {};
  }>;

  export const withAnalyticsContext: <TProps>(
    context: Payload
  ) => (component: React.ComponentType<TProps>) => React.ComponentType<TProps>;

  interface AnalyticsObject {
    [key: string]: string | number | boolean;
  }

  type Handler = (event: UIAnalyticsEvent, channel?: string) => void;
  type CreateAnalyticsEvent = (analyticsObject: AnalyticsObject) => UIAnalyticsEvent;

  type AnalyticsFunc<TProps> = (
    createAnalyticsEvent: CreateAnalyticsEvent,
    props: TProps
  ) => UIAnalyticsEvent | void;

  interface PropsMap<TProps> {
    [key: string]: AnalyticsObject | AnalyticsFunc<TProps>;
  }

  export interface InjectedAnalyticsProps {
    createAnalyticsEvent: CreateAnalyticsEvent;
  }

  export const withAnalyticsEvents: <TProps>(
    map?: PropsMap<TProps>
  ) => (
    component: React.ComponentType<TProps>
  ) => React.ComponentType<Omit<TProps & InjectedAnalyticsProps, keyof InjectedAnalyticsProps>>;
}
