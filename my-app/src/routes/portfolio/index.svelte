<script>
	let hidePopup = false;

	function closePopup() {
		hidePopup = true;
	}
</script>

<div id="popup" class:hidden={hidePopup}>
	<span on:click={closePopup} class="closebtn">&times;</span>
	<img id="expandedImg" />
	<div id="skeches" />
</div>

<div class="row gallery s12" id="gallery">
	<div class="col s4" />
	<!--
-->
	<div class="col s4" />
	<!--
-->
	<div class="col s4" />
</div>

<div id="background" />
