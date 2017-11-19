import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { Middleware } from 'redux';
import createStore from '../../features/createStore';
import { action as storybookAction } from '@storybook/addon-actions';

// tslint:disable-next-line no-any
const storybookActionMiddleware: Middleware = () => next => (action: any) => {
  const result = next(action);
  storybookAction(`redux(${action.type})`)(action.payload);
  return result;
};

export const reduxStoriesOf = (name: string, module: NodeModule) =>
  storiesOf(name, module).addDecorator(story => {
    const store = createStore([storybookActionMiddleware]);

    return (
      <Provider store={store} key={Math.random()}>
        {story()}
      </Provider>
    );
  });
