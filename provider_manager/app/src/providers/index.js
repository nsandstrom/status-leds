// providers/index.js

'use strict';

import Smhi from './smhi/'
import Sl from './sl/'
import Manual from './manual/'

export default {	"Smhi" : Smhi,
					"Sl" : Sl,
					"Manual" : Manual }
// module.exports.Modules = [Smhi, Sl]
// module.exports.Sl = Sl