# Blubber

Interactive tool for creating Mediawiki development environment based on Docker and docker-compose

## Usage
Run

    docker run -it --rm -v (pwd):/app -w /app node:9 node index.js

and answer all the questions. 

**Please note:** If you answer the question for the output with an absoluet path, you need to mount that path a as volume into the docker container! Example:

    docker run -it --rm -v /src/docker-env:/config -v (pwd):/app -w /app node:9 node index.js

will enable you to put the files in `/config` and they wll appear in `/src/docker-env` on your local machine.

The generated environment files must be copied over the files from https://github.com/addshore/mediawiki-docker-dev. [Follow the instructions in the README](https://github.com/addshore/mediawiki-docker-dev/blob/master/README.md) to finish the setup.

## TODO
### MVP
- Generate all the contents for the base configuration (basically duplicating most of https://github.com/addshore/mediawiki-docker-dev ) into the mediawiki role, splitting out the statsd parts.
- Modularize `LocalSettings.php`.
- Merge README here.

### Milestone 0.1
- Add additional hooks/generators for the HTTP proxy. 
- Put generation of environment variables in questionnaire

### Milestone 0.2
- Add search role
- Add Browsertest role (chromedriver and mozilla driver services)
- ESLint for JavaScript files
- PHP liniting for PHP files

### Milestone 0.3
- Add wikibase role
- Add wikidata query service role

### Far future / Wishlist
- Configurable roles
- Improve questionnaire:
  - Add items by listing roles
  - Stop asking questions & assume defaults for all the rest
- Alternate UI: Use role names as command line params instead of questionnaire
- Alternate UI: Web UI, generates a ZIP file
