{
  angular.module('meganote.user')
    .service('CurrentUser', ['$window', $window => {

      class CurrentUser {

        constructor() {
          this.user = JSON.parse($window.localStorage.getItem('currentUser'));
        }

        set(user) {
          this.user = user;
          $window.localStorage.setItem('currentUser', JSON.stringify(user));
        }

        get() {
          return this.user || {};
        }

        clear() {
          this.user = undefined;
          $window.localStorage.removeItem('CurrentUser');
        }
      }

      return new CurrentUser();
    }]);
}
