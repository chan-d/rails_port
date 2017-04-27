'use strict';
angular
  .module('profileApp')
  .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$location'];
  function ProfileController(   $location  ) {
    var vm = this;
    console.log('ProfileController is live!!!!');
    vm.lists = [{ id: 1, name: 'homework list'}, { id: 300, name: 'shopping'}];
    vm.sampleData = "testing testing: hello world";
  }
