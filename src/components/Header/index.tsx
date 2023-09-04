import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Arrow from '../../assets/icons/left-arrow.png';
import { truncateString } from '../../utils';

type HeaderProps = {
  title?: string;
  extraContent?: any;
  titleStyles?: any;
  hasBackBtn: boolean;
  navigation: any;
  containerStyles?: any;
};

export const Header = ({
  title,
  extraContent,
  titleStyles,
  hasBackBtn,
  navigation,
  containerStyles,
  ...props
}: HeaderProps) => {
  const handleGoBack = () => {
    if (navigation && navigation.canGoBack()) navigation && navigation.goBack();
  };

  return (
    <View style={[styles.container, containerStyles]} testID="header-container">
      <View style={styles.leftContainer} testID="header-left-container">
        {hasBackBtn && (
          <TouchableOpacity
            hitSlop={{ top: 30, right: 30, left: 30, bottom: 30 }}
            onPress={handleGoBack}
            testID="header-back-btn">
            <Image source={Arrow} style={{ height: 18, width: 18 }} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.centerContainer}>
        {title && (
          <Text style={[styles.title, titleStyles]} testID="header-title">
            {truncateString(title, 30)}
          </Text>
        )}
      </View>
      <View style={styles.rightContainer} testID="header-extra-container">
        {extraContent}
      </View>
    </View>
  );
};
