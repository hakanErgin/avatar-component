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

  // Disable error state when modal opens
  useEffect(() => {
    setError(false);
  }, [open]);

  // Handlers
  function handleChange(e, value) {
    if (value != null && value != '') {
      setError(false);
      setMemberToAdd(value);
    } else setError(true);
  }
  function handleAdd() {
    if (memberToAdd != '' && !error) {
      setTeamMembers([...teamMembers, memberToAdd]);
      setMemberToAdd('');
      handleClose();
    } else setError(true);
  }

  // Select options for adding to team
  const userOptions = MOCK_DATA.filter((user) => !teamMembers.includes(user));

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
