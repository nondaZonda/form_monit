var zeroTime = 0;
var allStrokeData = [];
var data = null;

function InputData(name) {
    this.name = name;
    this.times = [];
    this.addStrokeTime = function (strokeTime) {
        this.times.push(strokeTime);
    };
}

function onInputFocus(event) {
    console.log('FOCUS on element: ' + event.srcElement.name);
    data = new InputData(event.srcElement.name);
    zeroTime = new Date().getTime();
}

function onInputBlur(event) {
    console.log('BLUR on element: ' + event.srcElement.name);
    allStrokeData.push(data);
    data = null;
}

function onKeyDown(event) {
    console.log('Naciśnięty klawisz: ' + event.key + ' w elemencie: ' + event.srcElement.name);
    var keyDownTime = new Date().getTime();
    var timeInterval = keyDownTime - zeroTime;
    console.log('Czas w milisekundach: ' + timeInterval)
    data.addStrokeTime(timeInterval);
    zeroTime = keyDownTime;
}

function onSubmit(event) {
    event.preventDefault();
    console.log(allStrokeData);
}

var form = document.getElementById('webForm');
form.addEventListener('keydown', onKeyDown);

var inputs = $(':input:not(:last)').on('focus', function () {
    onInputFocus(event);
});
inputs.on('blur', function () {
    onInputBlur(event);
});

var submit = document.getElementById('submit');
submit.addEventListener('click', onSubmit);
