var ret;
//取得網路上的資源
function HTTPGetData(urlStr,callBack) {
    var HttpObj = new XMLHttpRequest();   
    HttpObj.onreadystatechange = function () {
        if (HttpObj.readyState === 4) {
            ret = HttpObj.responseText;
            callBack(JSON.parse(ret));
            alert(ret);
         //   alert("data retrieved");
        }
    }
	HttpObj.open("GET", urlStr, true);
    HttpObj.send();
}

//上傳 dataStr 到網路上
function HTTPPostData(urlStr, dataStr,callBack) {
    var HttpObj = new XMLHttpRequest();
	HttpObj.open("POST", urlStr, true);
    HttpObj.setRequestHeader("Content-type", "application/json+fhir");
   // HttpObj.setRequestHeader("Content-type", "application/xml+fhir");
    HttpObj.onreadystatechange = function () {
        //alert(HttpObj.readyState);
        if (HttpObj.readyState === 4) {
            ret = HttpObj.responseText;
            callBack(JSON.parse(ret));
             alert(ret);
        }
    }

    HttpObj.send(dataStr);
  //  getData
}