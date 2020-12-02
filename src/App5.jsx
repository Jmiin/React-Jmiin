import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addUser } from './redux/actions/user'
import User from './redux/components/user'

 export default class App5 extends PureComponent {
    render() {
        return (
            <div>
                {this.props.addUser}
                <h1>APP 5</h1>
                <User />
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     console.log(state);
//     return { 
//         user: state.user 
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addUser: () =>  {dispatch(addUser())}
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App5)