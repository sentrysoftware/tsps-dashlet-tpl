(function() {

/**
 * <dashlet-example> AngularJS component controller
 **/
function dashletExampleController($http, I18nFactory) {

	var $ctrl = this;

	/**
	 * $onInit
	 **/
	$ctrl.$onInit = function() {

		// Sanity check
		$ctrl.configError = !angular.isString($ctrl.config.device) || $ctrl.config.device.trim() == "";
		if ($ctrl.configError) {
			return;
		}

		// First of all, retrieve the deviceId associated to the specified hostname in the configuration
		$ctrl.deviceSearchPromise = $http.post("/tsws/10.0/api/device/search", {
			searchString: $ctrl.config.device,
			currentView: null,
			sortBy: "severity_name",
			sortDirection: "ascending",
			devicesStartIndex: 0,
			devicesEndIndex: 1
		});
		$ctrl.deviceSearchPromise.then(function(response) {

			// Did we get at least one matching result?
			$ctrl.deviceNotFound = !angular.isArray(response.data._object.deviceSummary) || response.data._object.deviceSummary.length == 0;
			if (!$ctrl.deviceNotFound) {
				// Search the the one device that matches exactly with what was specified
				// (the REST API returns all devices that match more or less with the specified string)
				var deviceId = -1;
				var serverId = -1;
				angular.forEach(response.data._object.deviceSummary, function(d) {
					if (d.name == $ctrl.config.device) {
						deviceId = d.id;
						serverId = d.serverId;
					}
				});
				if (deviceId == -1) {
					// So, we didn't find an exact match...
					$ctrl.deviceNotFound = true;
				} else {

					// Yeah, let's get the monitors associated to this device
					$ctrl.getMonitorsPromise = $http.post("/tsws/10.0/api/monitor/list", {
						sourceId: deviceId,
						dataProviderId: serverId,
						sourceType: "Device",
						currentView: "",
						monitorsStartIndex: 0,
						monitorsEndIndex: 200,
						expandedMonitorId: null,
						sortBy: "totalEvents",
						sortDirection: "descending",
						requestFromIconParent: false,
						monitorTypeId: -1
					});
					$ctrl.getMonitorsPromise.then(function(response) {

						// Populate the list of monitors
						if (response.data && response.data._object) {
							$ctrl.monitorList = response.data._object.monitorSummaryTOsList || [];
						} else {
							$ctrl.monitorList = [];
						}

						// Calculate the total number of events (for all monitors)
						// Max should be at least 1, otherwise the progress bar cannot show 0/0
						$ctrl.maxEvents = 1;
						$ctrl.totalEvents = 0;
						angular.forEach($ctrl.monitorList, function(m) {
							if (m.totalEvents > $ctrl.maxEvents) {
								$ctrl.maxEvents = m.totalEvents;
							}
							$ctrl.totalEvents += m.totalEvents;
						});
					});
				}
			}
		});

	};

	/**
	 * severity2Css
	 *
	 * Converts a TSIM severity into a Bootstrap progress bar class suffix
	 **/
	var severity2CssMap = {
		"CRITICAL": "danger",
		"MAJOR": "danger",
		"MINOR": "warning",
		"WARNING": "info",
		"INFO": "success"
	};
	$ctrl.severity2Css = function(severity) {
		return severity2CssMap[severity] || "info";
	};

	/**
	 * severity2I18n
	 *
	 * Translate the severity in current locale
	 **/
	$ctrl.severity2I18n = function(severity) {

		// Use the I18nFactory service that translates anything that is declared in
		// src/main/resources/en.json the same way the '' | translate AngularJS
		// translates things.
		// Example:
		// I18nFactory.translate("${project.groupId}.${project.artifactId}.exampleDashlet.deviceNotFound")
		//      => "Could not find the device corresponding"

		// This service is very useful is you need to manipulate human readable strings in the JS code
		// and not only in the HTML template.

		// In this particular case, we're looking for the below entries:
		// * deviceView.critical => "Critical" ("Kritish" in German?)
		// * deviceView.info => "Information" ("Informazion" in German?)
		// etc.
		return I18nFactory.translate("deviceView." + severity.toLowerCase())
	}

}
dashletExampleController.$inject = ["$http", "I18nFactory"];

/**
 * <dashlet-example> AngularJS Component registration
 **/
angular.module("${project.groupId}.${project.artifactId}").component("dashletExample", {
	controller: dashletExampleController,
	templateUrl: "/${project.artifactId}/components/dashlet-example/dashlet-example.html",
	bindings: {
		config: "<",
		dashlet: "<"
	}
});

})();
