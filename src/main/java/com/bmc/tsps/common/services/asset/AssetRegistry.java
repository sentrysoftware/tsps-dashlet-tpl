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

import java.util.ArrayList;
import java.util.List;

public class AssetRegistry {

	private static final AssetRegistry instance = new AssetRegistry();
	private List<AssetProvider> providers = new ArrayList<AssetProvider>();

	public static AssetRegistry getInstance() {
		return instance;
	}

	public void addProvider(AssetProvider provider) {
		providers.add(provider);
	}

	public void removeProvider(AssetProvider provider) {
		providers.remove(provider);
	}

}
