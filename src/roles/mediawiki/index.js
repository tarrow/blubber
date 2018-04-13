const path = require( 'path' );

const AbstractBaseRole = require( '../Base.js');

class MediaWikiRole extends AbstractBaseRole {
    modifySetup( dockerComposeSetup ) {
        return this.extendObjectWithYaml( dockerComposeSetup, path.join( __dirname, 'docker-compose.setup.yml' ) );
    }
    modifyServices( dockerCompose ) {
        return this.extendObjectWithYaml( dockerCompose, path.join( __dirname, 'docker-compose.yml' ) );
    }
}

module.exports = MediaWikiRole
