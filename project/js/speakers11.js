var mySpeakerId = 0;

function getSide1() {
    $.ajax({
        url: 'https://speakershopapp.azurewebsites.net/api/speakers?CurrentPage=1&ItemsPrPage=8',
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

    $("#product_area").html("");
    // Iterate over the collection of data
    $.each(speakers, function (index, speaker) {

        $("#product_area").append(

            " <div class=\"product\">\n" +
            "                        <div id=\"product_title\">\n" +
            "                                <h3>"+speaker.speakerName+"</h3>\n" +
            "                            </div>\n" +
            "                        <div class=\"product_img\">\n" +
            "                           <img src=" + speaker.url +" alt=\"\">\n" +
            "                        </div>\n" +
            "                        \n" +
            "                        <div id=\"product_desc\">\n" +
            "                           <p> "+ speaker.speakerDescription +" <br/> </p>\n" +
            "                        </div>\n" +
            "                        <div id=\"product_price\">\n" +
            "                                <p> "+ speaker.price + ",- /STK "+ " </p>\n" +
            "                            </div>\n" +
            "                        <div id=\"product_shop_buy\">\n" +
            "                          \n" +
            "                            <div id=\"product_cart\">\n" +
            "                            <a href=\"#\">\n" +
            "                                    <i class=\"fas fa-shopping-cart\"></i>\n" +
            "                            </a>\n" +
            "                            </div>\n" +
            "                            <div id=\"product_info\">\n" +
            "                                    <button onclick=getSpeakersById("+ speaker.speakerId +",'viewproduct.html');>MORE INFO</button>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                </div>")
    });
}


function getSpeakersById(id, url) {
    window.open(url,"_self");

    $.ajax({
        url: 'https://speakershopapp.azurewebsites.net/api/speakers/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (speakers) {
            onGetSpeakersByIdSuccess(speakers);
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}

function onGetSpeakersByIdSuccess(speaker) {
    $("#product_view").html("");

    $("#product_view").append("<div class=\"product_view\">\n" +
        "            <div id=\"img_info\">\n" +
        "                <div id=\"product_view_img\">\n" +
        "                    <img src=" + speaker.url +" alt=\"\">\n" +
        "                </div>\n" +
        "                <div id=\"product_information\">\n" +
        "                    <h5>Information</h5>\n" +
        "                    <p>\n" +
        "                    <b>"+speaker.speakerDescription+"</b><br/>\n" +
        "                    </p>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "            <div id=\"title_detail\">\n" +
        "                <div id=\"product_view_title\">\n" +
        "                    <h3>"+speaker.speakerName+"</h3>\n" +
        "                    <p>The new Ada 1030X model contains a 360<br/>\n" +
        "                    sound system and connects with bluetooth.<br/>\n" +
        "                    It’s waterproof and comes in a new stylish<br/>\n" +
        "                    design with different colors. \n" +
        "                    </p>\n" +
        "                </div>\n" +
        "\n" +
        "                                \n" +
        "            <form>\n" +
        "                Quantity\n" +
        "                <input type=\"number\" name=\"quantity\" min=\"1\" max=\"5\">\n" +
        "            </form>\n" +
        "                   \n" +
        "\n" +
        "                <div id=\"product_buy_item\">\n" +
        "                    <div id=\"product_price\">\n" +
        "                        <p class=\"detail_price\">"+speaker.price+"</p>\n" +
        "                    </div>\n" +
        "                    <div id=\"product_cart\">\n" +
        "                    <a href=\"#\">\n" +
        "                        <i class=\"fas fa-shopping-cart\"></i>\n" +
        "                    </a>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "\n" +
        "                <div id=\"stock\">\n" +
        "                    <div id=\"stock_text\">\n" +
        "                        In stock online\n" +
        "                    </div>\n" +
        "                    <div id=\"stock_status\"></div>\n" +
        "                </div>\n" +
        "\n" +
        "                <div id=\"product_detail\">\n" +
        "                    <h5>Product detail</h5>\n" +
        "                    <p>\n" +
        "                    <b>"+speaker.speakerName+"</b><br/>\n" +
        "                     - Bluetooth 4.0<br/>\n" +
        "                    - On-speaker betjening<br/> \n" +
        "                    - Chargeable battery 2200mAh (12 hours<br/>   \n" +
        "                    streaming).<br/>\n" +
        "                    - Charging time 4 hours<br/>\n" +
        "                    - Output power: 2x15W (30W)<br/>\n" +
        "                    - LED indikator<br/>\n" +
        "                    - USB with 5V <br/>\n" +
        "                    - Measurements: 310 x 160 x 80 mm<br/>\n" +
        "                    - Weight: 2153g<br/>\n" +
        "                    - AC/DC adapter included, AC230 ~50Hz<br/>\n" +
        "                    <br/>\n" +
        "                    <b>Box</b><br/>\n" +
        "                    1 x Ada 1030X speaker<br/>\n" +
        "                    1 x AC/DC adapter<br/>\n" +
        "                    1 x mini-jack cabel<br/>\n" +
        "                    1 x small bag\n" +
        "                    </p>\n" +
        "                </div>            \n" +
        "            </div>"

    )
}

function getSide2(){
    $.ajax({
        url: 'https://speakershopapp.azurewebsites.net/api/speakers?CurrentPage=2&ItemsPrPage=8',
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