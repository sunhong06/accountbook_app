import React, { useState } from 'react';

const Timer = ({ minutes, seconds }: any) => {
  return (
    <>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </>
  );
};

export default Timer;
