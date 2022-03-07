import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    flex: 1
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    marginBottom: 32,
  },
});
