import {StyleSheet} from 'react-native';

import {BLACK} from '@constants/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 32,
    color: BLACK,
  },
  video: {
    height: 300,
    width: '90%'
  },
  button: {
    marginTop: 24
  }
});
