import React, { Fragment, useEffect } from 'react';
import { FlatList, Text, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import { RenderPattern, RootStackParamList } from '../../types';
import FastImage from 'react-native-fast-image';
import { CommentCard } from '../../components/CommentCard';
import { getPostComments } from '../../store/posts/actions';
import { Header } from '../../components/Header';
import { styles } from './styles';
import { AppDispatch, RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

type PostScreenRouteProp = RouteProp<RootStackParamList, 'Post'>;
const { width } = Dimensions.get('screen');

export const Post = React.memo(() => {
  const { comments, error, loading } = useSelector(
    (state: RootState) => state.posts,
  );
  const dispatch = useDispatch<AppDispatch>();
  const route = useRoute<PostScreenRouteProp>();
  const navigation = useNavigation();
  const { params } = route;
  const photo = params?.photo;

  useEffect(() => {
    const postId = photo?.id;
    if (postId) {
      dispatch(getPostComments(postId));
    }
  }, [params?.photo]);

  const renderPattern: RenderPattern = {
    image: (
      <Fragment>
        <FastImage
          source={{ uri: photo?.url }}
          style={{ height: width, width }}
          testID="post-image"
        />
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>{photo?.title}</Text>
        </View>
      </Fragment>
    ),
    comments: !loading ? (
      <FlatList
        data={comments}
        renderItem={({ item }) => <CommentCard comment={item} />}
        style={styles.comments}
        testID="comments-list"
        keyExtractor={item => `${item.id}`}
      />
    ) : null,
  };

  const renderOrder = ['image', 'comments'];

  return (
    <SafeAreaView>
      <Header title={photo?.title} hasBackBtn navigation={navigation} />
      <View>
        <FlatList
          data={renderOrder}
          renderItem={({ item }) => renderPattern[item]}
          keyExtractor={(_, index) => `${index}`}
          testID="post-container"
        />
      </View>
    </SafeAreaView>
  );
});
