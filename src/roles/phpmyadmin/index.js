const AbstractBaseRole = require( '../Base.js');

class PHPMyAdminRole extends AbstractBaseRole {
    // TODO: Remove dummy constructor
    constructor() {
        super();
        console.log( "constructing phpadmin")
    }
}

module.exports = PHPMyAdminRole
