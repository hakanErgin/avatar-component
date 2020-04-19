import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MOCK_DATA from '../avatars/MOCK_DATA.json';
import Autocomplete from '@material-ui/lab/Autocomplete';

const AddUserModal = ({ open, handleClose, setTeamMembers }) => {
  const [memberToAdd, setMemberToAdd] = React.useState([]);

  function handleChange(e) {
    console.log('event', e.target);

    setMemberToAdd(e.target.value);
  }

  function handleAdd() {
    setTeamMembers(memberToAdd);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      {/* <form onSubmit={}> */}
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>Add new member to your team</DialogContentText>
        <Autocomplete
          autoSelect={true}
          options={MOCK_DATA}
          getOptionLabel={(option) =>
            option.first_name + ' ' + option.last_name
          }
          getOptionSelected={(option, event) => console.log(event)}
          onChange={handleChange}
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                label="Combo box"
                variant="outlined"
                onChange={handleChange}
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
      {/* </form> */}
    </Dialog>
  );
};

export default AddUserModal;
