
$( ".box" ).click(function() {
  $( this ).addClass( "selected" ).siblings(".selected").removeClass("selected");
  
});

$(".submit").click(function() {
  
  var n1 = $(".a.selected").length;
  var n2 = $(".b.selected").length;
  var n3 = $(".c.selected").length; 
  var n4 = $(".d.selected").length;
  var n5 = $(".e.selected").length;
  var n6 = $(".f.selected").length;
  var n7 = $(".g.selected").length;
  var n8 = $(".h.selected").length;
  var n9 = $(".i.selected").length;
  
  
  //Spring no wind
  if ((n1 >= n2)&&(n1 >= n3)&&(n4 >= n5)&&(n4 >= n6)&&(n7 >=n8)&&(n7 >=n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Ned Rig, Drop Shot, Jig, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait <br> Colors: <br >Soft Plastics: Whites, Greens, or Naturals <br> Hard Baits: Translucent or Red ");
  }
  if ((n1 > n2)&&(n1 > n3)&&(n5 > n4)&&(n5 > n6)&&(n7 >n8)&&(n7 >n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Ned Rig, Drop Shot, Jig, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait <br> Colors: <br >Soft Plastics: Green and Red/Blue Flake  <br> Hard Baits: Silver, Gold, or Red  ");
  }
  if ((n1 > n2)&&(n1 > n3)&&(n6 > n4)&&(n6 > n5)&&(n7 >n8)&&(n7 >n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Ned Rig, Drop Shot, Jig, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait <br> Colors: <br >Soft Plastics: Black and Blue <br> Hard Baits: Silver, or Black ");
  }
  //Spring light wind
  if ((n1 >= n2)&&(n1 >= n3)&&(n4 >= n5)&&(n4 >= n6)&&(n8 >n7)&&(n8 >n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Jig, Spinnerbait, Chatterbait, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait <br> Colors: <br >Soft Plastics: Whites, Greens, or Naturals <br> Hard Baits: Translucent or Red ");
  }
  if ((n1 > n2)&&(n1 > n3)&&(n5 > n4)&&(n5 > n6)&&(n8 >n7)&&(n8 >n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Jig, Spinnerbait, Chatterbait, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait <br> Colors: <br >Soft Plastics: Green and Red/Blue Flake  <br> Hard Baits: Silver, Gold, or Red  ");
  }
  if ((n1 > n2)&&(n1 > n3)&&(n6 > n4)&&(n6 > n5)&&(n8 >n7)&&(n8 >n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Jig, Spinnerbait, Chatterbait, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait <br> Colors: <br >Soft Plastics: Black and Blue  <br> Hard Baits: Silver or Black ");
  }
  //Spring heavy wind
  if ((n1 >= n2)&&(n1 >= n3)&&(n4 >= n5)&&(n4 >= n6)&&(n9 >=n8)&&(n9 >=n7)) {
    $( "span" ).html("Lures:<br> Weighted Texas Rig, Jig, Spinnerbait, Chatterbait <br> Colors: <br >Soft Plastics: Whites, Greens, or Naturals <br> Hard Baits: Translucent or Red ");
  }
  if ((n1 > n2)&&(n1 > n3)&&(n5 > n4)&&(n5 > n6)&&(n9 >n8)&&(n9 >n7)) {
    $( "span" ).html("Lures:<br> Weighted Texas Rig, Jig, Spinnerbait, Chatterbait <br> Colors: <br >Soft Plastics: Green and Red/Blue Flake  <br> Hard Baits: Silver, Gold, or Red  ");
  }
  if ((n1 > n2)&&(n1 > n3)&&(n6 > n4)&&(n6 > n5)&&(n9 >n8)&&(n9 >n7)) {
    $( "span" ).html("Lures:<br> Weighted Texas Rig, Jig, Spinnerbait, Chatterbait <br> Colors: <br >Soft Plastics: Black and Blue Flake  <br> Hard Baits: Silver or Black  ");
  }
  //Summer no wind
  if ((n2 >= n1)&&(n2 >= n3)&&(n4 >= n5)&&(n4 >= n6)&&(n7 >=n8)&&(n7 >=n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Ned Rig, Drop Shot, Jig, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait, Frog, Topwater <br> Colors: <br >Soft Plastics: Whites, Greens, or Naturals <br> Hard Baits: Translucent or White ");
  }
  if ((n2 > n1)&&(n2 > n3)&&(n5 > n4)&&(n5 > n6)&&(n7 >n8)&&(n7 >n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Ned Rig, Drop Shot, Jig, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait, Frog, Topwater <br> Colors: <br >Soft Plastics: Green and Red/Blue Flake  <br> Hard Baits: Silver or Gold");
  }
  if ((n2 > n1)&&(n2 > n3)&&(n6 > n4)&&(n6 > n5)&&(n7 >n8)&&(n7 >n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Ned Rig, Drop Shot, Jig, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait, Frog, Topwater <br> Colors: <br >Soft Plastics: Black and Blue <br> Hard Baits: Silver, or Black ");
  }
  //Summer light wind
  if ((n2 > n1)&&(n2 > n3)&&(n4 >= n5)&&(n4 >= n6)&&(n8 >n7)&&(n8 >n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Jig, Spinnerbait, Chatterbait, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait, Frog, Topwater <br> Colors: <br >Soft Plastics: Whites, Greens, or Naturals <br> Hard Baits: Translucent or White ");
  }
  if ((n2 > n1)&&(n2 > n3)&&(n5 > n4)&&(n5 > n6)&&(n8 >n7)&&(n8 >n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Jig, Spinnerbait, Chatterbait, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait, Frog, Topwater <br> Colors: <br >Soft Plastics: Green and Red/Blue Flake  <br> Hard Baits: Silver or Gold  ");
  }
  if ((n2 > n1)&&(n2 > n3)&&(n6 > n4)&&(n6 > n5)&&(n8 >n7)&&(n8 >n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Jig, Spinnerbait, Chatterbait, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait, Frog, Topwater <br> Colors: <br >Soft Plastics: Black and Blue  <br> Hard Baits: Silver or Black ");
  }
  //Summer heavy wind
  if ((n2 > n1)&&(n2 > n3)&&(n4 >= n5)&&(n4 >= n6)&&(n9 >=n8)&&(n9 >=n7)) {
    $( "span" ).html("Lures:<br> Weighted Texas Rig, Jig, Spinnerbait, Chatterbait <br> Colors: <br >Soft Plastics: Whites, Greens, or Naturals <br> Hard Baits: Translucent or White ");
  }
  if ((n2 > n1)&&(n2 > n3)&&(n5 > n4)&&(n5 > n6)&&(n9 >n8)&&(n9 >n7)) {
    $( "span" ).html("Lures:<br> Weighted Texas Rig, Jig, Spinnerbait, Chatterbait <br> Colors: <br >Soft Plastics: Green and Red/Blue Flake  <br> Hard Baits: Silver, or Gold");
  }
  if ((n2 > n1)&&(n2 > n3)&&(n6 > n4)&&(n6 > n5)&&(n9 >n8)&&(n9 >n7)) {
    $( "span" ).html("Lures:<br> Weighted Texas Rig, Jig, Spinnerbait, Chatterbait <br> Colors: <br >Soft Plastics: Black and Blue Flake  <br> Hard Baits: Silver or Black  ");
  }
  //Fall no wind
  if ((n3 > n1)&&(n3 > n2)&&(n4 >= n5)&&(n4 >= n6)&&(n7 >=n8)&&(n7 >=n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Ned Rig, Drop Shot, Jig, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait, Frog, Topwater <br> Colors: <br >Soft Plastics: Whites, Greens, or Naturals <br> Hard Baits: Translucent or White ");
  }
  if ((n3 > n1)&&(n3 > n2)&&(n5 > n4)&&(n5 > n6)&&(n7 >n8)&&(n7 >n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Ned Rig, Drop Shot, Jig, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait, Frog, Topwater <br> Colors: <br >Soft Plastics: Green and Red/Blue Flake  <br> Hard Baits: Silver or Gold");
  }
  if ((n3 > n1)&&(n3 > n2)&&(n6 > n4)&&(n6 > n5)&&(n7 >n8)&&(n7 >n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Ned Rig, Drop Shot, Jig, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait, Frog, Topwater <br> Colors: <br >Soft Plastics: Black and Blue <br> Hard Baits: Silver, or Black ");
  }
  //Fall light wind
  if ((n3 > n1)&&(n3 > n2)&&(n4 >= n5)&&(n4 >= n6)&&(n8 >n7)&&(n8 >n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Jig, Spinnerbait, Chatterbait, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait, Frog, Topwater <br> Colors: <br >Soft Plastics: Whites, Greens, or Naturals <br> Hard Baits: Translucent or White ");
  }
  if ((n3 > n1)&&(n3 > n2)&&(n5 > n4)&&(n5 > n6)&&(n8 >n7)&&(n8 >n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Jig, Spinnerbait, Chatterbait, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait, Frog, Topwater <br> Colors: <br >Soft Plastics: Green and Red/Blue Flake  <br> Hard Baits: Silver or Gold  ");
  }
  if ((n3 > n1)&&(n3 > n2)&&(n6 > n4)&&(n6 > n5)&&(n8 >n7)&&(n8 >n9)) {
    $( "span" ).html("Lures:<br> Texas Rig, Wacky Rig, Jig, Spinnerbait, Chatterbait, Lipless Crankbait, Crankbait, Squarebill Crankbait, Jerkbait, Swimbait, Frog, Topwater <br> Colors: <br >Soft Plastics: Black and Blue  <br> Hard Baits: Silver or Black ");
  }
  //Fall heavy wind
  if ((n3 > n1)&&(n3 > n2)&&(n4 >= n5)&&(n4 >= n6)&&(n9 >=n8)&&(n9 >=n7)) {
    $( "span" ).html("Lures:<br> Weighted Texas Rig, Jig, Spinnerbait, Chatterbait <br> Colors: <br >Soft Plastics: Whites, Greens, or Naturals <br> Hard Baits: Translucent or White ");
  }
  if ((n3 > n1)&&(n3 > n2)&&(n5 > n4)&&(n5 > n6)&&(n9 >n8)&&(n9 >n7)) {
    $( "span" ).html("Lures:<br> Weighted Texas Rig, Jig, Spinnerbait, Chatterbait <br> Colors: <br >Soft Plastics: Green and Red/Blue Flake  <br> Hard Baits: Silver, or Gold");
  }
  if ((n3 > n1)&&(n3 > n2)&&(n6 > n4)&&(n6 > n5)&&(n9 >n8)&&(n9 >n7)) {
    $( "span" ).html("Lures:<br> Weighted Texas Rig, Jig, Spinnerbait, Chatterbait <br> Colors: <br >Soft Plastics: Black and Blue Flake  <br> Hard Baits: Silver or Black  ");
  }
  
  //if ((n2 > n1)&&(n2 >= n3)&&(n2 >= n4)) {
    //$( "span" ).html("You are BRILLIANT") ;
  //}
    
  //if ((n3 > n1)&&(n3 > n2)&&(n3 >= n4)) {
    //$( "span" ).html("You are CRAP");
  //}
    
 // if ((n4 > n1)&&(n4 > n2)&&(n4 > n3)) {
   // $( "span" ).html("You are DELIGHTFUL");
  //}
		
});