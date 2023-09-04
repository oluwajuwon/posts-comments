import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Header } from '..';

describe('<Header /> Tests', () => {
  const props = {
    title: 'nice header',
    hasBackBtn: true,
    navigation: {
      navigate: jest.fn(),
      goBack: jest.fn(),
      canGoBack: jest.fn().mockReturnValue(true),
    },
  };

  it('Should show the Header', () => {
    const { queryByTestId } = render(
      <Header
        title={props.title}
        hasBackBtn={props.hasBackBtn}
        navigation={props.navigation}
      />,
    );

    expect(queryByTestId('header-container')).not.toBeNull();
    expect(queryByTestId('header-left-container')).not.toBeNull();
    expect(queryByTestId('header-title')).not.toBeNull();
    expect(queryByTestId('header-back-btn')).not.toBeNull();
  });

  it('Should click the back button and call the navigation go back function', () => {
    const { queryByTestId } = render(
      <Header
        title={props.title}
        hasBackBtn={props.hasBackBtn}
        navigation={props.navigation}
      />,
    );

    expect(queryByTestId('header-back-btn')).not.toBeNull();
    const backBtn = queryByTestId('header-back-btn');
    if (backBtn) fireEvent.press(backBtn);
    expect(props.navigation.goBack).toHaveBeenCalled();
  });
});
