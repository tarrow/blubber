const yaml = require( 'js-yaml' );
const fs   = require( 'fs' );
const path = require( 'path' );
const mkdirp = require( 'mkdirp' );

class EnvironmentGenerator {

    /**
     * @param {Map} availableRoles [description]
     */
    constructor( availableRoles ) {
        this.availableRoles = availableRoles
    }

    generate( config ) {
        let dockerCompose = {};
        let dockerComposeSetup = {};
        let files = new Map();

        // TODO: If roles have dependencies, toggle roles that are deactivated but depended on

        for ( let role of Object.keys( config.roles ) ) {
            if ( !config.roles[ role ] ) {
                continue;
            }
            if ( !this.availableRoles.has( role ) ) {
                throw new Error( 'Unknown role:' + role );
            }
            let currentRole = this.availableRoles.get( role );
            dockerComposeSetup = currentRole.modifySetup( dockerComposeSetup );
            dockerCompose = currentRole.modifyServices( dockerCompose );
            currentRole.modifyFiles( files, dockerCompose, dockerComposeSetup );
        }

        const destinationRoot = config.outputDir || path.dirname( __dirname );

        fs.writeFileSync(
            path.join( destinationRoot, 'docker-compose.setup.yml' ),
            yaml.safeDump( dockerComposeSetup )
        );
        fs.writeFileSync(
            path.join( destinationRoot, 'docker-compose.setup.yml' ),
            yaml.safeDump( dockerCompose )
        );
        files.forEach( ( src, dest ) => {
            const finalDestination = path.join( destinationRoot, dest );
            console.log( "copying", src, finalDestination );
            mkdirp( path.dirname( finalDestination ), () => {
                fs.copyFileSync( src, finalDestination );
            } );
        } )

    }

}

module.exports = EnvironmentGenerator;
