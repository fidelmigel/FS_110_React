import { useState } from 'react';

const Vote = () => {
  const [voteData, setVoteData] = useState({
    windows: 0,
    linux: 0,
    macOS: 0,
  });

  // DRY
  // Dont repeat yourself
  const handleClickByOption = option => {
    // switch (option) {
    //   case 'windows':
    //     return setVoteData(prev => ({ ...prev, windows: prev.windows + 1 }));
    //   case 'linux':
    //     return setVoteData(prev => ({ ...prev, linux: prev.linux + 1 }));
    //   case 'macOS':
    //     return setVoteData(prev => ({ ...prev, macOS: prev.macOS + 1 }));
    //   default:
    //     break;
    // }

    setVoteData(prev => ({ ...prev, [option]: prev[option] + 1 }));
  };
  return (
    <div>
      <ul>
        <li>windows: {voteData.windows}</li>
        <li>linux: {voteData.linux}</li>
        <li>macOS: {voteData.macOS}</li>
      </ul>
      <div>
        <button onClick={() => handleClickByOption('windows')}>windows</button>
        <button onClick={() => handleClickByOption('linux')}>linux</button>
        <button onClick={() => handleClickByOption('macOS')}>macOS</button>
      </div>
    </div>
  );
};
export default Vote;
