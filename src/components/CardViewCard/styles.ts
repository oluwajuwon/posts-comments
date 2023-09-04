import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#c3c3c3',
    borderRadius: 10,
    marginRight: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  txtContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 40,
  },
  txt: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export const sizeStyles = StyleSheet.create({
  small: {
    height: 206,
    width: 206,
  },
  medium: {
    height: 230,
    width: 290,
  },
  large: {
    height: 230,
    width: 435,
  },
});
