{
  angular.module('meganote', [
    'ui.router',
    'ngFlash',
    'textAngular',
    'meganote.notes',
    'meganote.notesForm',
    'meganote.signUp',
    'meganote.users',
    'meganotes.signIn',
  ])
    .config(config);

  config.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes/');
  }
}
