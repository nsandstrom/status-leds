'use strict';

var glob = require( 'glob' )
  , path = require( 'path' );

export default function importer(targetPath, importPath) {

	let items = {}

	glob.sync( path.resolve(targetPath, importPath) ).forEach( function( file ) {
		let splitPath = file.split('/')
		let dir = splitPath[splitPath.length-2]
		let name = dir.charAt(0).toUpperCase() + dir.slice(1);
		items[name] = require( path.resolve( file ) ).default
	});

	return items
}