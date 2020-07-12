
  // Change Box Color
  function changeColor(box,color01,color02) {
    document.getElementById(box).style.backgroundColor = color01;
    document.getElementById(box).style.borderColor = color02;
  }

  // Change All Colors
  function changeAll() {
    document.getElementById('box01').style.backgroundColor = '#90BE6D';
    document.getElementById('box01').style.borderColor = '#F9C74F';

    document.getElementById('box02').style.backgroundColor = '#F9C74F';
    document.getElementById('box02').style.borderColor = '#BC3908';

    document.getElementById('box03').style.backgroundColor = '#BC3908'
    document.getElementById('box03').style.borderColor = '#90BE6D';
  }

  // Hide Boxes
  function hide(box) {
    document.getElementById(box).style.visibility = "hidden";
  }

  // Hide All Button
  function hideAll() {
    document.getElementById('box01').style.visibility = "hidden";
    document.getElementById('box02').style.visibility = "hidden";
    document.getElementById('box03').style.visibility = "hidden";
  }

  // Reset Colors
  function colorReset() {
    document.getElementById('box01').style.backgroundColor = 'red';
    document.getElementById('box01').style.borderColor = 'black';

    document.getElementById('box02').style.backgroundColor = 'blue';
    document.getElementById('box02').style.borderColor = 'yellow';

    document.getElementById('box03').style.backgroundColor = 'lawngreen';
    document.getElementById('box03').style.borderColor = 'magenta';
  }

  // Show All Boxes
  function showAll() {
    document.getElementById('box01').style.visibility = "visible";
    document.getElementById('box02').style.visibility = "visible";
    document.getElementById('box03').style.visibility = "visible";
  }
