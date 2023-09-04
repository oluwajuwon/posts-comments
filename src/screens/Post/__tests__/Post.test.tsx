import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { getAllPhotos } from '../../../store/photos/actions';
import { Post } from '..';
import thunk from 'redux-thunk';

const mockedNavigation = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigation,
    }),
    useRoute: () => ({
      params: {
        photo: {
          albumId: 1,
          id: 1,
          title: 'a test title',
          url: 'https://ggoel.com/vrfr.png',
          thumbnailUrl: 'https://ggoel.com/vrfr.png',
        },
      },
    }),
  };
});

describe('<Post /> Tests', () => {
  const initialState = {
    photos: { photos: [], loading: false, error: false },
    location: { location: null },
    posts: {
      comments: [],
    },
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);
  const dispatch = jest.fn();

  it('Should show the post image', async () => {
    dispatch(getAllPhotos());
    const { queryByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <Post />
        </NavigationContainer>
      </Provider>,
    );
    expect(queryByTestId('post-container')).not.toBeNull();
    expect(queryByTestId('post-image')).not.toBeNull();
  });

  it('Should show the post comments', () => {
    const initialState = {
      photos: {
        photos: [],
      },
      location: { location: null },
      posts: {
        comments: [
          {
            body: 'nice comment body',
            email: 'Veronica_Goodwin@timmothy.net',
            id: 11,
            name: 'a good name',
            postId: 3,
          },
        ],
      },
    };

    const store = mockStore(initialState);
    const { queryByTestId, queryByText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <Post />
        </NavigationContainer>
      </Provider>,
    );

    expect(queryByTestId('post-image')).not.toBeNull();
    expect(queryByText(/nice comment body/i)).not.toBeNull();
    expect(queryByText(/Veronica_Goodwin@timmothy.net/i)).not.toBeNull();
    expect(queryByText(/a good name/i)).not.toBeNull();
  });
});
