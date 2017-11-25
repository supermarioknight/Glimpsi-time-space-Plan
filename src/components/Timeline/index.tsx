import * as React from 'react';
import styled from 'styled-components';
import EditableCard from '../EditableCard';
import { OnSave } from '../CardEditing';
import { CardWithId } from '../../features/types';
import ColorStrip from '../ColorStrip';

export interface Props {
  items: CardWithId[];
  saveCard: OnSave;
  // tslint:disable-next-line no-any
  removeCard: (id: number) => any;
}

const Root = styled.div`
  width: 400px;
  padding-left: 6px;
`;

const Timeline: React.StatelessComponent<Props> = ({
  items,
  saveCard,
  removeCard,
}) => {
  const cardGroups = items
    .sort(
      (a, b) => Date.parse(a.start.toString()) - Date.parse(b.start.toString())
    )
    .reduce<CardWithId[][]>((groups, currentItem) => {
      const previousGroup = groups[groups.length - 1];
      if (previousGroup) {
        const lastItemInGroup = previousGroup[previousGroup.length - 1];
        const difference = currentItem.start.diff(
          lastItemInGroup.start,
          'minutes'
        );
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

  return (
    <Root>
      {cardGroups.map((group, index) => {
        const groupItems = group.map(item => (
          <EditableCard
            onSave={saveCard}
            key={item.id}
            onDelete={removeCard}
            {...item}
          />
        ));

        if (groupItems.length <= 1) {
          return groupItems;
        }

        return (
          <ColorStrip appearance="vertical" key={index}>
            {groupItems}
          </ColorStrip>
        );
      })}
    </Root>
  );
};

export default Timeline;
