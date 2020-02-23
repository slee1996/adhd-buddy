const bcrypt = require('bcryptjs')

module.exports = {
    register: async(req, res) => {
        const {email, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');

        let user = await db.get_user(email);
        user = user[0];
        if(user){
            return res.status(400).send('User already exists')
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        
        let newUser = await db.register_user({email, hash});
        newUser = newUser[0];
        session.user = newUser;
        res.status(201).send(session.user);
    },

    update: async(req, res) => {
        const {username, user_id} = req.body;
        const {session} = req;
        const db = req.app.get('db');
    
        let user = await db.check_user(username);
        user = user[0];
        if(user){
            session.user = user
            return res.status(201).send(session.user);
        }

        let newUser = await db.edit_user({username, user_id});
        newUser = newUser[0];
        session.user = newUser;
        res.status(201).send(session.user);
    },

    login: async(req, res) => {
        const {email, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');

        let user = await db.get_user(email);
        user = user[0];
        if(!user){
            return res.status(400).send('Email not found')
        }
        console.log(user)

        const authenticated = bcrypt.compareSync(password, user.hash);
        
        if(authenticated){
            console.log('Authenticated')
            delete user.hash;
            session.user = user;
            res.status(202).send(session.user);
        } else {
            res.status(401).send('Incorrect Password')
        }
    },
    
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}