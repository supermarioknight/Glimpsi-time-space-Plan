import moment, { Moment } from 'moment';
import { CardWithId } from '../../features/types';
import { groupOverlappingCards } from './group';

describe.only('card grouping', () => {
  let id = 0;

  const makeCard = (start: Moment, time: Moment) => {
    id += 1;

    return {
      start,
      time,
      labels: [],
      id: `${id}`,
      duration: 400,
      title: 'Fly to Japan',
      notes: '',
      location: {
        formattedAddress: 'Sydney Airport (SYD)',
        position: { lat: -33.9399228, lng: 151.1752764 },
      },
    };
  };

  it('should group cards that overlap', () => {
    const cards: CardWithId[] = [makeCard(moment(), moment())];

    const grouped = groupOverlappingCards(cards);

    expect(grouped.map(group => group.map(card => +card.id))).toEqual([[1]]);
  });
});
