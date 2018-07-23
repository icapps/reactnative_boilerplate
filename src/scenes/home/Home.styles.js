import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 32,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  lead: {
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'rgb(255,45,85)',
    borderRadius: 3,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  token: {
    borderRadius: 3,
    marginTop: 10,
    backgroundColor: 'rgb(0,122,255)',
    padding: 10,
  },
  tokenText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
