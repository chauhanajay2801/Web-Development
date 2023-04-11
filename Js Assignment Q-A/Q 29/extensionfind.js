//write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

let fileName = prompt("Enter File Name");

function extensionName(fileName) {
    const index = fileName.indexOf(".");
    const extension = fileName.slice(index);
    alert(`The Extension name of file ${fileName} is : ${extension}`);
}

extensionName(fileName);
