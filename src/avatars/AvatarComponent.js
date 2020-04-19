import React from 'react';
import AddUserModal from './AddUserModal';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const StyledAvatar = withStyles({
  root: {
    background: 'white',
  },
})(Avatar);

const StyledAvatarGroup = withStyles({
  root: {
    border: 'none',
  },
})(AvatarGroup);

const AvatarComponent = (props) => {
  const { openModal, closeModal, modalIsOpen, teamMembers, modal } = props;
  return (
    <div>
      <AvatarGroup>
        <StyledAvatarGroup>
          {teamMembers &&
            teamMembers.map((member) => (
              <StyledAvatar src={member.avatar}>
                {member.first_name}
              </StyledAvatar>
            ))}
        </StyledAvatarGroup>
        <Avatar onClick={openModal}>
          <PersonAddIcon />
        </Avatar>
      </AvatarGroup>
      {/* <AddUserModal open={modalIsOpen} handleClose={closeModal} /> */}
      {modal}
    </div>
  );
};

export default AvatarComponent;
