const express = require('express')
const router = express.Router()
const guest = require('../controller/guest')

router.get('/',guest.getAllGuests)
//router.get('/:id',guest.getGuest)

router.post('/',guest.addGuest)

//router.put('/:id',guest.editGuest)
//router.patch('/:id',guest.editGuest)

//router.delete('/:id',user.deleteStore)

module.exports = router