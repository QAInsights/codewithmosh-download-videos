var totalItems = document.getElementsByClassName("status-icon").length;

for (let i = 0; i < totalItems - 1; i++) {
    // get download link
    var d = document.getElementsByClassName("download")

    // if download button is present, then click
    if (d[0]) {
        d[0].click();
        console.log("QAInsights", i, d[0].href, window.document.title, "downloaded");     
        // Wait for page to load
        await new Promise(r => setTimeout(r, 4000));       
    } 

    // Complete and go to next
    var complete = document.getElementsByClassName("nav-btn complete")

    // if complete button is present, then click
    if (complete[0]) {
        complete[0].click();
    }
    // Wait for page to load
    await new Promise(r => setTimeout(r, 4000));   
    

}