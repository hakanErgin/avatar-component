import React from 'react';
import AddUserModal from '../avatars/AddUserModal';

import AvatarGroup from '@material-ui/lab/AvatarGroup';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Tooltip, Avatar } from '@material-ui/core/';

const AvatarComponent = ({ teamMembers, setTeamMembers }) => {
  // Pop-up window state and modifiers
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  // Styles
  const useStyles = makeStyles({
    root: {
      '&:hover': {
        filter: 'brightness(85%) saturate(140%)',
        transition: '0.2s',
        zIndex: '2 !important',
        cursor: 'pointer',
      },
    },
  });
  const classes = useStyles();
  const StyledAvatarGroup = withStyles({
    root: {
      border: 'none',
    },
  })(AvatarGroup);

  // Helper functions
  function getInitials(name) {
    return name.split(' ').map((n) => n[0]);
  }
  function nameAndSurname(member) {
    return member.first_name + ' ' + member.last_name;
  }

  return (
    <div>
      <AvatarGroup>
        <StyledAvatarGroup>
          {teamMembers.map((member, index) => (
            <Tooltip key={index} title={nameAndSurname(member)}>
              {member.avatar !== null ? (
                <Avatar classes={{ root: classes.root }} src={member.avatar} />
              ) : (
                <Avatar classes={{ root: classes.root }} src={member.avatar}>
                  {getInitials(nameAndSurname(member))}
                </Avatar>
              )}
            </Tooltip>
          ))}
        </StyledAvatarGroup>
        <Tooltip title="Add new...">
          <Avatar
            aria-label="add"
            classes={{ root: classes.root }}
            onClick={openModal}
          >
            <PersonAddIcon />
          </Avatar>
        </Tooltip>
      </AvatarGroup>
      <AddUserModal
        open={modalIsOpen}
        handleClose={closeModal}
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}
      />
    </div>
  );
};

export default AvatarComponent;
