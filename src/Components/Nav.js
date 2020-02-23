import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {logout} from '../redux/userReducer'

const Nav = (props) => {
    const logout = () => {
        axios.post('http://localhost:4000/api/logout')
             .then(res => {
                 props.logout()
             })
             .catch(err => console.log(err))
    }

    return(
        <div id='nav'>
            <Link id='link' to='/dashboard' style={{ margin: '0px 10px'}} > Dashboard </Link>
            <Link id='link' to='/meds' style={{ margin: '0px 10px'}} > Meds DB </Link>
            <Link id='link' to='/profile' style={{ margin: '0px 10px'}} > Profile </Link>
            <Link id='link' onClick={logout} to='/' style={{ margin: '0px 10px'}} > Logout </Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    const {user} = state
    console.log(state.username)
    return {user};
}

export default connect(mapStateToProps, {logout})(Nav)