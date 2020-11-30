var images = [
    "https://in.images.search.yahoo.com/search/images;_ylt=AwrPg3L1U7Zf0FcAv1m7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=my+family+png&fr2=piv-web&fr=crmas#id=1&iurl=https%3A%2F%2Ffanart.tv%2Ffanart%2Ftv%2F74438%2Fclearlogo%2FMyFamily-74438-2.png&action=click>",
    "",
    "OHMAGAD.jpeg""
    "image.jpg"
    "yes.JPEG"
    "YESSIR.jpeg"
    "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_07.png",
    "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_08.png",
    "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_09.png",
    "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_10.png",
];

var i = 0;

function nextslide() {

    if (i == 9) {
        i = 0;
    }

    document.getElementById("album").src = images[i];
    i++;

}