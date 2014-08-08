
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var Connexion = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	Connexion.login = function Connexion_login (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("Connexion", "login", Connexion.login, "WAF");
// @endregion
};// @endlock
