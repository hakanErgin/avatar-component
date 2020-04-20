import React from 'react';
import AvatarComponent from '../avatars/AvatarComponent';
import MOCK_DATA from '../avatars/MOCK_DATA';

export default {
  title: 'AvatarStory',
  component: AvatarComponent,
};

export const AvatarStory = () => {
  // Random array members
  const [teamMembers, setTeamMembers] = React.useState([
    MOCK_DATA[0],
    MOCK_DATA[10],
  ]);

  return (
    <div style={{ margin: '20px' }}>
      <AvatarComponent
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}
      />
    </div>
  );
};
