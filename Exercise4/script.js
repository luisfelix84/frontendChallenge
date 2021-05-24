const api = "https://api.imgflip.com/get_memes";

fetch(api)
    .then(res => res.json())
    .then(data => {
        HTMLContent = `<table>`

        for (let i = 0; i < 5; i++) {
            let memeImgURL = data.data.memes[i].url;

            HTMLContent += `<tr><td ><img display="inline" src="${memeImgURL}"></td> </tr>`
        }

        HTMLContent += `</table>`;


        document.getElementById("board").innerHTML = HTMLContent;

    })