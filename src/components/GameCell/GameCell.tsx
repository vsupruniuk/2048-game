import React from 'react';
import './GameCell.scss';
import classNames from 'classnames';

type Props = {
  cell: number
};

export const GameCell: React.FC<Props> = React.memo(({ cell }) => {
  return (
    <div className={classNames(
      'cell',
      { 'cell--2': cell === 2 },
      { 'cell--4': cell === 4 },
      { 'cell--8': cell === 8 },
      { 'cell--16': cell === 16 },
      { 'cell--32': cell === 32 },
      { 'cell--64': cell === 64 },
      { 'cell--128': cell === 128 },
      { 'cell--256': cell === 256 },
      { 'cell--512': cell === 512 },
      { 'cell--1024': cell === 1024 },
      { 'cell--2048': cell === 2048 },
    )}
    >
      {cell || ''}
    </div>
  );
});
