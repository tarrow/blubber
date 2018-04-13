const EnvironmentGenerator = require( './generator' );
const MediaWikiRole = require( './roles/mediawiki' );
const PHPMyAdminRole = require( './roles/phpmyadmin' );

function build() {
    const roles = new Map();
    roles.set( 'mediawiki', new MediaWikiRole() );
    roles.set( 'phpmyadmin', new PHPMyAdminRole() );
    return generator = new EnvironmentGenerator( roles );
}

module.exports = {
    build
};
