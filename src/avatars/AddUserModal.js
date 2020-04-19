import React, { useState, useEffect } from 'react';
import { Button, TextField, Dialog } from '@material-ui/core';
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import MOCK_DATA from '../avatars/MOCK_DATA';
import Autocomplete from '@material-ui/lab/Autocomplete';

const AddUserModal = ({ open, handleClose, teamMembers, setTeamMembers }) => {
  const [memberToAdd, setMemberToAdd] = useState([]);
  const [error, setError] = useState(false);
  const userOptions = MOCK_DATA.filter((user) => !teamMembers.includes(user));

  useEffect(() => {
    setError(false);
  }, [open]);

  function handleChange(e, value) {
    if (value != null) {
      setError(false);
      console.log(value);
      setMemberToAdd(value);
    }
  }

  function handleAdd() {
    if (memberToAdd != '' && !teamMembers.includes(memberToAdd)) {
      setTeamMembers([...teamMembers, memberToAdd]);
      setMemberToAdd('');
      handleClose();
    } else setError(true);
  }

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add People</DialogTitle>
      <DialogContent>
        <DialogContentText>Type a name</DialogContentText>
        <Autocomplete
          autoSelect={true}
          options={userOptions}
          getOptionLabel={(option) =>
            option.first_name + ' ' + option.last_name
          }
          onChange={handleChange}
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                label="Enter text"
                variant="outlined"
                error={error}
              />
            );
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserModal;
