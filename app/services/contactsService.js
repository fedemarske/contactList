contacts.factory('contactsService', function($http){
	return {
		getAllContacts : function(url) {
			return $http.get(url);
		},
		getContactById : function(detailsURL) {
			return $http.get(detailsURL);
		}
	}
});