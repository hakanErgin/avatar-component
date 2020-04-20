import React from 'react';
import AvatarComponent from './AvatarComponent.js';
import AddUserModal from './AddUserModal';

import '@testing-library/jest-dom/extend-expect';
import {
  render,
  fireEvent,
  RenderOptions,
  getByRole,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<AvatarComponent/>', () => {
  it('renders the modal when modalIsOpen is true', async () => {
    const { getByRole } = render(
      <AddUserModal open teamMembers={['test team member']} />
    );

    const modalElement = getByRole('dialog');
    expect(modalElement).toBeInTheDocument();
  });

  it('renders the modal when clicking on the add button', async () => {
    const { getByRole, getByLabelText } = render(
      <AvatarComponent teamMembers={['test team member']} />
    );

    const buttonElement = getByLabelText('add');
    fireEvent.click(buttonElement);

    const modalElement = getByRole('dialog');
    expect(modalElement).toBeInTheDocument();
  });

  it('closes the modal when clicking on the cancel button', async () => {
    const handleClose = jest.fn();
    const { getByText, getByLabelText, getByRole } = render(
      <AddUserModal
        open={true}
        handleClose={handleClose}
        teamMembers={['test team member']}
      />
    );

    const closeButtonElement = getByText('Cancel');
    userEvent.click(closeButtonElement);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
