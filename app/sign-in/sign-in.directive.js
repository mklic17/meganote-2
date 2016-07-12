{
  angular.module('meganote.signIn')
  .directive('signIn', [
    'UsersService',
    '$state',
    (UsersService, $state) => {
      class SignInController {
        submit() {
          var vm = this;
          UsersService.login(vm.user)
            .then(
              () => $state.go('notes.form', { noteId: undefined })
            );
        }

      }
      return {
        scope: {},
        controller: SignInController,
        controllerAs: 'vm',
        bindToController: true,
        template: 'app/sign-in/sign-in.html',
      };
    }
  ]);
}
