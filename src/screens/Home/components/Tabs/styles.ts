import {StyleSheet, ViewStyle} from 'react-native';

import {BLACK, GRAY, WHITE} from '@constants/colors';

const tab: ViewStyle = {
  backgroundColor: WHITE,
  borderRadius: 16,
  height: 46,
  marginRight: 16,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 16,
  },
  tab: {
    ...tab,
  },
  selectedTab: {
    ...tab,
    borderColor: BLACK,
    borderWidth: 1,
  },
  label: {
    fontSize: 16,
    color: GRAY,
  },
  selectedLabel: {
    fontSize: 16,
    color: BLACK,
  },
});
