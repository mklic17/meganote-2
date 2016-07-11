{
  angular.module('meganote.users')
    .directive('userProfile', [
      'CurrentUser',
      'UsersService'
      (CurrentUser, UsersService) => {
        class UserProfileController {
          constructor() {
            var vm = this;
            vm.user = angular.copy(CurrentUser.get()); // do this so you do not update in real time
          }
          submit() {
            var vm = this;
            UsersService.update(vm.user);
          }
        }
        return {
          scope: {},
          controller: UserProfileController,
          controllerAs: 'vm',
          bindToController: true,
          template: `
          <div class="container">
            <div class="row">
              <div class="col-xs-6 col-xs-offset-4">
                <h3>Sign Up for Meganote</h3>
                <form id="new_user" ng-submit="vm.submit()">
                  <p>
                    <label for="name">Full Name</label><br>
                    <input
                      type="text"
                      name="name"
                      autofocus="autofocus"
                      ng-model="vm.user.name"
                      required>
                  </p>
                  <p>
                    <label for="username">Username</label><br>
                    <input
                      type="text"
                      name="username"
                      ng-model="vm.user.username"
                      required>
                  </p>

                  <p>
                    <label for="passwordConfirmation">Re-type Password</label><br>
                    <input
                      type="password"
                      name="passwordConfirmation"
                      ng-model="vm.user.passwordConfirmation"
                      required>
                  </p>
                  <input type="submit" name="commit" value="Save Changes" class="btn btn-default">
                  <span class="login">
                    <a href="#" ui-sref="notes.form, ({ noteId: undefined })"> Back to my notes</a>
                  </span>
                </form>
              </div>
            </div>
          </div>

          `,
        };
      }
    ]);
}
