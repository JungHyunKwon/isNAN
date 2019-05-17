/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';
		
		/**
		 * @name isNan
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		window.isNan = function(value) {
			return typeof value === 'number' && isNan(value);
		};
	})();
}catch(e) {
	console.error(e);
}