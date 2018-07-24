import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Home.styles';
import { Colors, Translations } from '../../utils';
import { Text, TouchableFeedback } from '../../components';

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
          <Text center style={styles.lead}>
            {Translations.getLabel('home_description')}
          </Text>

          <ActivityIndicator animating={this.props.isLoading} size="large" color={Colors.primary} />

          {this.props.token && (
            <View style={styles.success}>
              <Text white center medium>
                {Translations.getLabel('home_login_success', { token: this.props.token })}
              </Text>
            </View>
          )}

          {this.props.serverError && (
            <View style={styles.error}>
              <Text white center>
                {Translations.getLabel('home_login_error', { token: this.props.serverError })}
              </Text>
            </View>
          )}
        </View>

        <TouchableFeedback style={styles.button} onPress={this.login}>
          <Text white center bold label="home_action" />
        </TouchableFeedback>
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
