contacts.controller('contactsController', function($scope, contactsService) {

    var url = 'https://solstice.applauncher.com/external/contacts.json';

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    contactsService.getAllContacts(url).success(function(data) {
        $scope.contacts = data;

        for(var i=0; i < $scope.contacts.length; i++){
        	if($scope.contacts[i].phone.mobile == null){
        		$scope.contacts[i].phone.mobile = "";
        	}
        }

    });

    $scope.showDetails = function(contact) {

        $scope.contact = contact;

        contactsService.getContactById(contact.detailsURL).success(function(data) {
            $scope.contact.moreInfo = data;

            var birthday = new Date(parseInt($scope.contact.birthdate));

            $scope.contact.birthday = {};
            $scope.contact.birthday.month = months[birthday.getMonth()];
            $scope.contact.birthday.day = birthday.getDate();
            $scope.contact.birthday.year = birthday.getFullYear();

        });
    }

})
