import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts: []
        }
    }

    // componentDidMount(){
    //     axios.get(`http://localhost:4000/api/posts/${this.props.user.user_id}`).then(res => {
    //         this.setState({posts: res.data})
    //     })
    //     .catch(err => console.log(err))
    // }

    render(){
        // const mappedPosts = this.state.posts.map((post, index) => {
        //     return (
        //         <div key={index}>
        //             <h3>{this.state.post.title}</h3>
        //             <h4>{this.state.post.author_id}</h4>
        //         </div>
        //     )
        // })

        return(
            <div id='dash'>
                <h1>Dashboard Component</h1>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(Dashboard)