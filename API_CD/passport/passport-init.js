const conex = require('../conexion_bd/conex_mssql.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function () {

    passport.serializeUser(function (user, done) {
        console.log('serializing user:', user);
        done(null, user);
    });

    passport.deserializeUser(function (username, done) {
        console.log('deserializing user:', username);
        done(null,username);
    });
    
passport.use('login', new LocalStrategy({
    passReqToCallback: true
},
    function (req, username, password, done) {

        var _cParameters = [];
        _cParameters.push({ name: 'usuario', type: 'VarChar', value: username });
        _cParameters.push({ name: 'password', type: 'NVarChar', value: password });

        conex.sp_recordset(conex.mssql_conect, 'dbo.sp_sis_loginR12', _cParameters, function (data) {
            if (data[0].response == 1) {
                return done(null, data[0].usuario);
            }
            else {
                return done(null, false);
            }
        });

    }
    ));
};