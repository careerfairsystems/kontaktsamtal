(function () {
  'use strict';

  angular
    .module('companies')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('companies', {
        abstract: true,
        url: '/companies',
        template: '<ui-view/>'
      })
      .state('companies.list', {
        url: '',
        templateUrl: 'modules/companies/client/views/list-companies.client.view.html',
        controller: 'CompaniesListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Companies List'
        }
      })
      .state('companies.scheduling', {
        url: '/scheduleinfo',
        templateUrl: 'modules/companies/client/views/list-scheduling.client.view.html',
        controller: 'CompaniesSchedulingController',
        controllerAs: 'vm'
      })
      .state('companies.exportschedule', {
        url: '/exportschedule',
        templateUrl: 'modules/companies/client/views/list-exportschedule.client.view.html',
        controller: 'ExportScheduleController',
        controllerAs: 'vm'
      })
      .state('companies.preliminary', {
        url: '/preliminary',
        templateUrl: 'modules/companies/client/views/generate-preliminary.client.view.html',
        controller: 'GeneratePreliminaryController',
        controllerAs: 'vm',
        resolve: {
          listApplicationsResolve: getApplications,
          listCompaniesResolve: getCompanies
        }
      })
      .state('companies.time', {
        url: '/time',
        templateUrl: 'modules/companies/client/views/list-time.client.view.html',
        controller: 'CompaniesTimeController',
        controllerAs: 'vm'
      })
      .state('companies.selectedstudents', {
        url: '/selectedstudents',
        templateUrl: 'modules/companies/client/views/selectedstudents-companies.client.view.html',
        controller: 'CompaniesSelectedStudentsController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Companies Selected Students'
        }
      })
      .state('companies.multiple', {
        url: '/multiple',
        templateUrl: 'modules/companies/client/views/multiple-companies.client.view.html',
        controller: 'CompaniesMultipleController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Companies List'
        }
      })
      .state('companies.create', {
        url: '/create',
        templateUrl: 'modules/companies/client/views/form-company.client.view.html',
        controller: 'CompaniesController',
        controllerAs: 'vm',
        resolve: {
          companyResolve: newCompany
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle : 'Companies Create'
        }
      })
      .state('companies.edit', {
        url: '/:companyId/edit',
        templateUrl: 'modules/companies/client/views/form-company.client.view.html',
        controller: 'CompaniesController',
        controllerAs: 'vm',
        resolve: {
          companyResolve: getCompany
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Edit Company {{ companyResolve.name }}'
        }
      })
      .state('companies.view', {
        url: '/:companyId',
        templateUrl: 'modules/companies/client/views/view-company.client.view.html',
        controller: 'CompaniesController',
        controllerAs: 'vm',
        resolve: {
          companyResolve: getCompany
        },
        data:{
          pageTitle: 'Company {{ articleResolve.name }}'
        }
      });
  }

  getCompanies.$inject = ['$stateParams', 'CompaniesService'];
  function getCompanies($stateParams, CompaniesService) {
    return CompaniesService.query().$promise;
  }
  getApplications.$inject = ['$stateParams', 'ApplicationsService'];
  function getApplications($stateParams, ApplicationsService) {
    return ApplicationsService.query().$promise;
  }
  getCompany.$inject = ['$stateParams', 'CompaniesService'];

  function getCompany($stateParams, CompaniesService) {
    return CompaniesService.get({
      companyId: $stateParams.companyId
    }).$promise;
  }

  newCompany.$inject = ['CompaniesService'];

  function newCompany(CompaniesService) {
    return new CompaniesService();
  }
})();
