let submitForm = document.getElementById("submitForm");
let progressBar = document.getElementById("progressBar");
let progressBarContainer = document.getElementById("progressBarContainer");

submitForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let url = document.getElementById("url").value;
  let fileName = document.getElementById("fileName").value;
  let fileType = document.querySelector('input[name="fileType"]:checked').value;
  let quality = document.getElementById("quality").value;

  const data = {
    url: url,
    fileName: fileName,
    fileType: fileType,
    quality: quality,
  };

  var xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://fathomless-dusk-76665-1719385a3cfc.herokuapp.com/download",
    true
  );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.responseType = "blob";

  xhr.onload = function (e) {
    if (this.status == 200) {
      const blob = new Blob([this.response]);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName + "." + fileType;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }

    // Hide the progress bar after the download
    progressBarContainer.style.display = "none";
  };

  // progress on transfers from the server to the client (downloads)
  xhr.addEventListener("progress", function (event) {
    if (event.lengthComputable) {
      var percentComplete = (event.loaded / event.total) * 100;
      progressBar.value = percentComplete;
    }
  });

  // Show the progress bar before sending the request
  progressBarContainer.style.display = "block";

  xhr.send(JSON.stringify(data));
});
