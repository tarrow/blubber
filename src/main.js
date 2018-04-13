const EnvironmentGenerator = require( './generator' );
const MediaWikiRole = require( './roles/mediawiki' );
const PHPMyAdminRole = require( './roles/phpmyadmin' );

const roles = new Map();
roles.set( 'mediawiki', new MediaWikiRole() );
roles.set( 'phpmyadmin', new PHPMyAdminRole() );
const generator = new EnvironmentGenerator( roles );

generator.generate( {
    roles: {
        mediawiki: true,
        phpmyadmin: true
    }
} )
