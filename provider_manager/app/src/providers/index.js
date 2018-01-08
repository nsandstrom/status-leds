// providers/index.js

'use strict';

var glob = require( 'glob' )
  , path = require( 'path' );

import importer from './importer.js'

let providers = importer(__dirname, '*/index.js')

export default providers
