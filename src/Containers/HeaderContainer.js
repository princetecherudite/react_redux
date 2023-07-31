import { connect } from "react-redux";
import Header from "../Components/Header/Header";

const mapStateToProps = state =>({
    cardData:state=>state.data
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
