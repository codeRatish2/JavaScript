let  str ="strstrerst";
    let n = str.length;
    let mincount = 1;
    let least ;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 1; j < n; j++) {
            if (str[i] == str[j])
                count++;
        }
 
        if (count <= mincount) {
            mincount = count;
            least = str[i];
        }
    }
 console.log(least);
 