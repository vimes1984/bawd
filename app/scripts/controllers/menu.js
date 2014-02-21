'use strict';
/*global $:false */
angular.module('bawdApp')
  .controller('MenuCtrl', function ($scope, $location, $rootScope, $route, $animate) {
          if($location.path() === '/home'){
            $('.closeX').hide();
          }
          $scope.togglethis  = function togglethis(){
              $scope.togglehideshow = true;
              var getlogo = $('.top_left_logo.grey img');
              var getnav = $('.nav');
              var getside = $('.right_side p');
              var getmenutoggleone = $('#lineone');
              var getmenutoggletwo = $('#linetwo');    
              var getmenutogglethree = $('#linethree');
              var getmenutogglefour = $('#linefour');        
              $animate.addClass(getmenutoggleone, 'fadeIn animated');
              $animate.addClass(getmenutoggletwo, 'fadeIn animated');
              $animate.addClass(getmenutogglethree, 'fadeIn animated');
              $animate.addClass(getmenutogglefour, 'fadeIn animated');
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
            var getmenutoggleone = $('#lineone');
            var getmenutoggletwo = $('#linetwo');            
            var getmenutogglethree = $('#linethree');            
            var getmenutogglefour = $('#linefour');            
            $animate.addClass(getmenutoggleone, 'fadeOut animated');
            $animate.addClass(getmenutoggletwo, 'fadeOut animated');
            $animate.addClass(getmenutogglethree, 'fadeOut animated');
            $animate.addClass(getmenutogglefour, 'fadeOut animated');

            $animate.removeClass(getlogo, 'rollIn animated');
            $animate.addClass(getlogo, 'rollOut animated');
            $animate.removeClass(getnav, 'slideInDown animated');
            $animate.addClass(getnav, 'slideOutUp animated');
            $animate.leave(getpantones,function(){              
              $animate.removeClass(getmenutoggleone, 'fadeOut animated');
              $animate.removeClass(getmenutoggletwo, 'fadeOut animated');
              $animate.removeClass(getmenutogglethree, 'fadeOut animated');
              $animate.removeClass(getmenutogglefour, 'fadeOut animated');
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
          $scope.closemenulink = function closemenulink(item){
                $scope.gethref = item;
                console.log($scope.gethref);
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
                      $location.path($scope.gethref);
                    });
                });
              };
        });