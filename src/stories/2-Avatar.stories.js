import React from 'react';
import AvatarComponent from '../avatars/AvatarComponent';
import MOCK_DATA from '../avatars/MOCK_DATA.json';
import AddUserModal from '../avatars/AddUserModal';

export default {
  title: 'AvatarStory',
  component: AvatarComponent,
};

export const AvatarStory = () => {
  const [teamMembers, setTeamMembers] = React.useState([]);
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
      setTeamMembers={setTeamMembers}
    />
  );

  return (
    <AvatarComponent
      openModal={openModal}
      modalIsOpen={modalIsOpen}
      teamMembers={teamMembers}
      modal={modal}
    />
  );
};
