const EnvironmentGenerator = require( './generator' );
const MediaWikiRole = require( './roles/mediawiki' );
const PHPMyAdminRole = require( './roles/phpmyadmin' );
const GraphiteStatsdRole = require( './roles/statsd' );

function build() {
    const roles = new Map();
    roles.set( 'mediawiki', new MediaWikiRole() );
    roles.set( 'phpmyadmin', new PHPMyAdminRole() );
    roles.set( 'statsd', new GraphiteStatsdRole() );
    return generator = new EnvironmentGenerator( roles );
}

module.exports = {
    build
};
