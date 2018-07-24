import { StyleSheet } from 'react-native';
import { Colors } from '../../utils'

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
    paddingVertical: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: Colors.primary,
    borderRadius: 3,
    padding: 10,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
  },
  success: {
    borderRadius: 3,
    backgroundColor: Colors.success,
    padding: 10,
  },
  error: {
    borderRadius: 3,
    backgroundColor: Colors.error,
    padding: 10,
  },
  tokenText: {
    color: Colors.white,
    textAlign: 'center',
  },
});

export default styles;
