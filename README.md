# Hubspot Development Environment example

This repository contains an example of local development workflow with custom modules and templates. Allows you to develop modules and templates locally, and then upload them to Hubspot CMS using Circle CI.

## Overview

### Development server

See https://github.com/HubSpot/local-cms-server-cli/ for reference.

### Custom modules

See https://github.com/bradhave94/HubSpot/wiki/Custom-Modules-JSON for reference

## Setup

- TBD

## Usage

- TBD

### Starting development server

`cd dev && yarn hs-cms-server start`


## Development

### Creating a template

Empty template file should be created in Hubspot web interface first (see known issues). Template must include required hs tags:

```{{ standard_header_includes }}```

```{{ standard_footer_includes }}```

### Creating a module

### Inserting a module into a template

```{% module "name" path="./module_dir" %```

Where *name* is module name unique in template (might as well be random), and path is path to module directory (relative to designs catalog) without `.module` extension.

### Working with data from Hubspot (pages, posts, hubdb)

- TBD

## Deployment

- TBD

## Known issues

- Template must be created in Hubspot web interface before pushing it via ftp

## Disclaimer

- TBD