var counter = 0;
const picture = document.getElementById('comicImg');

function imgTest()
{
    if (counter % 2 == 0) 
    {
        document.getElementById("comicImg").src = "styles/images/clown.jpg";
        document.getElementById("clownStatus").innerHTML = "clown is happy now";
        document.getElementById("clownStatus").style.fontFamily = "Comic Sans MS, sans";
        document.getElementById("bannerTextArea").style.fontFamily = "Comic Sans MS, sans";
        document.getElementById("bannerTextArea").style.color = "red";

        counter++;
    }
    else 
    {
        document.getElementById("comicImg").src = "styles/images/sad.jpg";
        document.getElementById("clownStatus").innerHTML = "clown is sad now";
        document.getElementById("clownStatus").style.fontFamily = "Times New Roman, Times, serif";
        document.getElementById("bannerTextArea").style.fontFamily = "Times New Roman, Times, serif";
        document.getElementById("bannerTextArea").style.color = "black";
        counter++;
    }

}
picture.addEventListener('mouseenter', imgTest);