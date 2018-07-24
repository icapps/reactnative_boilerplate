import { connect } from 'react-redux';
import { loginActions } from '../../redux';
import Home from './Home.view';

const mapStateToProps = state => ({
  isLoading: state.login.isLoading,
  isLoggedIn: state.login.isLoggedIn,
  serverError: state.login.serverError,
  token: state.login.token,
});

const mapDispatchToProps = {
  login: loginActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
