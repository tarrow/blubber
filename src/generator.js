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
        let { dockerComposeSetup, dockerCompose, files } = this.init();

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

        mkdirp( destinationRoot, () => {
            fs.writeFileSync(
                path.join( destinationRoot, 'docker-compose.setup.yml' ),
                yaml.safeDump( dockerComposeSetup )
            );
            fs.writeFileSync(
                path.join( destinationRoot, 'docker-compose.yml' ),
                yaml.safeDump( dockerCompose )
            );
        } );

        files.forEach( ( src, dest ) => {
            const finalDestination = path.join( destinationRoot, dest );
            mkdirp( path.dirname( finalDestination ), () => {
                fs.copyFileSync( src, finalDestination );
            } );
        } )

    }

    init() {
        const mediawiki = this.availableRoles.get( 'mediawiki' );
        const dockerComposeSetup = mediawiki.modifySetup( {} );
        const dockerCompose = mediawiki.modifyServices( {} );
        const files = new Map();
        mediawiki.modifyFiles( files, dockerCompose, dockerComposeSetup );
        return { dockerComposeSetup, dockerCompose, files };
    }

}

module.exports = EnvironmentGenerator;
