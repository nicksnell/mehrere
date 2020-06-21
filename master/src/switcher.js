var regions = ["de", "gb", "ie"];

function setRegion(region) {
  document.cookie = "nf_country=" + region;
}

document.addEventListener("DOMContentLoaded", function () {
  var output = document.createElement("p");

  for (var i = 0; i < regions.length; i++) {
    var region = regions[i];
    var link = document.createElement("a");
    link.className = "pr-2";
    link.innerHTML = region;
    link.onclick = function () {
      setRegion(region);
      window.location = "/";
    };
    output.appendChild(link);
  }

  document.body.appendChild(output);
});
