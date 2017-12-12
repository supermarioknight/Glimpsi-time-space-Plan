import { CardWithId } from '../../features/types';
import { addTimeToDate } from '../../lib/date';

export const groupOverlappingCards = (cards: CardWithId[]) => {
  const cardGroups = cards.reduce<CardWithId[][]>((groups, currentItem) => {
    const previousGroup = groups[groups.length - 1];
    if (previousGroup) {
      const lastItemInGroup = previousGroup[previousGroup.length - 1];
      const startCombined = addTimeToDate(currentItem.start, currentItem.time);
      const endCombined = addTimeToDate(
        lastItemInGroup.start,
        lastItemInGroup.time
      );

      const difference = startCombined.diff(endCombined, 'minutes');
      const overlap = difference - lastItemInGroup.duration;
      if (overlap > 0) {
        // There is an overlap, add to the group
        previousGroup.push(currentItem);
        return groups;
      }
    }

    // no overlap/no group to compare, push new group
    groups.push([currentItem]);
    return groups;
  }, []);

  return cardGroups;
};
