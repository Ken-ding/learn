
import Demo from 'components/demo';
import { connect } from 'react-redux';
import {setInfo} from 'actions'

const mapStateToProps=(state)=>{
    return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      setInfo: () => {
        dispatch(setInfo("123"))
      }
    }
  }

const DemoView=connect(mapStateToProps,mapDispatchToProps)(Demo)

export default DemoView;