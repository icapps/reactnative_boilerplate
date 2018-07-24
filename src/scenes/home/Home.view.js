import React from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Home.styles';
import { Colors } from '../../utils';

class Home extends React.Component {
  login = () => {
    this.props.login({
      email: 'reactnative@icapps.com',
      password: 'reactnative',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.lead}>A simple react native boilerplate with a login action.</Text>
          <ActivityIndicator animating={this.props.isLoading} size="large" color={Colors.primary} />
          {this.props.token && (
            <View style={styles.success}>
              <Text style={styles.tokenText}>You are now logged in. Your token: {this.props.token}</Text>
            </View>
          )}
          {this.props.serverError && (
            <View style={styles.error}>
              <Text style={styles.tokenText}>There went something wrong: {this.props.serverError}</Text>
            </View>
          )}

        </View>
        <TouchableOpacity style={styles.button} onPress={this.login}>
          <Text style={styles.buttonText}>Fire a login action!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Home.propTypes = {
  login: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  serverError: PropTypes.string,
  token: PropTypes.string,
};

Home.defaultProps = {
  serverError: null,
  token: null,
};


export default Home;
