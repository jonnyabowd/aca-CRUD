import SignUp from "../components/SignUp";
import { connect } from "react-redux";
import { createUser } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    createUser: user => dispatch(createUser(user))
  };
}

export default connect(null,mapDispatchToProps)(SignUp);