function isTouching(obj1, obj2){
    if(obj1.x-obj2.x < obj1.width/2+obj2.width/2 &&
       obj2.x-obj1.x < obj2.width/2+obj1.width/2&&
       obj1.y-obj2.y < obj1.width/2+obj2.width/2 &&
       obj2.y-obj1.y < obj2.width/2+obj1.width/2){
       return true;
    }else{
      return false;
    }
  }
  
  function bounceOff(obje1, obje2){
      if(obje1.x-obje2.x < obje1.width/2+obje2.width/2 &&
        obje2.x-obje1.x < obje2.width/2+obje1.width/2 ){
          obje1.shapeColor = "red";
         obje2.shapeColor = "blue";
         obje1.velocityX = obje1.velocityX*(-1);
      }else{
        obje1.shapeColor = "grey";
        obje2.shapeColor = "grey";
      }
      if( obje1.y-obje2.y < obje1.width/2+obje2.width/2 &&
        obje2.y-obje1.y < obje2.width/2+obje1.width/2){
          obje1.velocityY = obje1.velocityY*(-1);
      }
    }