import React from 'react';
import AddUserModal from './AddUserModal';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from '@material-ui/core/Avatar';
import { styled, withStyles, makeStyles } from '@material-ui/core/styles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      // backgroundColor: 'rgb(0,0,0.5)',
      transition: '0.2s',
      zIndex: '2 !important',
      cursor: 'pointer',
    },
  },
});

const StyledAvatar = withStyles({
  root: { background: 'white' },
})(Avatar);

const StyledAvatarGroup = withStyles({
  root: {
    border: 'none',
  },
})(AvatarGroup);

const AvatarComponent = (props) => {
  const classes = useStyles();
  const { openModal, teamMembers, modal } = props;
  return (
    <div>
      <AvatarGroup>
        <StyledAvatarGroup>
          {teamMembers &&
            teamMembers.map((member) => (
              <Avatar classes={{ root: classes.root }} src={member.avatar}>
                {member.first_name}
              </Avatar>
            ))}
        </StyledAvatarGroup>
        <Avatar classes={{ root: classes.root }} onClick={openModal}>
          <PersonAddIcon />
        </Avatar>
      </AvatarGroup>
      {modal}
    </div>
  );
};

export default AvatarComponent;
