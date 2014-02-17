'use strict';
/*global $:false */
angular.module('bawdApp')
  .directive('pantoneMenu', function () {
    return {
      templateUrl: 'views/pantone_menu.html',
      restrict: 'AE',
      transclude: true,
      link: function($scope) {
				var arraylength = $scope.pantones.length;
				function border(valueWidth, color){
				  $('.page_cont_wrap').css('border', valueWidth+'px solid #'+color);
				}
				border(10, 'f5f3f3');
				function next(){
					$scope.$parent.pantoneconter  = $scope.$parent.pantoneconter + 1;
					$scope.$parent.PrevNext = 'next';
					if($scope.$parent.pantoneconter >= arraylength){
						$scope.$parent.pantoneconter = 0;
						$scope.$parent.template = $scope.pantones[$scope.$parent.pantoneconter].url;
					}else{
						$scope.$parent.template = $scope.pantones[$scope.$parent.pantoneconter].url;
					}
				}
				function prev(){
					var arraylength = $scope.pantones.length;
					$scope.$parent.pantoneconter --;
					$scope.$parent.PrevNext = 'prev';
					if($scope.$parent.pantoneconter >= arraylength){
						$scope.$parent.pantoneconter = 0;
						$scope.$parent.template = $scope.pantones[$scope.$parent.pantoneconter].url;
					}else if ($scope.$parent.pantoneconter < 0){
						$scope.$parent.pantoneconter = arraylength -1;
						$scope.$parent.template = $scope.pantones[arraylength - 1].url;
					}
					else{
						$scope.$parent.template = $scope.pantones[$scope.$parent.pantoneconter].url;
					}
				}
				function closeit(){
					/*$scope.$parent.template = '';
					$el[0].parentNode.className = 'remo pantonebg blue ng-scope close';
					border(10);*/
				}
				$scope.close = function close(){
					closeit();
				};
				$scope.nextpro = function nextpro(){
					next();
				};
				$scope.prevpro = function prevpro(){
					prev();
				};
				$scope.keypress = function keypress(e){
					if(e === 39){
						next();
					}
					if(e === 37){
						prev();
					}
					if(e === 27){
						closeit();
					}
					if(e === 38 || e === 40){
					}
				};
				$(document).on('keyup',function(){
					$scope.$apply(function () {
						$('#focus_force').focus();
					});
				});
			}
		};
  });




