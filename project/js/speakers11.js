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




function onGetSpeakersSuccess(speakers) {

    $("#product_area").html("");
    // Iterate over the collection of data
    $.each(speakers, function (index, speaker) {

        $("#product_area").append(

            " <div class=\"product\">\n" +
            "                        <div id=\"product_title\">\n" +
            "                                <h3>"+speaker.speakerName+"</h3>\n" +
            "                            </div>\n" +
            "                        <div id=\"product_img\">\n" +
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
            "                                    <a href=\"#\">MORE INFO</a>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                </div>")

    });
}