angular.module('podApp')
    .controller('homeCtrl', function($scope, $stateParams, $uibModal, PodService) {
        console.log('home:', 'homeCtrl!');

        $scope.pods = [];

        PodService.getAll()
            .then(function(res) {

                var pods = res.data;
                $scope.pods = pods;

                console.log('$scope.pods:', $scope.pods);

            }, function(err) {
                console.error(err);
            });

        $scope.toggleChecked = (pd) => {
            PodService.update(pd)
                .then(function() {
                    swal("Your pod is now occupied.", "success")
                }, function(err) {
                    console.log(err);
                });
        };

        $scope.addPd = (pd) => {

            PodService.create($scope.pd)
                .then(function(res) {
                    $scope.pods.push(res.data)
                    $scope.pd = {}
                    console.log('$scope.pd', $scope.pd);

                }, function(err) {
                    console.log(err)
                });
        };

        $scope.deletePod = function(pd) {
            console.log(pd)
            swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this pod info!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                },
                function() {
                    PodService.delete(pd)
                        .then(function() {
                            var index = $scope.pods.indexOf(pd);
                            $scope.pods.splice(index, 1);
                            $scope.viewPod = null;
                            swal("Deleted!",
                                "Your reservations has been deleted.",
                                "success");
                        });
                },
                function(err) {
                    console.log('err ', err);
                });
        };

        $scope.editPd = function(pod) {
            console.log('pod:', pod);

            var modalInstance = $uibModal.open({
                controller: 'modalCtrl',
                templateUrl: '/html/modal.html',
                resolve: {
                  pod:pod
                }
            });

            modalInstance.result
            .then(function() {
              console.log('success:', 'instance success');
            })
            .catch(function(){
            console.log('failure!');
          });
        };
    })

.controller('modalCtrl', function($scope, $uibModalInstance, pod) {
    console.log('pod:', pod);

    $scope.pod = pod;

    $scope.ok = function() {
        $uibModalInstance.close();
    };
    $scope.cancel = function() {
        $uibModalInstance.dismiss();
    };
})

// CLIENT CONTROLLER

.controller('clientCtrl', function($scope, $stateParams, $uibModal, ClientService) {
    console.log('home:', 'clientCtrl!');

    $scope.clients = [];

    ClientService.getAll()
        .then(function(res) {

            var clients = res.data;
            $scope.clients = clients;

            console.log('$scope.clients:', $scope.clients);

        }, function(err) {
            console.error(err);
        });

    $scope.toggleChecked = (client) => {
        ClientService.update(client)
            .then(function() {
                swal("Your client is now in a pod.", "success")
            }, function(err) {
                console.log(err);
            });
    };

    $scope.addClient = (client) => {
        ClientService.create($scope.client)
            .then(function(res) {
                $scope.clients.push(res.data)
                $scope.client = {}
                console.log('$scope.client', $scope.client);

            }, function(err) {
                console.log(err)
            });
    };

    $scope.deleteClient = function(client) {
        console.log(client)
        swal({
                title: "Are you sure?",
                text: "You will not be able to recover this client's info!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                closeOnConfirm: false
            },
            function() {
                ClientService.delete(pd)
                    .then(function() {
                        var index = $scope.clients.indexOf(client);
                        $scope.clients.splice(index, 1);
                        $scope.viewClient = null;
                        swal("Deleted!",
                            "Your client has been deleted.",
                            "success");
                    })
            },
            function(err) {
                console.log('err ', err);
            });
    };

    $scope.editClient = function(client) {
        console.log('client:', client);

        var modalInstance = $uibModal.open({
            controller: 'clientModalCtrl',
            templateUrl: '/html/clientModal.html',
            resolve: {
              client:client
            }
        });

        modalInstance.result
        .then(function() {
          console.log('success:', 'instance success');
        })
        .catch(function(){
        console.log('failure!');
      });
    };
})

.controller('clientModalCtrl', function($scope, $uibModalInstance, client) {
    console.log('client:', client);

    $scope.client = client;

    $scope.ok = function() {
        $uibModalInstance.close();
    };
    $scope.cancel = function() {
        $uibModalInstance.dismiss();
    };
});
