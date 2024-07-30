import React, {useState, useEffect} from 'react';

import Token from '@/_components/token/token';

import {DragAndDrop} from '../dragAndDrop/dragAndDrop';

import s from './board.module.scss';

import {levelsInstructions} from './levelsInstructions';

interface Cell {
  x: number;
  y: number;
}

interface BoardProps {
  level: number;
}

interface LevelsInstructions {
  level: number;
  difficulty: string;
  tokens: {
    type: string;
    x: number;
    y: number;
    isFixed: boolean;
    rotatePos: string;
    isSetOnBoard?: boolean;
  }[];
}

const Board: React.FC<BoardProps> = ({level}) => {
  const [levelData, setLevelData] = useState<LevelsInstructions>(levelsInstructions[level - 1]);

  useEffect(() => {
    setLevelData(levelsInstructions[level - 1]);
  }, [level]);

  // Render the board grid
  return (
    <div className={s.boardWrapper}>
      <div className={s.board}>
        {Array.from({length: 5}).map((_, rowIndex) => (
          <div key={rowIndex} className={s.row}>
            {Array.from({length: 5}).map((_, colIndex) => {
              const cell: Cell = {x: colIndex, y: rowIndex};
              return (
                <div key={colIndex} className={s.cell} data-x={cell.x} data-y={cell.y}>
                  {levelData.tokens.map((t, tokenKey) => {
                    if (t.x === colIndex && t.y === rowIndex && t.isFixed) {
                      return <Token key={tokenKey} type={t.type} rotatePos={t.rotatePos} />;
                    }
                  })}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className={s.waitingRoom}>
        {levelData.tokens.map((t, key) => {
          if (!t.isFixed) {
            return (
              <DragAndDrop key={key}>
                <Token type={t.type} rotatePos={t.rotatePos} />
              </DragAndDrop>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Board;
