// datatypes/index.js

'use strict';

import importer from './../importer.js'

let Datatypes = importer(__dirname, '*/index.js', false)

export default class ProviderManager {

	static list_all(){
		return Datatypes;
	}

	static show_one(datatype){
		if (datatype in Datatypes) {
			return Datatypes[datatype]
		}
		else {
			return null
		}
	}
}
