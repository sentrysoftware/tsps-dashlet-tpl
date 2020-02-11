// TODO: Change the package
package com.mycompany.tsps.dashlets;

import com.bmc.tsps.common.services.i18n.I18nRegistry;
import com.bmc.tsps.common.services.asset.AssetRegistry;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

// TODO: Rename the class to ensure <package.classname> is unique
@WebListener
public class MyDashletRegistrar implements ServletContextListener {

	private MyDashletAssetProvider assetProvider;
	private MyDashletI18nProvider i18nProvider;

	@Override
	public void contextInitialized(ServletContextEvent event) {
		this.assetProvider = new MyDashletAssetProvider();
		this.i18nProvider = new MyDashletI18nProvider();

		AssetRegistry.getInstance().addProvider(assetProvider);
		I18nRegistry.getInstance().register(i18nProvider);
	}

	@Override
	public void contextDestroyed(ServletContextEvent event) {
		AssetRegistry.getInstance().removeProvider(assetProvider);
		I18nRegistry.getInstance().unregister(i18nProvider);

		this.assetProvider = null;
		this.i18nProvider = null;
	}
}
