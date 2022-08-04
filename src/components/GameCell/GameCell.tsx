import React from 'react';
import './GameCell.scss';

type Props = {
  cell: number
};

export const GameCell: React.FC<Props> = React.memo(({ cell }) => {
  return (
    <div className="cell">
      {cell || ''}
    </div>
  );
});
