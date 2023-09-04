import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Comment } from '../../types';
import { styles } from './styles';

type CommentCardProps = {
  comment: Comment;
};

export const CommentCard = ({ comment, ...props }: CommentCardProps) => {
  const { name, body, email } = comment;

  if (!comment) return;
  return (
    <View style={styles.container} testID="comment-container">
      <Text style={styles.name} testID="comment-name">
        {name}
      </Text>
      <Text style={styles.email} testID="comment-email">
        {email}
      </Text>
      <Text style={styles.body} testID="comment-body">
        {body}
      </Text>
    </View>
  );
};
