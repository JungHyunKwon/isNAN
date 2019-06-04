/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';
		
		/**
		 * @name isNAN
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		window.isNAN = function(value) {
			return typeof value === 'number' && isNAN(value);
		};
	})();
}catch(e) {
	console.error(e);
}