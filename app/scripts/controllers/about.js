'use strict';
/*global $:false */
angular.module('bawdApp')
  .controller('AboutCtrl', function ($scope) {
	var pantoneconter = 0;
  $scope.pantonesAbout = [
			{name:'Pantone intro', url:'views/pantone_about.html'},
			{name:'Pantone one', url:'views/about_patone_one.html'},
			{name:'Pantone two', url:'views/about_patone_two.html'},
			{name:'Pantone three', url:'views/about_patone_three.html'},
			{name:'Pantone four', url:'views/about_patone_four.html'},
			{name:'Pantone five', url:'views/about_patone_five.html'},

		];
	function border(valueWidth){
			$('.page_cont_wrap').css('border', valueWidth+'px solid #aaFFFF');
	  }
	$(document).ready(function ($) {
			$('.pantone_wrap_outer').css({
				'position': 'absolute',
			})
			.delay(200)
			.animate({
					'margin-left': '-160px',
					'margin-top': '-233px',
					'left': '50%',
					'top': '50%'
			  }, 200);
		});
	$scope.pantone = function pantone(){
			border(0);
			$scope.template = $scope.pantonesAbout[0].url;
			$('.top_left_logo.white  img').css('position', 'fixed');
		};
	$scope.close = function close(){
			$scope.template = '';
			$('.remo').addClass('pantoneani');
			$('.top_left_logo.white  img').css('position', 'relative');
			border(10);
		};
	$scope.nextpro = function nextpro(){
			var arraylength = $scope.pantonesAbout.length;
			pantoneconter ++;
			$scope.PrevNext = 'next';
			$('.remo').removeClass('pantoneani');
			if(pantoneconter >= arraylength){
				pantoneconter = 0;
				$scope.template = $scope.pantonesAbout[pantoneconter].url;
			}else{
				$scope.template = $scope.pantonesAbout[pantoneconter].url;
			}
		};
	$scope.prevpro = function prevpro(){
			var arraylength = $scope.pantonesAbout.length;
			pantoneconter --;
			$scope.PrevNext = 'prev';
			$('.remo').removeClass('pantoneani');
			if(pantoneconter >= arraylength){
				pantoneconter = 0;
				$scope.template = $scope.pantonesAbout[pantoneconter].url;
			}else if (pantoneconter < 0){
				pantoneconter = arraylength -1;
				$scope.template = $scope.pantonesAbout[arraylength - 1].url;
			}
			else{
				$scope.template = $scope.pantonesAbout[pantoneconter].url;
			}
		};
});
