import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { getAllPhotos } from '../../../store/photos/actions';
import { Posts } from '..';
import thunk from 'redux-thunk';

describe('<Posts /> Tests', () => {
  const initialState = {
    photos: { photos: [], loading: false, error: false },
    location: { location: null },
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);
  const dispatch = jest.fn();

  it('Should show the empty photos list message when there are no photos', async () => {
    dispatch(getAllPhotos());
    const { queryByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <Posts />
        </NavigationContainer>
      </Provider>,
    );
    expect(queryByTestId('photos-list')).not.toBeNull();
    expect(queryByTestId('empty-photos-list')).not.toBeNull();
  });

  it('Should show the photos list with the photos', () => {
    const initialState = {
      photos: {
        photos: [
          {
            albumId: 1,
            id: 1,
            title: 'a test title',
            url: 'https://ggoel.com/vrfr.png',
            thumbnailUrl: 'https://ggoel.com/vrfr.png',
          },
        ],
      },
      location: { location: null },
    }; 

    const store = mockStore(initialState);
    const { queryByTestId, queryByText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <Posts />
        </NavigationContainer>
      </Provider>,
    );

    expect(queryByTestId('photos-list')).not.toBeNull();
    expect(queryByText(/a test title/i)).not.toBeNull();
  });
});
