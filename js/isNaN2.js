/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function(isNaN) {
		'use strict';
		
		/**
		 * @name isNaN2
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		window.isNaN2 = function(value) {
			return typeof value === 'number' && isNaN(value);
		};
	})(window.isNaN);
}catch(e) {
	console.error(e);
}