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
    <MapContainer>
      <Map markers={[{ position: { lat: -33.9399228, lng: 151.1752764 } }]} />
    </MapContainer>

    <CardEditing {...props} />
  </Root>
);

export default NewCard;
