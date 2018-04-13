const path = require( 'path' );

const AbstractBaseRole = require( '../Base.js');

class StatsdRole extends AbstractBaseRole {
    modifyServices( dockerCompose ) {
        return this.extendObjectWithYaml( dockerCompose, path.join( __dirname, 'docker-compose.yml' ) );
    }

    // TODO add PHP include file for LocalSettings 
}

module.exports = StatsdRole
