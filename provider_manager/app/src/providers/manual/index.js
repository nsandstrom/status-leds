// src/modules/manual/index.js

'use strict';

import Provider from '../BaseProvider.js'
import importer from '../importer.js'

let Conditions = importer(__dirname, '*/index.js')


export default class Manual extends Provider{
	
}

Manual.Conditions = Conditions
