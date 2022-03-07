import { BLACK, WHITE } from '@constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  thumbContainer: {
    height: '40%',
  },
  posterContainer: {
    height: '100%',
    borderRadius: 16
  },
  imagePost: {
    width: '100%',
    height: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   justifyContent: 'flex-end'
  },
  textPost: {
    color: WHITE,
    fontSize: 24,
    marginBottom: 8
  },
  textThumb: {
    fontSize: 24,
    marginTop: 8,
    textAlign: 'center'
  },
  imageThumb: {
    width: '100%',
    height: '100%',
  }
});
