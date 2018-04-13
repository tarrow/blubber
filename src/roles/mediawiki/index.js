const AbstractBaseRole = require( '../Base.js');

class MediaWikiRole extends AbstractBaseRole {
    // TODO: Remove dummy constructor
    constructor() {
        super();
        console.log( "constructing MW")
    }
}

module.exports = MediaWikiRole
