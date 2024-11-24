/**
 * CodeWithMosh Course Downloader
 * 
 * This script automates the process of downloading video lessons from CodeWithMosh platform.
 * It iterates through each lesson, triggers the download, and moves to the next lesson automatically.
 * 
 * @author NaveenKumar Namachivayam
 * @website https://qainsights.com
 * @version 1.0.0
 * @license MIT
 * @copyright 2024
 * 
 * DISCLAIMER:
 * This script is for educational purposes only. Please ensure you have the necessary permissions
 * and valid subscription to download the content. The author is not responsible for any misuse
 * of this script or violation of terms of service. Use it at your own risk.
 * 
 * Usage:
 * 1. Login to CodeWithMosh
 * 2. Navigate to the course page's first lesson
 * 3. Open browser console (F12)
 * 4. Paste this script and press Enter 
 * 5. Relax
 */

// Configuration
const CONFIG = {
    PAGE_LOAD_DELAY: 4000,  // 4 seconds
};

// Get total number of lessons
var totalItems = document.getElementsByClassName("status-icon").length;
console.log("Found " + totalItems + " lessons");

// Array to store all lesson names for final report
var lessonNames = [];

// Iterate through each lesson except the last one
for (let i = 0; i < totalItems - 1; i++) {
    // Store current lesson name before downloading
    lessonNames.push(window.document.title);
    
    // Find and click download button if available
    var d = document.getElementsByClassName("download")
    if (d[0]) {
        d[0].click();
        console.log("Lesson " + (i + 1) + ": Downloading " + d[0].href + "..." + window.document.title + "...");     

        // Wait for download to initialize (4 seconds)
        await new Promise(r => setTimeout(r, CONFIG.PAGE_LOAD_DELAY));       
    } 

    // Find and click complete button to move to next lesson
    var complete = document.getElementsByClassName("nav-btn complete")
    if (complete[0]) {
        complete[0].click();
        console.log("Lesson " + (i + 1) + ": Moving to next");
    }
    
    // Wait for next lesson page to load (4 seconds)
    await new Promise(r => setTimeout(r, CONFIG.PAGE_LOAD_DELAY));   
}

// Generate final report of all downloaded lessons
console.log("\n=== All Downloaded Lessons ===");
console.log(lessonNames.join("\n"));

// Donate a cup of coffee
console.log("\n=== ********************** ===");
console.log("Buy me a coffee: https://www.buymeacoffee.com/qainsights");
console.log("\n=== ********************** ===");