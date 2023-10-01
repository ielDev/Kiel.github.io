const container = document.querySelector("#container")
var nxt = 0;
var accepted = 0;

preload_image("Dizzy_dance.gif")
preload_image("Dizzy_end.gif")
preload_image("Dizzy_laugh.gif")
preload_image("Dizzy_rain.gif")
preload_image("Dizzy_rub.gif")
preload_image("Dizzy_surprise.gif")
preload_image("Dizzy_wow.gif")
preload_image("Dizzy.gif")
preload_image("placeholder.png")





container.addEventListener("click", e => {

    console.log("Mouse Clicked!")

var nameData = document.getElementById("nameInput").value.trim();
console.log(nameData)

 if(nameData != ""){
   console.log("Accepted!")
   accepted = 1;
   document.getElementById("Name").style.display = "none";

}
 if(accepted == 1){
     
    nxt += 1;

    switch(nxt){
      case 1:
        document.getElementById("Text").innerHTML = "Hello " + nameData + "! My name is Kiel, the programmer of this website"
        break;
      case 2:
        document.getElementById("Text").innerHTML = "I made this as a practice for our future research project. I'm only a beginner so this website will be buggy so sorry in advance for that!"
        break;
      case 3:
        document.getElementById("Text").innerHTML = "And btw, this website will be telling a short story that includes YOU as a main character!"
        break;
      case 4:
        document.getElementById("Text").innerHTML = "Hope you like it!"
        break;
      case 5:
        fade(document.getElementById("Text"))
        setTimeout(() => {unfade(document.getElementById("Text"))
        document.getElementById("Text").innerHTML = "Dizzy and " + nameData + " - A Timeless Friendship "
        document.getElementById("Text").style.fontSize = "3rem"}, 2000);
        break;
      case 6:
        document.getElementById("Text").innerHTML = "One sunny morning, as I ventured through the prehistoric forest, I stumbled upon something truly remarkable—a cute, blue-scaled dinosaur named Dizzy."
        document.getElementById("Text").style.fontSize = "2rem"
        break;
      case 7:
        document.getElementById("Text").innerHTML = "Dizzy was the friendliest dinosaur I had ever seen, with the biggest, roundest eyes."
        break;
      case 8:
        document.getElementById("Img").src = "Dizzy.gif"
        document.getElementById("Text").innerHTML = ""
        break;
      case 9:
        document.getElementById("Img").src = "placeholder.png"
        document.getElementById("Text").innerHTML = "Dizzy was known throughout the land for being the friendliest dinosaur anyone had ever met."
        break;
      case 10:
        document.getElementById("Text").innerHTML = "One sunny morning, Dizzy was exploring the lush, prehistoric forest when they stumbled upon something they had never seen before - a human!"
        break;
      case 11:
        document.getElementById("Text").innerHTML = "The human was " + nameData + ", and " + nameData + " were just as surprised to see Dizzy. Them eyes widened with amazement as they looked at this cute, friendly dinosaur."
        break;
      case 12:
        document.getElementById("Img").src = "Dizzy_surprise.gif"
        document.getElementById("Text").innerHTML = ""
        break;
      case 13:
       document.getElementById("Img").src = "placeholder.png"
       document.getElementById("Text").innerHTML = "Dizzy, with their heartwarming smile, approached "+ nameData + " cautiously, their long tail wagging with excitement. they were a bit nervous at first, but Dizzy's gentle and kind demeanor quickly put them at ease."
       break;
      case 14:
        document.getElementById("Text").innerHTML = nameData + " extended them hand, and Dizzy nuzzled it affectionately, showing their trust."
        break;
      case 15:
        document.getElementById("Img").src = "Dizzy_rub.gif"
        document.getElementById("Text").innerHTML = ""
        break;
      case 16:
        document.getElementById("Text").innerHTML = "From that moment on, an incredible friendship blossomed between "+ nameData + " and Dizzy. "
        document.getElementById("Img").src = "placeholder.png"
        break;
      case 17:
        document.getElementById("Text").innerHTML = "They spent their days exploring the prehistoric world together, discovering hidden waterfalls, secret caves, and magnificent plants. "
        break;
      case 18:
        document.getElementById("Text").innerHTML = "Dizzy would playfully chase after butterflies, and "+ nameData + " would laugh at they clumsy but adorable attempts to catch them."
        break;
      case 19:
        document.getElementById("Img").src = "Dizzy_laugh.gif"
        document.getElementById("Text").innerHTML = ""
        break;
      case 20:
        document.getElementById("Img").src = "placeholder.png"
        document.getElementById("Text").innerHTML = "As days turned into weeks and weeks into months," + nameData +  "s bond with Dizzy grew stronger. they learned to communicate in your own unique way, and Dizzy would even teach them some dinosaur dance moves."
        break;
      case 21:
        document.getElementById("Text").innerHTML = ""
        document.getElementById("Img").src = "Dizzy_dance.gif"
        break;
      case 22:
        document.getElementById("Img").src = "placeholder.png"
        document.getElementById("Text").innerHTML = "Together," +nameData+ " and Dizzy became a symbol of the harmonious coexistence between humans and dinosaurs. <3"
        break;
      case 23:
        document.getElementById("Text").innerHTML = "One day, a storm rolled in, and " + nameData + " and Dizzy took shelter in a cozy cave. As the rain poured outside, they shared stories and laughter, feeling grateful for the wonderful friendship that had formed between them."
        document.body.style.background = "#403D3D";
        break;
      case 24:
        document.getElementById("Text").innerHTML = "Dizzy's soft, rhythmic purring was like a lullaby, and "+ nameData + " fell asleep, knowing they were safe and loved."
        break;
      case 25:
        document.getElementById("Text").innerHTML = ""
        document.getElementById("Img").src = "Dizzy_rain.gif"

        break;
      case 26:
        document.getElementById("Img").src = "placeholder.png"
        document.getElementById("Text").innerHTML = nameData +"'s story with Dizzy became legendary in the land of dinosaurs. It was a heartwarming tale of two unlikely friends who defied the odds and showed that love and friendship knew no boundaries."
        document.body.style.background = "#FFD89C";
        break;
      case 27:
        document.getElementById("Text").innerHTML = "People from all around came to witness the wholesome bond between a cute dinosaur and " + nameData + "."
        break;
      case 28:
        document.getElementById("Text").innerHTML = ""
        document.getElementById("Img").src = "Dizzy_wow.gif"
        break;
      case 29:
        document.getElementById("Text").innerHTML = "And so, in the heart of a prehistoric world, you and Dizzy continued your adventures together, proving that even in a time long ago,"
        document.getElementById("Img").src = "placeholder.png"
        break;
      case 30:
        document.getElementById("Text").innerHTML = "love and friendship were timeless and beautiful, just like your special connection with the adorable dinosaur who had captured your heart."
        break;
      case 31:
        document.getElementById("Text").innerHTML = "<br><br><br><br><br>-The End-"
        document.getElementById("Text").style.fontSize = "3rem"
        document.getElementById("Img").src = "Dizzy_end.gif"
        break;
      case 32:
        document.getElementById("Text").innerHTML = "Thank you for reading my short story!"
        document.getElementById("Text").style.fontSize = "2rem"
        document.getElementById("Img").src = "placeholder.png"
        break;
      case 33:
        document.getElementById("Text").innerHTML = "This website will now do nothing if you tap it again. You can now exit the Web. <br><br> Thank you again!! -Kiel"
        break;
      case 33:
        document.getElementById("Text").innerHTML = "Why did you tap again? I said it won't do anything, just exit the web blud"
        break;
      case 34:
        document.getElementById("Text").innerHTML = "Okay stop."
        break;
      case 35:
        document.getElementById("Text").innerHTML = "Stop."
        break;
      case 35:
        document.getElementById("Text").innerHTML = "Stooooop."
        break;
      case 36:
        document.getElementById("Text").innerHTML = "papansim ampt haha kala mo talaga e"
        break;
      case 37:
        document.getElementById("Text").innerHTML = "Par naman o, sabi ko sayo luddy wala na ngang gagawin dito, kung gusto mo pagpatuloy mo na ginagawa mo kanina haha."
        break;
      case 38:
        document.getElementById("Text").innerHTML = "NgeK!! Grabe ka naman kuys nandito ka parin, wala ka na ngang makikita dito nako. <br> lilipat na nga lang kita sa ibang web"
        setTimeout(function(){window.location.href = "https://en.wikipedia.org/wiki/Riemann_hypothesis"}, 3000);
        break;
    }

 }
})

function fade(element) {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, 50);
}

function unfade(element) {
  var op = 0.1;  // initial opacity
  element.style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 10);
}

function preload_image(im_url) {
  let img = new Image();
  img.src = im_url;
}






  


