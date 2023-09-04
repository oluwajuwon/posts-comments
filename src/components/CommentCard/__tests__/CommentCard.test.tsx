import React from 'react';
import { render } from '@testing-library/react-native';
import { CommentCard } from '..';

describe('<CommentCard /> Tests', () => {
  const comment = {
    postId: 1,
    id: 1,
    name: 'john doe',
    email: 'doe@mail.com',
    body: 'a nice comment',
  };

  it('Should show the CommentCard', () => {
    const { queryByTestId } = render(<CommentCard comment={comment} />);

    expect(queryByTestId('comment-container')).not.toBeNull();
    expect(queryByTestId('comment-name')).not.toBeNull();
    expect(queryByTestId('comment-email')).not.toBeNull();
    expect(queryByTestId('comment-body')).not.toBeNull();
  });

  it('Should show the title of the card view item', () => {
    const { queryByText } = render(<CommentCard comment={comment} />);

    expect(queryByText('john doe')).not.toBeNull();
    expect(queryByText('doe@mail.com')).not.toBeNull();
    expect(queryByText('a nice comment')).not.toBeNull();
  });
});
