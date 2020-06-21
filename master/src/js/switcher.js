var regions = ["de", "gb", "ie"];

function setRegion(region) {
  document.cookie = "nf_country=" + region + ";path=/";
}

document.addEventListener("DOMContentLoaded", function () {
  var output = document.createElement("p");
  output.className = "text-center font-semibold text-gray-700 text-lg";

  for (var i = 0; i < regions.length; i++) {
    var region = regions[i];
    var link = document.createElement("a");
    link.className = "pr-2 underline";
    link.innerHTML = region;
    link.href = "#";
    link.onclick = function () {
      setRegion(region);
      window.location = "/";
      return false;
    };
    output.appendChild(link);
  }

  document.body.appendChild(output);
});
