const axios = require('axios')
exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/complaints')
    .then(function(response){
        console.log(response)
        res.render('index', { complaints : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
}
exports.add_complaint = (req, res) => {
    res.render('add_complaint')
}
exports.update_complaint = (req, res) => {
    axios.get('http://localhost:3000/complaints',{params: {id: req.query.id}})
    .then(function(complaintdata){
        res.render('update_complaint', {complaint: complaintdata.data} )
    })
    .catch(err => {
        res.send(err)
    })
}
