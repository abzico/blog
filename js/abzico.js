/* app level js code */
var abzico = {
	onResize: function() {
		var w = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;

		if (w >= 768) {
			var qrcodeImage = document.getElementById("topQRCodeImage");
			qrcodeImage.style.width = "90px";
		}
		else {
			var qrcodeImage = document.getElementById("topQRCodeImage");
			qrcodeImage.style.width = "60px";
		}
	}
};

(function() {
	window.addEventListener("load", abzico.onResize);
	window.addEventListener("resize", abzico.onResize);
}());

window.abzico = abzico;