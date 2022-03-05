import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%'
  },
  title: {
    fontSize: 60,
    lineHeight: 80,
    marginBottom: 100,
    marginTop: 150
  },
  signInButton: {
    marginBottom: 24,
  },
  footer: {
    position: 'absolute',
    bottom: 50
  },
});
