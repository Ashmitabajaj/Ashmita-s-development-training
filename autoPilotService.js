angular.module('APService', []).factory('APContent', function () {

    var newMessage = 'auto pilot file content';
    var selectIdentifier = null;
    var selectPositionId = null;
    var selectRecruiterName= null;

    var apData = [{
        positionId: 10205,
    },
    {
        positionId: 10206,
    }
    ]

    var recData = [{
        positionId: 10205,
        identifier: "BNS000048798",
        recruiterName: 'Ashmita Bajaj',
    },

    {
        positionId: 10206,
        identifier: "BNS00001111",
        recruiterName: 'Sehaj Dhawan'
    }]

    return {
        newMessage: newMessage,
        apData: apData,
        recData: recData,
        selectRecruiterName : selectRecruiterName,
        selectPositionId: selectPositionId,
        selectIdentifier: selectIdentifier
    }
})