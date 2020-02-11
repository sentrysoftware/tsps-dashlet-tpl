// TODO: Change the package
package com.mycompany.tsps.dashlets;

import com.bmc.tsps.common.services.asset.AssetProvider;

import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Properties;

//TODO: Rename the class to ensure <package.classname> is unique
public class MyDashletAssetProvider implements AssetProvider {

	// Read the build properties (in /build.properties resource file)
	// DO NOT CHANGE
	private static Properties properties = new Properties();
	static {

		// Read the properties resource
		try (InputStream propStream = MyDashletAssetProvider.class.getResourceAsStream("/build.properties")) {

			if (propStream != null) {
				properties.load(propStream);
			}

		} catch (IOException e) { /* Do nothing */ }

	}
	private static String ARTIFACT_ID = properties.getProperty("artifactId", "UNKNOWN");
	private static String MODULE_NAME = properties.getProperty("ngModuleName", "UnknownModule");

	@Override
	public List<String> getModules() {

		// List here the AngularJS modules that need to be loaded.
		// DO NOT CHANGE unless you know what you're doing
		// The module here is the one you declare in your JS code with:
		// angular.module("my.module", ["adf.provider"]);
		return Collections.singletonList(MODULE_NAME);

	}

	@Override
	public List<String> getJavascripts() {

		// TODO: List here all of the Javascript resources that need to be loaded in the browser
		return Arrays.asList(
				"/" + ARTIFACT_ID + "/js/my-dashlets.js",
				"/" + ARTIFACT_ID + "/components/dashlet-simple/dashlet-simple.js",
				"/" + ARTIFACT_ID + "/components/dashlet-simple/dashlet-simple-edit.js",
				"/" + ARTIFACT_ID + "/components/dashlet-example/dashlet-example.js",
				"/" + ARTIFACT_ID + "/components/dashlet-example/dashlet-example-edit.js"
			);

	}

	@Override
	public List<String> getCss() {

		// TODO: List here all of the Javascript resources that need to be loaded in the browser
		return Arrays.asList(
				"/" + ARTIFACT_ID + "/css/my-dashlets.css"
			);

	}


}