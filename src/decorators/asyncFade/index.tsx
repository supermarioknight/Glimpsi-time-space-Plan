import { asyncComponent } from 'react-async-component';
import withFadeIn from '../withFadeIn';

const createAsyncFade = <P extends {}>(resolve: () => Promise<React.ComponentType<P>>) =>
  asyncComponent({
    resolve: () => resolve().then(module => withFadeIn(module)),
  });

export default createAsyncFade;
