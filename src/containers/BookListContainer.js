import {connect} from 'react-redux';
import BookList from "../components/BookList";


const mapStateToProps=(state,props)=>{
    return state.book;
};
export default connect(mapStateToProps)(BookList);