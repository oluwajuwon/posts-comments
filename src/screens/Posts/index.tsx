import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Photo, RootStackParamList } from '../../types';
import { PhotoCard } from '../../components/PhotoCard';
import { Header } from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { getAllPhotos } from '../../store/photos/actions';
import { styles } from './styles';

type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Post'
>;

export const Posts = React.memo(() => {
  const { photos, error, loading } = useSelector(
    (state: RootState) => state.photos,
  );
  const { location } = useSelector((state: RootState) => state.location);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<ScreenNavigationProp>();
  const userLocation = location?.coords;

  useEffect(() => {
    dispatch(getAllPhotos());
  }, []);

  const handleSelectPhoto = (photo: Photo) => {
    navigation.navigate('Post', { photo });
  };

  const handleRefresh = () => {
    dispatch(getAllPhotos());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        hasBackBtn={false}
        navigation={{}}
        extraContent={
          <View>
            <Text style={styles.coords}>
              Lat: {userLocation?.latitude}, Long: {userLocation?.longitude}
            </Text>
          </View>
        }
        containerStyles={styles.headerContainer}
      />
      <View>
        <FlatList
          data={photos}
          renderItem={({ item }) => (
            <PhotoCard photo={item} onSelectPhoto={handleSelectPhoto} />
          )}
          keyExtractor={(item, index) => `${item.id}`}
          windowSize={1}
          contentContainerStyle={{ paddingBottom: 40 }}
          ListEmptyComponent={
            !loading ? (
              <View testID="empty-photos-list" style={styles.empty}>
                <Text>No Photos</Text>
              </View>
            ) : null
          }
          refreshControl={
            <RefreshControl onRefresh={handleRefresh} refreshing={loading} />
          }
          testID="photos-list"
        />
      </View>
    </SafeAreaView>
  );
});
