import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Photo } from '../../types';
import { sizeStyles, styles } from './styles';
import { truncateString } from '../../utils';

type CardViewCardProps = {
  photo: Photo;
  size: 'small' | 'medium' | 'large';
};

export const CardViewCard = React.memo(
  ({ photo, size }: CardViewCardProps) => {
    const { title, url } = photo;
    const txtTruncateSize = {
      small: 20,
      medium: 35,
      large: 50,
    };
    return (
      <View style={[styles.container, sizeStyles[size]]} testID='card-container'>
        <FastImage
          source={{ uri: url }}
          style={{
            height: sizeStyles[size].height - 50,
            width: sizeStyles[size].width,
          }}
          resizeMode={FastImage.resizeMode.cover}
          testID='card-image'
        />
        <View style={styles.txtContainer}>
          <Text style={styles.txt} testID='card-title'>
            {truncateString(title, txtTruncateSize[size])}
          </Text>
        </View>
      </View>
    );
  },
);
