function forLoop(array) {
  for (let i = 0; i < 25; i++)  {
    array.push(i);
    if(i === 1){
      "I am 1 strange loop.";
    }
    else{
      `I am ${i} strange loops.`;
    }
  }
  return array;
}

function whileLoop(number){
  while(number > 0){
    console.log(--number);
  }
  return "done"
}


