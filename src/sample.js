/**
 * {Sample} - {description}.
 * Released under the MIT license.
 * https://github.com/cssmagic/sample
 */
var sample = function () {
	'use strict'

	// util
	function _util() {
		//...
	}

	// fn
	function sample1() {
		//...
	}
	function sample2() {
		//...
	}

	// api
	var exports = {}
	exports.sample1 = sample1
	exports.sample2 = sample2

	/** DEBUG_INFO_START **/
	// only for unit test
	exports.__util = _util
	/** DEBUG_INFO_END **/

	return exports

}()
