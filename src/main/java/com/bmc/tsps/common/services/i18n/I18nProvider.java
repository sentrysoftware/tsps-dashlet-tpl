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
package com.bmc.tsps.common.services.i18n;

import java.util.Collection;

public abstract interface I18nProvider {
	public abstract Collection<I18nFile> getResources();
}