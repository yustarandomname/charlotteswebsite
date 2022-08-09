<!DOCTYPE html>
<html lang="en">
<head>
<?php include './elements/head.php';?>
</head>
<body>

<?php include './elements/menu.php';?>

<div id="popup">
  <span onclick="this.parentElement.style.display='none'" class="closebtn">&times;</span>
  <img id="expandedImg">
  <div id="skeches"></div>

</div>

<div class="row gallery s12" id="gallery">
  <div class="col s4"></div><!--
--><div class="col s4"></div><!--
--><div class="col s4"></div>
</div>

<div id="background"></div>


<script src="./js/script.js"></script>
<script src="./js/p5.min.js"></script>
<script src="./js/sketch.js"></script>
</body>
</html>