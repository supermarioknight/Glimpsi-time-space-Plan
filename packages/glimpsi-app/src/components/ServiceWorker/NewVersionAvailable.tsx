import * as React from 'react';
import { Button } from './styles';

const NewVersionAvailable: React.StatelessComponent<{}> = () => (
  <React.Fragment>
    There is a new version of glimpsi ready for you!
    <Button onClick={() => setTimeout(() => window.location.reload(), 50)}>refresh</Button>
  </React.Fragment>
);

export default NewVersionAvailable;
