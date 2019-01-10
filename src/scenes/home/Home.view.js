import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';

import StorybookUI from '../../../storybook';
import { Colors, Translations } from '../../utils';
import { Text, TouchableFeedback } from '../../components';

import styles from './Home.styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyBooksLoaded: false,
    };
  }

  login = () => {
    this.props.login({
      email: 'reactnative@icapps.com',
      password: 'reactnative',
    });
  };

  renderStorybook = () => { this.setState({ storyBooksLoaded: true }); }

  render() {
    if (this.state.storyBooksLoaded) {
      return <StorybookUI />;
    }
    return (

      < View style={styles.container} >
        <View>
          <Text center style={styles.lead} label='home_description' />

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

        <TouchableFeedback style={styles.button} onPress={this.renderStorybook}>
          <Text white center bold label="storybook_action" />
        </TouchableFeedback>
      </View >
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
