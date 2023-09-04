import React from 'react';
import { render } from '@testing-library/react-native';
import { CardViewCard } from '..';

describe('<CardViewCard /> Tests', () => {
  const photo = {
    albumId: 1,
    id: 1,
    title: 'a test title',
    url: 'https://ggoel.com/vrfr.png',
    thumbnailUrl: 'https://ggoel.com/vrfr.png',
  };

  it('Should show the card view item', () => {
    const { queryByTestId } = render(
      <CardViewCard photo={photo} size="small" />,
    );

    expect(queryByTestId('card-container')).not.toBeNull();
    expect(queryByTestId('card-image')).not.toBeNull();
    expect(queryByTestId('card-title')).not.toBeNull();
    expect(queryByTestId('card-title'));
  });

  it('Should show the title of the card view item', () => {
    const { queryByText } = render(<CardViewCard photo={photo} size="small" />);

    expect(queryByText('a test title')).not.toBeNull();
  });
});
