import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { Middleware } from 'redux';
import createStore from '../../state/createStore';
import { Store } from '../../state/rootReducer';
import { action as storybookAction } from '@storybook/addon-actions';

// tslint:disable-next-line no-any
const storybookActionMiddleware: Middleware = () => next => (action: any) => {
  const result = next(action);
  storybookAction(`redux(${action.type})`)(action.payload);
  return result;
};

export const reduxStoriesOf = (name: string, module: NodeModule, initialState?: Store) =>
  storiesOf(name, module).addDecorator(story => {
    const store = createStore([storybookActionMiddleware], initialState);

    return <Provider store={store}>{story()}</Provider>;
  });
