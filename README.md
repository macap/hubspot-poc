# Hubspot Development Environment example

This repository contains an example of local development workflow with custom modules and templates. Allows you to develop modules and templates locally, and then upload them to Hubspot CMS using Circle CI.

## Overview

### Development server

See https://github.com/HubSpot/local-cms-server-cli/ for reference.

### Custom modules

See https://github.com/bradhave94/HubSpot/wiki/Custom-Modules-JSON for reference

## Setup

### Setup development build environment

If you don't have *Gulp CLI* installed globally install it first with `npm install --global gulp-cli`

Then install required packages in project main directory:

```
  yarn
```

### Setup development server

```
  cd dev
  yarn
  yarn hs-cms-server init --context
```

## Usage


### Starting development build server

```gulp build && gulp watch```

### Starting development server

`cd dev && yarn hs-cms-server start`


## Development

### Creating a template

Empty template file should be created in Hubspot web interface first (see known issues). Template must include required hs tags:

```{{ standard_header_includes }}```

```{{ standard_footer_includes }}```

You can use template generator:

```gulp template.new --name template-name```

### Creating a module

You can use module generator:

```gulp module.new --name module-name```

Modules use scss by default.

### Inserting a module into a template

```{% module "module_123" path="/modules/module_dir" %}```

Where *module_123* is unique module identifier (should be random for each include), and path is path to module directory without `.module` extension (if your module is in `src/modules` just replace `module_dir` with your module name).

### Working with data from Hubspot (pages, posts, hubdb)

- TBD

## Deployment

Deployment config is in .circleci catalog. Files are build in CI environment and then uploaded to Hubspot via FTP.

Required ENV variables in circleci:

```
FTPUSERNAME=
FTPPASS=
FTPHOST=
MODULES_DEST=
```

where `MODULES_DEST` is destination catalog in hubspot.

## Known issues

- Template must be created in Hubspot web interface before pushing it via ftp

## Disclaimer

- TBD