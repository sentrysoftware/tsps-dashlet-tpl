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

import com.bmc.tsps.common.services.i18n.labelreader.LabelReader;

import java.net.URL;
import java.util.Locale;

public class I18nFile {

	private final Locale locale;
	private final URL url;
	private LabelReader labelReader;

	public I18nFile(Locale locale, URL url) {
		this.locale = locale;
		this.url = url;
	}

	public I18nFile(Locale locale, URL url, Class<? extends LabelReader> labelReaderClass) throws Exception {
		this.locale = locale;
		this.url = url;
	}

	public I18nFile(Locale locale, URL url, String prefix, Class<? extends LabelReader> labelReaderClass)
			throws Exception {
		this.locale = locale;
		this.url = url;
	}

	public Locale getLocale() {
		return locale;
	}

	public URL getUrl() {
		return url;
	}

	public LabelReader getLabelReader() {
		return labelReader;
	}
}