angular.module('podApp')
    .controller('homeCtrl', function($scope, PodService, $stateParams) {

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
                })
        }

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


        $scope.viewPod = null;

        $scope.editPd = function(pd) {
            console.log(pd);
            $scope.viewPod = pd;
            $scope.viewPod.date = new Date($scope.viewPod.date)
        }

        $scope.saveEdit = function() {
            $scope.viewPod = null;
        }

        $scope.update = function(viewPod) {
            PodService.update(viewPod)
                .then(function() {
                    swal("Your pod has been saved!", "success")
                }, function(err) {
                    console.log(err);
                })
        }

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
                        })
                },
                function(err) {
                    console.log('err ', err);
                })
        }
      })
