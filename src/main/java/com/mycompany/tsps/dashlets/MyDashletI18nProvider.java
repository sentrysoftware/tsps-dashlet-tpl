// TODO: Change the package
package com.mycompany.tsps.dashlets;

import com.bmc.tsps.common.services.i18n.I18nFile;
import com.bmc.tsps.common.services.i18n.I18nProvider;
import java.util.Arrays;
import java.util.Collection;
import java.util.Locale;

// TODO: Rename the class to ensure <package.classname> is unique
public class MyDashletI18nProvider implements I18nProvider {

	@Override
	public Collection<I18nFile> getResources() {

		// Entries in src/main/resources/en.json must be unique, so it's recommended to prefix
		// them with ${project.groupId}.${project.artifactId}
		I18nFile resourceEn = new I18nFile(Locale.ENGLISH, this.getClass().getResource("/en.json"));

		// You may want to add text labels in Chinese and German, but it's optional.
		// Here is how it's done:
		// I18nFile resourceZh = new I18nFile(Locale.CHINESE, this.getClass().getResource("/zh.json"));

		return Arrays.asList(resourceEn);

	}

}
