const Guest = require('../model/guest')

module.exports.getAllGuests = (req, res) => {
  const limit = Number(req.query.limit) || 0
  const sort = req.query.sort == "desc" ? -1 : 1

  Guest.find()
  //.select(['-_id'])
  .limit(limit).sort({
    id: sort
  })
    .then(guests => {
      res.json(guests)
    })
    .catch(err => console.log(err))
}

module.exports.getGuest = (req, res) => {
  const id = req.params.id
  Guest.findById(id)
    //.select(['-_id'])
    .then(guest => {
      res.json(guest)
    })
    .catch(err => console.log(err))
}



module.exports.addGuest = (req, res) => {
  //console.log("---------------->", req.body);
  if (typeof req.body == undefined) {
    res.json({
      status: "error",
      message: "data is undefined"
    })
  } else {
    const guest = new Guest({
      email: req.body.email || null,
      phone: req.body.phone || null,
      name: {
        first: req.body.address?.city || null,
        last: req.body.address?.street || null,
      },
      vaccine: req.body.vaccine || null,
    })
    guest.save()
      .then(guest => res.json(guest))
      .catch(err => res.json(err))

    //res.json({id:Guest.find().count()+1,...req.body})
  }
}