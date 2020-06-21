var regions = ["de", "gb", "ie"];

function setRegion(region) {
  console.debug("Set region to: " + region);
  document.cookie = "nf_country=" + region + ";path=/;SameSite=Strict;Secure";
  window.location = "/";
  return false;
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
    link.onclick = setRegion.bind(this, region);
    output.appendChild(link);
  }

  document.body.appendChild(output);
});
