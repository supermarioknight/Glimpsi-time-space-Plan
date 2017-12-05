import { CardWithId } from '../../features/types';

export const groupOverlappingCards = (cards: CardWithId[]) => {
  const cardGroups = cards.reduce<CardWithId[][]>((groups, currentItem) => {
    const previousGroup = groups[groups.length - 1];
    if (previousGroup) {
      const lastItemInGroup = previousGroup[previousGroup.length - 1];
      const difference = currentItem.start.diff(lastItemInGroup.start);
      const overlap = lastItemInGroup.duration - difference;
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
