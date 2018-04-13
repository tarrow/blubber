const _    = require( 'lodash' );
const fs   = require( 'fs' );
const yaml = require( 'js-yaml' );

class AbstractBaseRole {
    modifySetup( dockerComposeSetup ) {
        return dockerComposeSetup;
    }
    modifyServices( dockerCompose ) {
        return dockerCompose;
    }
    modifyFiles( files, dockerCompose, dockerComposeSetup ) {
        return files;
    }

    extendObjectWithYaml( obj, yamlPath ) {
        const config = yaml.safeLoad( fs.readFileSync( yamlPath, 'utf8' ) );
        return _.merge( obj, config )
    }
}

module.exports = AbstractBaseRole;
