import React from 'react';

import classNames from 'classnames';

import s from './token.module.scss';

interface TokenProps {
  type: string;
  rotatePos: string;
  isRotate?: boolean;
  //   finalRotatePos?: string;
  handleRotate?: Function;
}

const Token: React.FC<TokenProps> = ({type, rotatePos, isRotate = false, handleRotate}) => {
  return (
    <div
      datatype="token"
      className={classNames(s.token, {
        [s[type]]: type,
        [s.rotateRight]: rotatePos === 'right',
        [s.rotateBottom]: rotatePos === 'bottom',
        [s.rotateLeft]: rotatePos === 'left',
        [s.rotateTop]: rotatePos === 'top',
        [s.rotateOption]: isRotate,
      })}
      onClick={e => handleRotate && handleRotate(e)}
    >
      {isRotate && (
        <svg
          className={s.rotateButton}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4.06189 13C4.02104 12.6724 4 12.3387 4 12C4 7.58172 7.58172 4 12 4C14.5006 4 16.7332 5.14727 18.2002 6.94416M19.9381 11C19.979 11.3276 20 11.6613 20 12C20 16.4183 16.4183 20 12 20C9.61061 20 7.46589 18.9525 6 17.2916M9 17H6V17.2916M18.2002 4V6.94416M18.2002 6.94416V6.99993L15.2002 7M6 20V17.2916"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default Token;
