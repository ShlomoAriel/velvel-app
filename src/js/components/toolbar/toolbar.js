@Inject('$location','$state','AuthService')
class ToolbarCtrl {
    constructor() {
        AuthService.registerUserUpdateCallback(()=>{
            this.currentUser = AuthService.currentUser
        });
    }
    login() {
    }
    logout() {
        this.AuthService.logout();
        this.$state.go('login');
    }
    go(tab) {
        this.$state.go(tab, this.$state.params);
    }
}
angular.module('velvel-app').component('toolbar', {
    template: require('./toolbar.html'),
    bindings: {
    },
    controller: ToolbarCtrl
});