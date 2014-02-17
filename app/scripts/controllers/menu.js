'use strict';
/*global $:false */
angular.module('bawdApp')
  .controller('MenuCtrl', function ($scope, $location, $rootScope, $log, $animate) {
          $scope.togglethis  = function togglethis(){
              $scope.togglehideshow = true;
              var getlogo = $('.top_left_logo.grey img');
              var getnav = $('.nav');
              var getside = $('.right_side p');
              $scope.mainmenulink = 'views/menu.html';
              $scope.templatehome = 'views/pantone-inner-home.html';
              $scope.templatecontact = 'views/pantone-inner-contact.html';
              $scope.templateprojects = 'views/pantone-inner-project.html';
              $scope.templateabout = 'views/pantone-inner.html';
              $animate.addClass(getlogo, 'rollIn animated');
              $animate.addClass(getside, 'gray');
              $animate.addClass(getnav, 'slideInDown animated');
            };
          $scope.closemenu = function closemenu(){
            var getpantones = $('.pantone_wrap_outer');
            var getlogo = $('.top_left_logo.grey img');
            var getnav = $('.nav');
            var getside = $('.right_side p');
            $animate.removeClass(getlogo, 'rollIn animated');
            $animate.addClass(getlogo, 'rollOut animated');
            $animate.removeClass(getnav, 'slideInDown animated');
            $animate.addClass(getnav, 'slideOutUp animated');
            $animate.leave(getpantones,function(){
            $animate.removeClass(getlogo, 'rollOut animated');
            $animate.removeClass(getnav, 'slideOutUp animated');
            $animate.removeClass(getside, 'gray');
              $scope.$apply(function(){
                  $scope.togglehideshow = false;
                  $scope.templatehome = '';
                  $scope.templateprojects = '';
                  $scope.templateabout = '';
                  $scope.templatecontact = '';
                });
            });
          };
          $scope.closemenulink = function closemenulink(){
              $scope.closemenu();
            };
          $scope.$on('toggleclicked', function(){
          });
        });