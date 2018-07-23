import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import * as loginActions from '../../redux/login/actions';
import styles from './Home.styles';

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
          {this.props.token && (
            <View style={styles.token}>
              <Text style={styles.tokenText}>You are now logged in. Your token: {this.props.token}</Text>
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

const mapStateToProps = state => ({
  isLoading: state.login.isLoading,
  isLoggedIn: state.login.isLoggedIn,
  serverError: state.login.serverError,
  token: state.login.token,
});

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(loginActions.login, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
