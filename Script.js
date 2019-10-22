function firstLast6(arr){
    if(arr[0] == 6 || arr[(arr.length)-1] == 6){
        return true;
    } else {
        return false;
    }
}

function has23(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 2 || arr[i] == 3){
            return true
        }
    }
    return false;
}

function fix23(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 2 && arr[i+1] == 3){
            arr[i+1] = 0;
        }
    }
    return arr;
}

function countYZ(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if((arr[i] == "y" || arr[i] == "z") && (arr[i+1] == " " || arr[i+1] == undefined)){
            count++;
        }
        if((arr[i] == "Y" || arr[i] == "Z") && (arr[i+1] == " " || arr[i+1] == undefined)){
            count++;
        }
    }
    return count;
}

function endOther(arr1, arr2){
    str1 = arr1.toLowerCase();
    str2 = arr2.toLowerCase();
    if(str1.length >= str2.length){
        for(var i = 0; i < str1.length; i++) {
            var tempStr = str1.substring(i, str1.length);
            if(tempStr == str2){
                return true;
            }
        }
    } else {
        for(var i = 0; i < str2.length; i++) {
            var tempStr = str2.substring(i, str2.length);
            if(tempStr == str1){
                return true;
            }
        }
    }
    return false;
}

function starOut(arr){
    var string = "";
    for(var i = 0; i < arr.length; i++){
        if(arr[i+1] == "*" || arr[i-1] == "*" || arr[i] == "*"){
            string = string;
        } else {
            string += arr[i];
        }
    }
    return string;
}

function getSandwich(arr){
    var ind = arr.indexOf("bread");
    var laind = arr.lastIndexOf("bread");
    if(!(laind == -1) && !(laind == ind)){
        return arr.substring(ind+5,laind);
    }
    return "";
}

function canBalance(arr){
     var tot = 0;
     var temp = 0;
     for(var i = 0; i < arr.length; i++){
         tot += arr[i];
     }
     for(var i = 0; i < arr.length; i++){
         tot -= arr[i];
         temp += arr[i];
         if(tot == temp){
             return true;
         }
     }
     return false;
 }

function countClumps(arr){
    var clumpCount = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i-1] == arr[i]){
            clumpCount = clumpCount;
        } else {
            if(arr[i+1] == arr[i]){
                clumpCount++;
            }
        }
    }
    return clumpCount;
}

function evenlySpaced(a,b,c){
    var abc = [a,b,c];
    var min = abc[0];
    var max = abc[0];
    if((a + b + c)  == a*3){
        return true;
    }
    for(var i = 0; i < abc.length; i++){
        if(abc[i] > max){
            var max = abc[i];
        }
        if(abc[i] < min){
            var min = abc[i]
        }
    }
    for(var i = 0; i < abc.length; i++){
        if(!(abc[i] == max) && !(abc[i] == min)){
            var mid = abc[i];
        }
    }
    if((mid - min) == (max - mid)){
        return true;
    }
    return false;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += firstLast6([1,2,3,4,5,6]);
    document.getElementById("output").innerHTML += has23([2,3]);
    document.getElementById("output").innerHTML += fix_23([1,2,3]);
    document.getElementById("output").innerHTML += countYZ("fez day");
    document.getElementById("output").innerHTML += endOther("Hiabc", "abc");
    document.getElementById("output").innerHTML += starOut("ab***cd");
    document.getElementById("output").innerHTML += getSandwich("breadinkbread");
    document.getElementById("output").innerHTML += canBalance([1,1,1,2,1]);
    document.getElementById("output").innerHTML += countClumps([2,2,2,3,3]);
    document.getElementById("output").innerHTML += evenlySpaced(1,3,2);
    //test third method, etc
}
