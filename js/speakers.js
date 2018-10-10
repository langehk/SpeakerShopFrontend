function listSpeakers() {
    // Call Web API to get a list of post
    $.ajax({
        url: 'http://speakershopapp.azurewebsites.net/api/speakers',
        type: 'GET',
        dataType: 'json',
        success: function (speakers) {
            onGetSpeakersSuccess(speakers);
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}

function onGetSpeakersSuccess(speakers) {
    if ($("#speakersTable tbody").length == 0) {
        $("#speakersTable").append("<tbody></tbody>");
    }
    $("#speakersTable tbody").empty();
    // Iterate over the collection of data
    $.each(speakers, function (index, speaker) {
        // Add a row to the post table
        addSpeakerRow(speaker);
    });
}

function addSpeakerRow(speaker) {
    // Check if <tbody> tag exists, add one if not
    // Append row to <table>
    $("#speakersTable tbody").append(
        buildSpeakerRow(speaker));
}

function buildSpeakerRow(speaker) {
    var ret =
        "<tr>" +
        "<td>" + speaker.speakerId + "</td>" +
        "<td>" + speaker.speakerName + "</td>" +
        "<td>" + speaker.speakerDescription + "</td>" +
        "<td>" + speaker.color + "</td>" +
        "<td>" + speaker.price + "</td>" +
        "<td>" + speaker.url + "</td>" +
        "<td>" + speaker.brand + "</td>" +

        "<td>" +
        "<button type='button' " +
        "class='btn btn-info' " +
        "data-id='" + speaker.id + "'>" +
        "<i class='fas fa-info-circle'></i>" +
        "</button>" +
        "</td >" +
        "<td>" +
        "<button type='button' " +
        "class='btn btn-danger' " +
        "data-id='" + speaker.id + "'>" +
        "<i class='fas fa-minus-circle'></i>" +
        "</button>" +
        "</td >" +
        "</tr>";
    return ret;
}

$('#speakerTable').on('click', 'button', event => {
    getOrders(event.currentTarget);
});


$('#myForm').on('submit',function(e){
    e.preventDefault();
    var speakerName = $( "#speakerName" ).val();
    var speakerDescription = $( "#speakerDescription" ).val();
    var brand = $( "#brand" ).val();
    var color = $( "#color" ).val();
    var price = $( "#price" ).val();
    var url = $( "#url" ).val();



    // In my case, I need to fetch these data before custom actions
    $.ajax({
        url: "http://speakershopapp.azurewebsites.net/api/speakers",
        type: 'POST',
        data: JSON.stringify({
            "speakerName": speakerName,
            "speakerDescription": speakerDescription,
            "brand" : brand,
            "color": color,
            "price" : price,
            "url" : url

        }),
        processData: false,
        contentType: 'application/json',
        success: function (comments) {
            console.log("Yiiiaaaahhhhaaaaaa");
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
});