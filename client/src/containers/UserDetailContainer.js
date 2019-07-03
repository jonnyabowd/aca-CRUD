import UserDetail from "../components/UserDetail";
import { connect } from "react-redux";
import { showUser } from '../actions'


function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showUser: (id)=> dispatch(showUser(id))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(UserDetail);