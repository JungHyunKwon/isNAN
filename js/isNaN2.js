/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
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
	})();
}catch(e) {
	console.error(e);
}