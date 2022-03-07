import {StyleSheet} from 'react-native';

import {BLACK, GRAY, LIGHT_GRAY, WHITE} from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LIGHT_GRAY,
  },
  content: {
    borderWidth: 1,
    borderColor: GRAY,
    height: 250,
    backgroundColor: WHITE,
    paddingVertical: 24,
    paddingHorizontal: 16,
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16
  },
  errorText: {
    color: BLACK,
    fontSize: 16,
    marginBottom: 16,
  },
});
