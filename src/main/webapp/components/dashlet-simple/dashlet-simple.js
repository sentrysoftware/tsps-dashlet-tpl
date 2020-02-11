(function() {

/**
 * <dashlet-simple> AngularJS component controller
 **/
function dashletSimpleController() {

	var $ctrl = this;

	/**
	 * $onInit
	 **/
	$ctrl.$onInit = function() {
		// TODO: Initialization stuff

		// Dashlet config is stored in $ctrl.config

		// Global dashboard config is stored in $ctrl.dashlet.globalFilter.timeInfo (time period in minutes)
		// and $ctrl.dashlet.globalFilter.application (selected application)
	};

}
dashletSimpleController.$inject = [];

/**
 * <dashlet-simple> AngularJS Component registration
 **/
angular.module("${project.groupId}.${project.artifactId}").component("dashletSimple", {
	controller: dashletSimpleController,
	templateUrl: "/${project.artifactId}/components/dashlet-simple/dashlet-simple.html",
	bindings: {
		config: "<",
		dashlet: "<"
	}
});

})();
