let submitForm = document.getElementById("submitForm");
submitForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    let url = document.getElementById("url").value;
    let fileName = document.getElementById("fileName").value;
    let fileType = document.querySelector('input[name="fileType"]:checked').value;
    let quality = document.getElementById("quality").value;
    const data = {
        url: url,
        fileName: fileName,
        fileType: fileType,
        quality: quality
    };
    fetch("https://fathomless-dusk-76665-1719385a3cfc.herokuapp.com/download", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((res)=>res.blob()).then((blob)=>{
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName + "." + fileType;
        document.body.appendChild(a);
        a.click();
        a.remove();
    });
});

//# sourceMappingURL=index.b291005a.js.map
