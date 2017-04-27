angular
  .module('profileApp')
  .controller('aboutMeController', aboutMeController);

  aboutMeController.$inject = ['$location'];
  function aboutMeController(   $location  ) {
    var vm = this;
    console.log('AboutMeController is live!!!!');
    vm.sampleData = "testing testing: hello world";
  }
