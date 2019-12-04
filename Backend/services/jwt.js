'use strict'

var jwt = require('jwt-simple');
var moment = require ('moment');
var secret = 'deivid3013901254';

exports.createToken = function (user) {
    var payload = {
        sub : user.id,
        name : user.name,
        lastname : user.lastname,
        document : user.document,
        email : user.email,
        role : user.role,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix
    };

    return jwt.encode(payload, secret);
}

//CREATE TOKEN