/**
 * Created by bear on 6/20/16.
 */

(function () {

  'use strict';

  function testService ($http) {
    var baseUrl = 'https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json';
    var Data = {
      Country: '',
      City: ''
    };

    var getCountriesData = function(callback) {
      return $http({
        method: 'get',
        url: baseUrl,
        params: ''
      }).then(
        function successCallback(response) {
          callback(response);
        }, function errorCallback(response) {
          callback(response);
        }
      );
    };

    var putFirstData = function (country, city, callback) {
      Data.Country = country;
      Data.City = city;
      callback();
    };

    var getFirstData = function () {
      return Data;
    };

    var submitInfo = function(data, callback) {
      var url = 'https://www.send.com/api?user=1';
      return $http.post(url, data).then(
        function successCallback(response) {
          console.log('subInfo-success = ', response);
          callback(response);
        }, function errorCallback(response) {
          console.log('submitInfo-error-response = ', response);
          callback(response);
        }
      );
    };

    var testServices = {
      getCountriesData: getCountriesData,
      putFirstData: putFirstData,
      getFirstData: getFirstData,
      submitInfo: submitInfo
    };

    return testServices;
  }

  angular
    .module('RTMSApp')
    .factory('testService', testService);
})();
