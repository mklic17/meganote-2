{
  angular.module('meganotes.users')
    .service('UserService', [
      'AuthToken',
      '$http',
      'API_BASE',
      (AuthToken, $http, API_BASE) => {

        const apiUri = `${API_BASE}users/`;

        class UsersService {

          // Sign Up
          create(user){
            return $http.post(`${apiUri}users`, {
              user, // equivalent to user: user

            })
              .then(
                res => {
                  AuthToken.set(res.data.authToken);
                }
              );
          }
        }
        return new UsersService();

      }
    ]);



}
