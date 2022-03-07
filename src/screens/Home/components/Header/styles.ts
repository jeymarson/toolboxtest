import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  icon: {
    height: 20,
    width: 20,
    marginLeft: 8
  },
  iconReload: {
      height: 24,
      width: 24
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
