// document.querySelector('.download-button').addEventListener('click', function() {
//   fetch('/account', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       metafield: {
//         namespace: 'custom',
//         key: 'last_download',
//         value: new Date().toISOString(),
//         type: 'date_time'
//       }
//     })
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.querySelector(".download-button");
  const downloadInfo = document.querySelector(".download-info");

  // Load last download date from Local Storage
  const lastDownload = localStorage.getItem("last_download");
  if (lastDownload) {
    downloadInfo.textContent = `You last downloaded this media on ${new Date(lastDownload).toLocaleDateString()}.`;
  }

  // Update date on button click
  downloadButton.addEventListener("click", function () {
    const currentDate = new Date().toISOString();
    localStorage.setItem("last_download", currentDate); // Store in Local Storage

    downloadInfo.textContent = `You last downloaded this media on ${new Date().toLocaleDateString()}.`;
  });
});
