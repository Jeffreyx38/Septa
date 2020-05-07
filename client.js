var bus = "0"

function getBus(input)
{
        bus = input;
}

function fetchData()
{
    var x = document.getElementById("message");
    var url;
    if(bus == "0")
    {
        document.getElementById("result").innerHTML = "<h3> Try again. Select Route</h3>"
    }
    else
    {
        url = "https://www3.septa.org/hackathon/TransitView/?route="
        url += bus;
        console.log(url);
        request()
    }
    x.innerHTML = "Fetching route information for route: " + bus;
}

function request(){
    var xhttp = new XMLHttpRequest();
      
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          //document.getElementById("data").innerHTML = this.responseText;
          console.log(JSON.parse(this.responseText));
          htmlState(JSON.parse(this.responseText));
        }
      };
      xhttp.open("POST", "/getroute", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("bus=" + bus);

}

function htmlState(json)
{
    var tb = ""
    tb += "<table><tr><th>Bus</th><th>Vehicle ID</th><th>Direction</th><th>Destination</th><th>Late</th></tr>"

    for(var i = 0; i < json.bus.length; i++)
    {
        tb += "</td><td>" + bus + "</td>"
        tb += "</td><td>" + json.bus[i].VehicleID + "</td>"
        tb += "</td><td>" + json.bus[i].Direction + "</td>"
        tb += "</td><td>" + json.bus[i].destination + "</td>"
        tb += "</td><td>" + json.bus[i].late + "</td></tr>"
        
    }

    document.getElementById("result").innerHTML = tb + "</table>"
}






