import React, {useState} from 'react';
import classNames from 'classnames';

import s from './dragAndDrop.module.scss';

type PropsType = {
  children: React.ReactNode;
};

export const DragAndDrop = ({children}: PropsType) => {
  const [hover, setHover] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const dragStart = () => {
    setHover(false);
    setDragActive(true);
  };

  const dragEnd = () => {
    setHover(false);
    setDragActive(false);
  };

  const onDragOver = () => {
    setHover(false);
    setDragActive(false);
  };

  return (
    <div
      className={classNames(s.dndToken, {[s.hover]: hover})}
      style={{cursor: dragActive ? 'drag' : 'dragging'}}
      draggable
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onDragOver={() => onDragOver()}
      onDragEnd={dragEnd}
      onDragStart={dragStart}
    >
      {children}
    </div>
  );
};
