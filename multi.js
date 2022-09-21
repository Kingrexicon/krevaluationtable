


function timesIt() {
    // disp.innerHTML += "multiplication Tables " + numbb.value
    disp.innerHTML = ''
    if (numbb.value == "" || numbr.value == "" ) {
        disp.innerHTML="Pls input Numbers in the Row and column"
            }
        
            else{
    for (var i = 1; i <= numbb.value; i++) {
        result = "<tr>"
        for (var j = 1; j <= numbr.value; j++) {

            result += "<td>" + i + "*" + j + "=" + (i * j) + "</td>"
        }
        result += "</tr>"
        disp.innerHTML += result

    }}
}


function addIt() {
    disp.innerHTML = ''
    if (numbb.value == "" || numbr.value == "" ) {
        disp.innerHTML="Pls input Numbers in the Row and column"
            }
        
            else{
    for (var i = 1; i <= numbb.value; i++) {
        result = "<tr>"
        for (var j = 1; j <= numbr.value; j++) {

            result += "<td>" + i + "+" + j + "=" + (i + j) + "</td>"
        }

        result += "</tr>"
        disp.innerHTML += result

    }}
}

function minusIt() {
    disp.innerHTML = ''
    if (numbb.value == "" || numbr.value == "" ) {
        disp.innerHTML="Pls input Numbers in the Row and column"
            }
        
            else{
    for (var i = 1; i <= numbb.value; i++) {
        result = "<tr>"
        for (var j = 1; j <= numbr.value; j++) {

            result += "<td>" + i + "-" + j + "=" + (i - j) + "</td>"
        }
        result += "</tr>"
        disp.innerHTML += result


    }}
}


function divideIt() {
    disp.innerHTML = ''
     if (numbb.value == "" || numbr.value == "" ) {
disp.innerHTML="Pls input Numbers in the Row and column"
    }

    else{
    for (var i = 1; i <= numbb.value; i++) {
        result = "<tr>"
        for (var j = 1; j <= numbr.value; j++) {

            result += "<td>" + i +"/"+j+"="+parseFloat(i / j).toFixed(2)+"</td>"
        }

        result += "</tr>"
        disp.innerHTML += result

    }}
}

function cleaR() {
    if (numbb.value != "" && numbr.value != "") {
        numbb.value = ""
        numbr.value = ""
        disp.innerHTML = ''
    }
    else if (numbb.value == "" && numbr.value == "") {
        disp.innerHTML = 'Input already cleared'
    }
    // if(numbb.value != Number && numbr.value != Number){
    //     alert("another Clear")
    // }
}
