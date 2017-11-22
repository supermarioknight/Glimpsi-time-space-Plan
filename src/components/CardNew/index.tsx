import React from 'react';
import styled from 'styled-components';
import Map from '../Map';
import CardEditing, { Props as EditingProps } from '../CardEditing';

const Root = styled.div`
  display: flex;
  align-items: center;
`;

const MapContainer = styled.div`
  height: 250px;
  width: 250px;
`;

// tslint:disable-next-line
interface Props extends EditingProps {}

const NewCard = (props: Props) => (
  <Root>
    <CardEditing
      {...props}
      renderLeft={values => (
        <MapContainer key="map">
          <Map markers={[values.location].filter(Boolean)} />
        </MapContainer>
      )}
    />
  </Root>
);

export default NewCard;
