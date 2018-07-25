import { connect } from 'react-redux';
import { loginActions, loginSelectors } from '../../redux';
import Home from './Home.view';

const mapStateToProps = state => ({
  isLoading: loginSelectors.isLoading(state),
  isLoggedIn: loginSelectors.isLoggedIn(state),
  serverError: loginSelectors.getServerError(state),
  token: loginSelectors.getToken(state),
});

const mapDispatchToProps = {
  login: loginActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
