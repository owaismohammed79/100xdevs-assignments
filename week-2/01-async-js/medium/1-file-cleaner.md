## File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

/_const fs = require('fs');
function removeSpaces(str){
let strlen = str.length;
let newstr = "";
for(let i = 0; i < strlen; i++){
if(str[i] == " " && str[i+1] == " "){
continue;
}
newstr += str[i];
}
return newstr;
}
fs.readFile('new.txt', 'utf8', (err, data) =>{
if(err){
console.log(err);
}
else{
fs.writeFile('new.txt', removeSpaces(data), (err) =>{
if(err){
console.log(err);
}
else{
console.log("File has been updated");
}
});
}
_/ });
