let convertBtn = document.getElementById("convertBtn");
let textToConvert = document.getElementById("textToConvert");
let imageResult = document.getElementById("image-result");

convertBtn.addEventListener("click", function() {
    console.log("Button clicked")
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://ai-image-generator14.p.rapidapi.com/',
        method: 'POST',
        headers: {
            'x-rapidapi-key': '6cb2fbf78amshb0e97f3e2bb665bp1a8fb2jsne04aa8626189',
		    'x-rapidapi-host': 'ai-image-generator14.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        processData: false,
        data: JSON.stringify({jsonBody:
            {function_name: "image_generator", 
            type: "image_generation", 
            query: textToConvert.value, 
            output_type: "png"}}),
        timeout: 60000
    };
    
    $.ajax(settings).done(function(response) {
        console.log("Full API response received:", response);
        // Check if response is a string and parse it if necessary
        if (typeof response === 'string') {
            response = JSON.parse(response);
        }

        // Accessing the output_png inside the "message" object
        const outputUrl = response.message?.output_png;

        // Check if output_png exists
        if (outputUrl) {
            imageResult.innerHTML = `<img src="${outputUrl}" alt="Generated Image">`;
        } else {
            console.error("No image URL found in the response");
            imageResult.innerHTML = "No image URL returned. Try again.";
        }
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error("API request failed:", textStatus, errorThrown); // Log if the request fails
        imageResult.innerHTML = "Error generating image. Try again.";
    });
});