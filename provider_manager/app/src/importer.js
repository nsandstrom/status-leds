'use strict';

var glob = require( 'glob' )
  , path = require( 'path' );

export default function importer(targetPath, importPath, upcase = true) {

	let items = {}

	glob.sync( path.resolve(targetPath, importPath) ).forEach( function( file ) {
		try {
			let splitPath = file.split('/')
			let dir = splitPath[splitPath.length-2]
			let name
			if (upcase) {
				name = dir.charAt(0).toUpperCase() + dir.slice(1);
			}
			else {
				name = dir
			}
			items[name] = require( path.resolve( file ) ).default
		} catch(error) {
			console.log(error)
		}
	});
	return items
}
