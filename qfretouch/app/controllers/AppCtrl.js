'use strict';
var appCtrl = function (
        config,
        $builder,
        $validator,
        $scope,
        $q,
        $rootScope,
        $state,
        $stateParams,
        $log,
        localStorageService,
        $timeout,
        $uibModal
        //qfretouchAuth,
        ) {
 var vm = this;


 vm.previewForm = function () {
  var modalInstance = $uibModal.open({
   templateUrl: 'preview-form-modal.html',
   controller: 'PreviewFormModalCtrl as previewFormCtrl',
   size: 'lg',
   backdrop: 'static',
  });

  modalInstance.result.then(function (searchCriteria) {

  }, function () {
   $log.info('Modal dismissed at: ' + new Date());
  });
 };

 var checkbox, textbox;
 textbox = $builder.addFormObject('default', {
  id: 'textbox',
  component: 'textInput',
  label: 'Name',
  description: 'Your name',
  placeholder: 'Your name',
  required: true,
  editable: false
 });
 checkbox = $builder.addFormObject('default', {
  id: 'checkbox',
  component: 'checkbox',
  label: 'Pets',
  description: 'Do you have any pets?',
  options: ['Dog', 'Cat']
 });
 $builder.addFormObject('default', {
  component: 'sampleInput'
 });
 $scope.form = $builder.forms['default'];
 $scope.input = [];
 $scope.defaultValue = {};
 $scope.defaultValue[textbox.id] = 'default value';
 $scope.defaultValue[checkbox.id] = [true, true];

 $scope.submit = function () {
  return $validator.validate($scope, 'default').success(function () {
   return console.log('success');
  }).error(function () {
   return console.log('error');
  });
 };
};


appCtrl.$inject = [
 'config',
 '$builder',
 '$validator',
 '$scope',
 '$q',
 '$rootScope',
 '$state',
 '$stateParams',
 '$log',
 'localStorageService',
 '$timeout',
 '$uibModal',
];

angular.module("qfretouch").controller('AppCtrl', appCtrl);
