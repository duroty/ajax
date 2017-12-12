var APP = APP || {};
APP = (function() {
	function getAjax(url, $container) {
    	$.ajax({
		    url: url,
		    dataType: "json",
		    timeout: 50000
		}).done(function(data) {
			$container.find(".results").html(JSON.stringify(data));
		}).fail(function(jqXHR, textStatus, errorThrown) {;
			$container.find(".results").html(textStatus);
		});
    }

	function init() {
		getAjax("https://premium.electiona.com/catalanas/data/results/data/5/2015/c9/data.json", $("#results-pro"));

		getAjax("https://premium-pre.electiona.com/catalanas/data/results/data/5/2015/c9/data.json", $("#results-pre"));
	}

	return {
		init:init
	};
}());

$(document).ready(function() {
	APP.init();
});