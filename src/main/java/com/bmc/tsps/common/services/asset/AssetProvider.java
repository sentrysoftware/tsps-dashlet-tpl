/**
 * Classes mimicking BMC TSPS code that is necessary to compile the Java code
 * that declares our dashlet.
 *
 * These classes are excluded from the .war artifact and from the plugin .zip file
 * as their "real" counterparts will be provided at runtime in the classpath of
 * the JVM executing TSPS and our code.
 *
 * DO NOT CHANGE.
 */
package com.bmc.tsps.common.services.asset;

import java.util.List;

public abstract interface AssetProvider {
	public abstract List<String> getModules();

	public abstract List<String> getJavascripts();

	public abstract List<String> getCss();
}