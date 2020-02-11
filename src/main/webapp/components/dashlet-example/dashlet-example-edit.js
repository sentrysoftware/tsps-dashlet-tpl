(function() {

/**
 * <dashlet-example-edit> AngularJS component controller
 **/
function dashletExampleEditController($scope, $http) {

	var $ctrl = this;

	/**
	 * refreshRateItems
	 **/
	$ctrl.refreshRateItems = [
		{ label: "infraApp.dashlets.refreshRate.1m", value: 2 },
		{ label: "infraApp.dashlets.refreshRate.5m", value: 10 },
		{ label: "infraApp.dashlets.refreshRate.10m", value: 20 },
		{ label: "infraApp.dashlets.refreshRate.30m", value: 60 },
		{ label: "infraApp.dashlets.refreshRate.1h", value: 120 }
	];

	/**
	 * $onInit
	 **/
	$ctrl.$onInit = function() {
		// Well, nothing to initialize in this example
	};

	/**
	 * searchDevices
	 *
	 * Queries TSPS' REST API to get the list of devices
	 * that match the specified string.
	 *
	 * Returns a promise (to be used in uib-typeahead directive)
	 **/
	$ctrl.searchDevices = function(string) {
		return $http.post("/tsws/10.0/api/device/search", {
			searchString: string,
			currentView: null,
			sortBy: "severity_name",
			sortDirection: "ascending",
			devicesStartIndex: 0,
			devicesEndIndex: 10
		}).then(function(response) {
			return response.data._object.deviceSummary;
		});
	};

	/**
	 * save
	 **/
	$ctrl.save = function() {

		// Force the dashlet title
		$ctrl.dashlet.title = "Monitors for " + $ctrl.config.device;

		// Then save
		$scope.$emit("dashlet-settings-save");
	};

	/**
	 * cancel
	 **/
	$ctrl.cancel = function() {
		$scope.$emit("dashlet-settings-cancel");
	};

}
dashletExampleEditController.$inject = ["$scope", "$http"];

/**
 * <dashlet-example-edit> AngularJS Component registration
 **/
angular.module("${project.groupId}.${project.artifactId}").component("dashletExampleEdit", {
	controller: dashletExampleEditController,
	templateUrl: "/${project.artifactId}/components/dashlet-example/dashlet-example-edit.html",
	bindings: {
		config: "<",
		dashlet: "<"
	}
});

})();
