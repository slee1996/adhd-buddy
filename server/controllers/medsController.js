module.exports = {
    get: (req, res) => {
        const db = req.app.get('db');

        let meds = db.get_meds().then(meds => {
            res.status(200).send(meds)
        })
        .catch(err => res.status(500).send(err))
    }
}