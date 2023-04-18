window.onload = function() {
  var fileLinks = document.getElementById("file-links");
  var files = [
    {name: "2.6 Style Practice",
      path: "Assignments/2.6.html"},
    {name: "2.9 Heading Practice",
      path: "Assignments/2.9.html"},
    {name: "2.10 About Me Practice",
      path: "Assignments/2.10.html"},
    {name: "2.11 WebPage Recreation Practice",
      path: "Assignments/2.11.html"},
    {name: "3.8 Images, Links, List, and Form Practice",
      path: "Assignments/3.8.html"},
    {name: "4.11 \"Frames\" Practice\n",
      path: "Assignments/4.11.html"}
  ];

  for (var i = 0; i < files.length; i++) {
    var link = document.createElement("a");
    link.href = files[i].path;
    link.target = "_blank";
    link.innerHTML = files[i].name;
    fileLinks.appendChild(link);
  }
}

