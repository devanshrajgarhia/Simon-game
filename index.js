var a=["red","yellow","blue","green"];
var ans=[];
var num=1;
var user=[];
var i=0;

$(".btn").click(function(){

var x=this;
  $(this).addClass("pressed");

var music=x.getAttribute("id");
user.push(music);

 if(music==="green")
{ var audio=new Audio('sounds/green.mp3');
  audio.play();
}
else if(music==="red")
{ var audio=new Audio('sounds/red.mp3');
 audio.play();
}
if(music==="blue")
{ var audio=new Audio('sounds/blue.mp3');
 audio.play();
}
if(music==="yellow")
{ var audio=new Audio('sounds/yellow.mp3');
 audio.play();
}

//  console.log(music2);
  setTimeout(function(){$(x).removeClass("pressed");},100);

  var f=0;

  if(user[i]===ans[i])i++;
  else {
    f=1;
  }


if(f===0 && i===ans.length) {
  num++;
  setTimeout(game,1000)}

else if(f===1){
  $("h1").text("Game Over, Press a key to restart");
  var audio=new Audio('sounds/wrong.mp3');
  audio.play();
  $("body").addClass("game-over");
  setTimeout(function(){$("body").removeClass("game-over");},100);
}

})



function game()
{
    $("h1").text("Level " + num);
    user=[];
    i=0;
    var col=Math.random();
    col=col*4;
    col=Math.floor(col);
    ans.push(a[col]);
    console.log(a[col]);
    // setTimeout(function(){$("#"+a[col]).click();},1);

    var music=a[col];
    if(music==="green")
   { var audio=new Audio('sounds/green.mp3');
     audio.play();
   }
   else if(music==="red")
   { var audio=new Audio('sounds/red.mp3');
    audio.play();
   }
   if(music==="blue")
   { var audio=new Audio('sounds/blue.mp3');
    audio.play();
   }
   if(music==="yellow")
   { var audio=new Audio('sounds/yellow.mp3');
    audio.play();
   }
    $("#"+a[col]).fadeIn(100).fadeOut(100).fadeIn(100);


}

document.addEventListener("keypress",function(){ num=1;ans=[];game();});
