import React from 'react';
import AvatarComponent from '../avatars/AvatarComponent';
import AddUserModal from '../avatars/AddUserModal';
import MOCK_DATA from '../avatars/MOCK_DATA.json';

export default {
  title: 'AvatarStory',
  component: AvatarComponent,
};

export const AvatarStory = () => {
  const [teamMembers, setTeamMembers] = React.useState([
    MOCK_DATA[0],
    MOCK_DATA[19],
  ]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const modal = (
    <AddUserModal
      open={modalIsOpen}
      handleClose={closeModal}
      teamMembers={teamMembers}
      setTeamMembers={setTeamMembers}
    />
  );

  return (
    <div style={{ margin: '20px' }}>
      <AvatarComponent
        openModal={openModal}
        modalIsOpen={modalIsOpen}
        teamMembers={teamMembers}
        modal={modal}
      />
    </div>
  );
};
