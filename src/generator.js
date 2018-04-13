class EnvironmentGenerator {

    /**
     * @param {Map} availableRoles [description]
     */
    constructor( availableRoles ) {
        this.availableRoles = availableRoles
    }

    generate( config ) {
        // TODO use YAML objects
        const dockerCompose = {};
        const dockerComposeSetup = {};

        // TODO: If roles have dependencies, toggle roles that are deactiavted but depended on

        config.roles.forEach( ( role ) => {
            if ( !this.availableRoles.has( role ) ) {
                throw new Error( 'Unknown role:' + role );
            }
            this.availableRoles.modifySetup( dockerComposeSetup );
            this.availableRoles.modifyServices( dockerCompose );
            this.availableRoles.modifyFiles( dockerCompose, dockerComposeSetup );
        } );
    }

}

module.exports = EnvironmentGenerator;
