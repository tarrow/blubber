# Blubber

Generate Docker development environments for Mediawiki

## Usage
Run

    docker run -it --rm -v (pwd):/app -w /app node:9 node index.js

and answer all the questions.

Copy the generated environment files over the files copied from https://github.com/addshore/mediawiki-dev-tools and follow the instructions in that directory.

Run the `up` script.

## TODO
### MVP
- Generate all the contents for the base configuration
- Modularize https://github.com/addshore/mediawiki-dev-tools some more

### Milestone 0.1
- Add additional hooks/generators for the HTTP proxy or enable proxy-less configuration. 

### Milestone 0.2
- Add search role
- Add Browsertest role (chromedriver and mozilla driver services)

### Far future
Web UI
