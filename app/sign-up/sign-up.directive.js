{
  angular.module('meganote.signUp')
    .directive('signUp', () => {

      class SignUpController { // no parenthesis
        constructor() {
          this.user= {};
        }
        submit() {
          
        }
      }

      return {
        scope: {

        },
        templateUrl: '/sign-up/sign-up.html',
        controller: SignUpController,
        controllerAs: 'vm',
        bindToController: true,
      };

    });

}
