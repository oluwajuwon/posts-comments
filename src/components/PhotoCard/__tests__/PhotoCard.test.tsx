import React from 'react';
import { render } from '@testing-library/react-native';
import { PhotoCard } from '..';

describe('<PhotoCard /> Tests', () => {
  const props = {
    photo: {
      albumId: 1,
      id: 1,
      title: 'a test title',
      url: 'https://ggoel.com/vrfr.png',
      thumbnailUrl: 'https://ggoel.com/vrfr.png',
    },
    onSelectPhoto: jest.fn(),
  }

  it('Should show the PhotoCard', () => {
    const { queryByTestId } = render(<PhotoCard photo={props.photo} onSelectPhoto={props.onSelectPhoto} />);

    expect(queryByTestId('photo-card-container')).not.toBeNull();
    expect(queryByTestId('photo-card-image')).not.toBeNull();
    expect(queryByTestId('photo-title-container')).not.toBeNull();
    expect(queryByTestId('photo-title')).not.toBeNull();
  });

  it('Should show the title of the photo card', () => {
    const { queryByText } = render(<PhotoCard photo={props.photo} onSelectPhoto={props.onSelectPhoto} />);

    expect(queryByText('a test title')).not.toBeNull();
  });
});
