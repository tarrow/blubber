const path = require( 'path' );

const AbstractBaseRole = require( '../Base.js');

class PHPMyAdminRole extends AbstractBaseRole {
    modifyServices( dockerCompose ) {
        return this.extendObjectWithYaml( dockerCompose, path.join( __dirname, 'docker-compose.yml' ) );
    }

    modifyFiles( files, dockerCompose, dockerComposeSetup ) {
        files.set( 'config/phpmyadmin/config.user.inc.php', path.join( __dirname, 'config.user.inc.php' ) );
        return files;
    }
}

module.exports = PHPMyAdminRole
