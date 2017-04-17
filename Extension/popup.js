chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type: "getContent"}, 

    function(response) {
		var yellow = "List of Found Links on current page"
		document.getElementById("memes").innerHTML = yellow;
        console.log(response);
			var L_urlPrefix = 'http://fake.shanney.co.uk/index.php/';
			var table = document.createElement("table");
			for (var i = 0; i < response.length; i++) {
				var row = table.insertRow(-1);
				var linkCell = row.insertCell(-1);
				linkCell.appendChild(document.createTextNode(response[i]));
				linkCell.appendChild(document.createElement("br"));
				var a = linkCell.appendChild(document.createElement("a"));
				var att = document.createAttribute("href");
				att.value = "http://fake.shanney.co.uk/index.php/" + response[i];
				a.setAttributeNode(att);
				var att = document.createAttribute("target");
				att.value = "_blank";
				a.setAttributeNode(att);
				a.appendChild(document.createTextNode("     " + "   Click here to check this link."));
			}
		document.body.appendChild(table);
    });
});