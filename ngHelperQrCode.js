var ngHelperQrCode = angular.module('ngHelperQrCode', []);

ngHelperQrCode.directive('nghelperqrcode', [ function() {

    return {
        template: "<div></div>",
        restrict: 'A',
        scope: {
            size: "="
        },
        link: function (scope, element, attrs) {

            // establish observer
            attrs.$observe('nghelperqrcode', function() {

                // remove all childs of target element
                angular.element(element[0]).empty();

                // generate the qr code
                new QRCode(element[0], {text: attrs.nghelperqrcode, width:scope.size, height:scope.size});
            });
        }
    }
}]);
