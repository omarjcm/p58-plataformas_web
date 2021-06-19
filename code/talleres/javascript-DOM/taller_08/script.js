var offset = [0,0];
var divOverlay = document.getElementById ("overlay");
var isDown = false;

divOverlay.addEventListener('mousedown', function(e) {
    isDown = true;
    console.log('[mousedown]')
    console.log('offsetLeft: ' + divOverlay.offsetLeft + ' - ClientX: ' + e.clientX)
    console.log('offsetTop: ' + divOverlay.offsetTop + ' - ClientY: ' + e.clientY)
    offset = [
        divOverlay.offsetLeft - e.clientX,
        divOverlay.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(e) {
    console.log('[mousemove]')
    console.log('ClientX: ' + e.clientX + ' - offset[0]: ' + offset[0])
    console.log('ClientY: ' + e.clientY + ' - offset[1]: ' + offset[1])

    e.preventDefault();
    if (isDown) {
        divOverlay.style.left = (e.clientX + offset[0]) + 'px';
        divOverlay.style.top  = (e.clientY + offset[1]) + 'px';
    }
}, true);