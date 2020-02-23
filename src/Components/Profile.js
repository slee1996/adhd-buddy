import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

const Profile = (props) => {
    const user = useSelector(state => state.user)
    const state = useSelector(state => state)

    const [input, setInput] = useState(false)
    const [editing, setEditing] = useState(false)

    const [name, setName] = useState(user.username)

    const editUser = async() => {
        axios.put('http://localhost:4000/api/update', {username: name, user_id: user.user_id})
        .catch(err => console.log(err))
    }

    const dash = <div id='profile'>
                    <h1 id='profile-heading'> Profile </h1>
                    <div id='subfield'>
                        <h1>Username</h1>
                        <h2>{ user.username ? name : <>kdot</>         }</h2>
                        <button onClick={() => {setEditing(true)} }>Edit Username</button>
                    </div>
                    <div id='subfield'>
                        <h1>Email Address</h1>
                        <h2>{ user.email ? user.email : <>kendrick@tde.com</>   }</h2>
                        <button onClick={() => {setEditing(true)} }>Edit Email</button>
                    </div>
                    <div id='subfield'>
                        <h1>Phone Number</h1>
                        <h2>{ user.phone_num ? user.phone_num : <>123456789</>  }</h2>
                        <button onClick={() => {setEditing(true)} }>Edit Phone</button>
                    </div>
                </div>

    const edit = <div id='profile'>
                    <h1>Username</h1>
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                    <button onClick={() => {
                        editUser()
                        setEditing(false) } }> 
                        Save 
                    </button>
                    <h1>Email Address</h1>
                    <h2>{ user.email ? user.email : <>kendrick@tde.com</>   }</h2>
                    <h1>Phone Number</h1>
                    <h2>{ user.phone_num ? user.phone_num : <>123456789</>  }</h2>
                    
                </div>

    return(
        console.log(user),
        
        editing ?
        edit
        : dash
    )
}

export default Profile

// const mapStateToProps = (reduxState) => {
//     return reduxState;
// }

// export default connect(mapStateToProps)(Profile)

// componentDidMount(){
    //     axios.get(`http://localhost:4000/api/posts/${this.props.user.user_id}`).then(res => {
    //         this.setState({posts: res.data})
    //     })
    //     .catch(err => console.log(err))
    // }

    
    
    // const mappedPosts = this.state.posts.map((post, index) => {
    //     return (
    //         <div key={index}>
    //             <h3>{this.state.post.title}</h3>
    //             <h4>{this.state.post.author_id}</h4>
    //         </div>
    //     )
    // })