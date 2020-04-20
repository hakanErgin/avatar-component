import React from 'react';
import AvatarComponent from './AvatarComponent.js';
import AddUserModal from './AddUserModal';

import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

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
});
