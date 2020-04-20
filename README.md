Avatar.stories component

To run: npm run storybook

AvatarComponent renders a list of team members from the mocked database (a JSON file). It initializes with two members.

The JSON file has 20 users, half of them has an avatar image. When the component renders members list, it either shows the avatars or the initials of the member name if there is no image.

We are able to add users from the provided users list to the team, using AddUserModal component.
