import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Dimensions, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Photo } from '../../types';
import { styles } from './styles';

type PhotoCardProps = {
  photo: Photo;
  onSelectPhoto: (photo: Photo) => void;
};

const { width } = Dimensions.get('screen');

export const PhotoCard = React.memo(
  ({ photo, onSelectPhoto, ...props }: PhotoCardProps) => {
    const { url, title } = photo;

    const handleSelectPhoto = () => {
      onSelectPhoto(photo);
    };

    return (
      <TouchableOpacity onPress={handleSelectPhoto} testID="photo-card-container" style={styles.container}>
        <FastImage
          source={{ uri: url }}
          style={[{ height: width, width }, styles.img]}
          testID="photo-card-image"
        />
        <View style={styles.txtContainer} testID="photo-title-container">
          <Text style={styles.txt} testID="photo-title">{title}</Text>
        </View>
      </TouchableOpacity>
    );
  },
);
