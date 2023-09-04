import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RenderPattern } from '../../types';
import { CardViewCard } from '../../components/CardViewCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Fragment } from 'react';

export const Cards = () => {
  const photos = useSelector((state: RootState) => state.photos.photos);
  const extractedPortion = photos.slice(0, 9);
  const navigation = useNavigation();
  const renderPattern: RenderPattern = {
    firstRow: (
      <Fragment>
        <Text style={styles.cardSectionHeader}>Small Cards</Text>
        <FlatList
          data={extractedPortion}
          renderItem={({ item }) => <CardViewCard photo={item} size="small" />}
          horizontal={true}
          style={styles.listContainer}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
        />
      </Fragment>
    ),
    secondRow: (
      <Fragment>
        <Text style={styles.cardSectionHeader}>Medium Cards</Text>
        <FlatList
          data={extractedPortion}
          renderItem={({ item }) => <CardViewCard photo={item} size="medium" />}
          horizontal={true}
          style={styles.listContainer}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
        />
      </Fragment>
    ),
    thirdRow: (
      <Fragment>
        <Text style={styles.cardSectionHeader}>Large Cards</Text>
        <FlatList
          data={extractedPortion}
          renderItem={({ item }) => <CardViewCard photo={item} size="large" />}
          horizontal={true}
          style={styles.listContainer}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
        />
      </Fragment>
    ),
  };

  const renderOrder = ['firstRow', 'secondRow', 'thirdRow'];
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Cards" hasBackBtn={false} navigation={navigation} />
      <View>
        <FlatList
          data={renderOrder}
          renderItem={({ item }) => renderPattern[item]}
          keyExtractor={(_, index) => `${index}`}
        />
      </View>
    </SafeAreaView>
  );
};
