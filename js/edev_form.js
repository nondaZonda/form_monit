var zeroTime = 0;
var data = null;
var allStrokeData = [];

function InputData(name) {
    this.name = name;
    this.times = [];
    this.addStrokeTime = function (strokeTime) {
        this.times.push(strokeTime);
    };
}

function onInputFocus(event) {
    data = new InputData(event.srcElement.name);
    zeroTime = new Date().getTime();
}

function onInputBlur(event) {
    allStrokeData.push(data);
    data = null;
}

function onKeyDown(event) {
    var keyDownTime = new Date().getTime();
    var timeInterval = keyDownTime - zeroTime;
    data.addStrokeTime(timeInterval);
    zeroTime = keyDownTime;
}

function onSubmit(event) {
    event.preventDefault();

    for (i = 0; i < allStrokeData.length; i++) {
        $inputName = allStrokeData[i].name;
        $timeData = allStrokeData[i].times;

        var pElement = document.createElement('p');
        pElement.innerHTML = 'Dla pola o nazwie: <b>' + $inputName + '</b><br/>' +
            'mamy takie czasy (w milisekundach): ' + $timeData;
        document.getElementById('info').appendChild(pElement);
    }
}

var inputs = $(':input:not(:last)').on('focus', function () {
    onInputFocus(event);
});
inputs.on('blur', function () {
    onInputBlur(event);
});
$('#webForm').on('keydown', function () {
    onKeyDown(event);
});
$('#submit').on('click', function () {
    onSubmit(event);
});
$('#reset').on('click', function () {
    $('#info').empty();
    $(':input').filter(function (t) {
        return $(this).attr('type') === 'text'
    }).val('');
    allStrokeData = [];
});
