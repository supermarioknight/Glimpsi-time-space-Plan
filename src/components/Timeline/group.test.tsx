import { CardWithId } from '../../features/types';
import { groupOverlappingCards } from './group';

describe('card grouping', () => {
  it('should group any overlapping cards', () => {
    const cards: CardWithId[] = [{}];

    const grouped = groupOverlappingCards(cards);

    expect(cards.map(card => card.id)).toEqual([]);
  });
});
