/**
 * {Sample} - {description}.
 * Released under the MIT license.
 * https://github.com/cssmagic/sample
 */
var sample = function () {
	'use strict'

	// namespace
	var sample = {}

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
	sample.sample1 = sample1
	sample.sample2 = sample2

	/** DEBUG_INFO_START **/
	//exports for unit test
	sample.__util = _util
	/** DEBUG_INFO_END **/

	// exports
	return sample

}()
