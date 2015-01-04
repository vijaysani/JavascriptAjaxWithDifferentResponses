console.log("loading");
if (Ajax == null || typeof(Ajax) == 'undefined') {
    var Ajax = new Object();
}

Ajax.Utilities = {
    type: "get",
    path: "/ajax-example/say-hello",
    async: true,
    reponseType: "text/xml",
    responseData: null,
    xmlhttp: null,
    success: false,
    initializer: function() {
        if (window.XMLHttpRequest) {
            Ajax.Utilities.xmlhttp = new XMLHttpRequest();
        } else {
            Ajax.Utilities.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    },
    createOpenConnection: function(type, url, async, responseType) {
        Ajax.Utilities.success = false;
        if (type != null) {
            Ajax.Utilities.type = type;
        }
        if (url != null) {
            Ajax.Utilities.url = url;
        }
        if (async != null) {
            Ajax.Utilities.async = async;
        }
        //	responseType="text";

        Ajax.Utilities.xmlhttp.open(Ajax.Utilities.type, Ajax.Utilities.url, Ajax.Utilities.async);
        if (responseType != null) {
            console.log("responestype" + responseType);
            Ajax.Utilities.xmlhttp.responseType = responseType;
            console.log("Ajax.Utilities.xmlhttp.responseType" + Ajax.Utilities.xmlhttp.responseType);
        }
        Ajax.Utilities.xmlhttp.send();
    }

};


Ajax.Manager = {
    init: function() {
        Ajax.Manager.addObervers();
        Ajax.Utilities.initializer();
    },
    addObervers: function() {
        Ajax.Manager.text();
        Ajax.Manager.xml();
        Ajax.Manager.json();
        Ajax.Manager.image();
        Ajax.Manager.css();
    },
    text: function() {
        document.getElementById("text").onclick = function() {
        	console.log("clicked");
            Ajax.Utilities.createOpenConnection("get", "/ajax-example/say-hello", true, "text");
            Ajax.Utilities.xmlhttp.onreadystatechange = function() {
                if (Ajax.Utilities.xmlhttp.readyState == 4 && Ajax.Utilities.xmlhttp.status == 200) {
                    document.getElementById("text-response").innerHTML = Ajax.Utilities.xmlhttp.response;
                }
            };
        };
    },
    xml: function() {
        document.getElementById("xml").onclick = function() {
            Ajax.Utilities.createOpenConnection("get", "cd_catalog.xml", true, "text/xml");
            Ajax.Utilities.xmlhttp.onreadystatechange = function() {
                if (Ajax.Utilities.xmlhttp.readyState == 4 && Ajax.Utilities.xmlhttp.status == 200) {
                    document.getElementById("xml-response").innerHTML = Ajax.Utilities.xmlhttp.response;
                    txt = "<table border='1'><tr><th>Title</th><th>Artist</th></tr>";
                    currentElement = Ajax.Utilities.xmlhttp.responseXML.documentElement.getElementsByTagName("CD");
                    for (var i = 0; i < currentElement.length; i++) {
                        txt = txt + "<tr>";
                        childElement = currentElement[i].getElementsByTagName("TITLE");
                        console.log("childnode title" + childElement); {
                            try {
                                txt = txt + "<td>" + childElement[0].firstChild.nodeValue + "</td>";
                            } catch (er) {
                                txt = txt + "<td>&nbsp;</td>";
                            }
                        }
                        childElement = currentElement[i].getElementsByTagName("ARTIST"); {
                            try {
                                txt = txt + "<td>" + childElement[0].firstChild.nodeValue + "</td>";
                            } catch (er) {
                                txt = txt + "<td>&nbsp;</td>";
                            }
                        }
                        txt = txt + "</tr>";
                    }
                    txt = txt + "</table>";

                    document.getElementById("xml-response").innerHTML = txt;
                }
            };
        };
    },
    json: function() {
        var jsondata = null;
        document.getElementById("json").onclick = function() {
            Ajax.Utilities.createOpenConnection("get", "cd_catalog.json", true, "text/json");
            Ajax.Utilities.xmlhttp.onreadystatechange = function() {

                if (Ajax.Utilities.xmlhttp.readyState == 4 && Ajax.Utilities.xmlhttp.status == 200) {
                    jsondata = eval("(" + Ajax.Utilities.xmlhttp.response + ")");

                    cd = jsondata.catalog.cd;
                    txt = "<table border='1'><tr><th>Title</th><th>Artist</th></tr>";
                    for (var i = 0; i < 3; i++) {
                        txt = txt + "<tr><td>" + cd[i].title + "</td>" + "<td>" + cd[i].artist + "</td></tr>";
                    }
                    txt = txt + "</table>";
                    document.getElementById('json-response').innerHTML = txt;
                }

            };
        };
    },
    image: function() {
        document.getElementById("image").onclick = function() {
            Ajax.Utilities.createOpenConnection("get", "flowers.jpg", true, "arraybuffer");
            Ajax.Utilities.xmlhttp.onreadystatechange = function() {
                if (Ajax.Utilities.xmlhttp.readyState == 4 && Ajax.Utilities.xmlhttp.status == 200) {

                    var blb = new Blob([Ajax.Utilities.xmlhttp.response], {
                        type: 'image/jpg'
                    });
                    var url = (window.URL || window.webkitURL).createObjectURL(blb);
                    console.log("url" + url);
                    document.getElementById('image-response').src = url;
                }

            };
        };

    },
    css: function() {
        document.getElementById("css").onclick = function() {
            Ajax.Utilities.createOpenConnection("get", "sample.css", true, "text");
            Ajax.Utilities.xmlhttp.onreadystatechange = function() {
                if (Ajax.Utilities.xmlhttp.readyState == 4 && Ajax.Utilities.xmlhttp.status == 200) {

                    var headElement = document.head || document.getElementsByTagName('head')[0],
                        styleElement = document.createElement('style');
                    styleElement.type = 'text/css';
                    if (styleElement.styleSheet) {
                    	styleElement.styleSheet.cssText = Ajax.Utilities.xmlhttp.response;
                    } else {
                    	styleElement.appendChild(document.createTextNode(Ajax.Utilities.xmlhttp.response));
                    }
                    headElement.appendChild(styleElement);
                }

            };
        };

    }
};

Ajax.Manager.init();