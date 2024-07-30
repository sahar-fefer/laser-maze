'use client';

import {useState} from 'react';

import Board from '@/_components/board/board';

import s from './page.module.scss';

export default function Home() {
  const [level, setLevel] = useState<number>(1);

  const isWin = () => {
    setLevel(level + 1);
  };

  return (
    <main className={s.main}>
      <Board level={level} />
      <button onClick={isWin}></button>
    </main>
  );
}
