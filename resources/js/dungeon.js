function pageLoad() {
    checkSettings();
}

function checkSettings(){
    let minRoomSizeInput = $('#min-room-size');
    let maxRoomSizeInput = $('#max-room-size');
    let roomPlacementAttemptsInput = $('#room-placement-attempts');
    let extraRoomConnectionsInput = $('#extra-room-connections');
    alert(minRoomSizeInput + " " + maxRoomSizeInput);
    minRoomSizeInput.on('input', event => {
        $('label[for=min-room-size] > .value').text(minRoomSizeInput.val());
        if (parseInt(maxRoomSizeInput.val()) < parseInt(minRoomSizeInput.val())) {
            maxRoomSizeInput.val(minRoomSizeInput.val());
            $('label[for=max-room-size] > .value').text(maxRoomSizeInput.val());
        }
    });
    maxRoomSizeInput.on('input', event => {
        $('label[for=max-room-size] > .value').text(maxRoomSizeInput.val());
        if (parseInt(minRoomSizeInput.val()) > parseInt(maxRoomSizeInput.val())) {
            minRoomSizeInput.val(maxRoomSizeInput.val());
            $('label[for=min-room-size] > .value').text(minRoomSizeInput.val());
        }
    });
    roomPlacementAttemptsInput.on('input', event => {
        $('label[for=room-placement-attempts] > .value').text(roomPlacementAttemptsInput.val());
    });
    extraRoomConnectionsInput.on('input', event => {
        $('label[for=extra-room-connections] > .value').text(extraRoomConnectionsInput.val());
    });
}