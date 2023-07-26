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
    let resp = await fetch("https://fathomless-dusk-76665-1719385a3cfc.herokuapp.com/download", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
});

//# sourceMappingURL=index.7c0ccee6.js.map
