(function() {

/**
 * <dashlet-simple-edit> AngularJS component controller
 **/
function dashletSimpleEditController($scope) {

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
		// Well, nothing to initialize in this very simple dashlet

		// Properties of the $ctrl.config object will be saved as the dashlet configuration

		// $ctrl.dashlet.height and $ctrl.dashlet.title contain the height and title of the dashlet
		// (which are common properties to all dashlets)
		// $ctrl.dashlet.refreshFactor contains the auto-refresh settings (in multiples of 30 seconds)
	};

	/**
	 * save
	 *
	 * Called when user hits the [Apply] button
	 * DO NOT CHANGE
	 **/
	$ctrl.save = function() {
		$scope.$emit("dashlet-settings-save");
	};

	/**
	 * cancel
	 *
	 * Called when user hits the [Cancel] button
	 * DO NOT CHANGE
	 **/
	$ctrl.cancel = function() {
		$scope.$emit("dashlet-settings-cancel");
	};

}
dashletSimpleEditController.$inject = ["$scope"];

/**
 * <dashlet-simple-edit> AngularJS Component registration
 **/
angular.module("${project.groupId}.${project.artifactId}").component("dashletSimpleEdit", {
	controller: dashletSimpleEditController,
	templateUrl: "/${project.artifactId}/components/dashlet-simple/dashlet-simple-edit.html",
	bindings: {
		config: "<",
		dashlet: "<"
	}
});

})();
