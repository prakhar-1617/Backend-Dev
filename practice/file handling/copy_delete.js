const fs = require("fs");

fs.copyFile("../testing.txt", "copied.txt", (err) => {

    if (err) {
        console.log("error");
        return;
    }
    console.log("file copied")
})
try {
    fs.readFileSync("copied.txt", "utf-8")
    console.log("file is copied")
}
catch (err){
    console.log("Error while copying file");
}

fs.unlink("copied.txt", (err) => {
    if (err) {
        console.log("Error while deleting file")
    }
    console.log("file deleted")
})

fs.writeFile("newFile.txt", "This is a new File", (err) => {
    if (err) {
        console.log("Error while writing file")
        return;
    }
    console.log("file is created");
})