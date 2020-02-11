(function(){

// Define our AngularJS module
// By default, the module is named after our Maven artifact coordinates.
// The below name is referenced in the Java method MyDashletAssetProvider.getModules().
// You will need to update the Java code accordingly if you want to customize the
// name of your AngularJS module
angular.module("${project.groupId}.${project.artifactId}", ["adf.provider", "tsps.core.factories"]);

// Register the dashlet(s)
angular.module("${project.groupId}.${project.artifactId}").config(["dashboardProvider", function(dashboardProvider) {

	// Register simpleDashlet
	// TODO: Change the dashlet name
	dashboardProvider.dashlet("simpleDashlet", {

		// Title and description below are references in src/main/resources/en.json
		title: "${project.groupId}.${project.artifactId}.simpleDashlet.title",
		description: "${project.groupId}.${project.artifactId}.simpleDashlet.description",

		// Dashlet definition
		height: "1X", // Will be overridden by dashlet user configuration
		template: "<dashlet-simple config='config' dashlet='model'></dashlet-simple>",
		disableManualRefresh : "true",
		edit: {
			template: "<dashlet-simple-edit config='config' dashlet='model'></dashlet-simple-edit>"
		},
		componentType: "TSPS"
	});

	// Register exampleDashlet
	// TODO: Change the dashlet name, or remove it entirely
	dashboardProvider.dashlet("exampleDashlet", {

		// Title and description below are references in src/main/resources/en.json
		title: "${project.groupId}.${project.artifactId}.exampleDashlet.title",
		description: "${project.groupId}.${project.artifactId}.exampleDashlet.description",

		// Dashlet definition
		height: "3X", // Will be overridden by dashlet user configuration
		template: "<dashlet-example config='config' dashlet='model'></dashlet-example>",
		disableManualRefresh : "false",
		edit: {
			template: "<dashlet-example-edit config='config' dashlet='model'></dashlet-example-edit>"
		},
		refreshFactor: 10,
		componentType: "TSIM"
	});

}]);

})();
