<!-- 

xmlhttp.timeout=001;
			xmlhttp.ontimeout=function(){
				
				console.log("timeout of 001 ms");
			}
			
			0: request not initialized 
				1: server connection established
				2: request received 
				3: processing request 
				4: request finished and response is ready
				
				0	UNSENT	open()has not been called yet.
				1	OPENED	send()has not been called yet.
				2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
				3	LOADING	Downloading; responseText holds partial data.
				4	DONE	The operation is complete.
				
			
			if (xmlhttp.readyState==0)
			    {
			    document.getElementById("readystate0").innerHTML="request not initialized";
			    console.log("request not initialized");
			    }
				if (xmlhttp.readyState==1)
			    {
			    document.getElementById("readystate1").innerHTML="server connection established";
			    console.log("server connection established");
			    }
				if (xmlhttp.readyState==2)
			    {
			    document.getElementById("readystate2").innerHTML="request received";
			    console.log("request received");
			    }
				if (xmlhttp.readyState==3)
			    {
			    document.getElementById("readystate3").innerHTML="processing request";
			    console.log("processing request");
			    }


$.ajax({
				"url":"/ajax-example/say-hello",
				"type":"get",
				"async":true,
				"contentType":"text/html",
				"success":function(data){
							$('#message2').text(data);
						},
				"error":function(error){
					$('#message2').text(error);
				}		
			});

 -->
 
 
 open()
Initializes a request. This method is to be used from JavaScript code; to initialize a request from native code, use openRequest()instead.
void open(
   DOMString method,
   DOMString url,
   optional boolean async,
   optional DOMString user,
   optional DOMString password
);
Parameters
method
The HTTP method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs.
url
The URL to send the request to.
async
An optional boolean parameter, defaulting to true, indicating whether or not to perform the operation asynchronously. If this value is false, the send()method does not return until the response is received. If true, notification of a completed transaction is provided using event listeners. This must be true if the multipart attribute is true, or an exception will be thrown.
Note: Starting with Gecko 30.0 (Firefox 30.0 / Thunderbird 30.0 / SeaMonkey 2.27), synchronous requests on the main thread have been deprecated due to the negative effects to the user experience.
user
The optional user name to use for authentication purposes; by default, this is an empty string.
password
The optional password to use for authentication purposes; by default, this is an empty string.

Note: Calling this method for an already active request (one for which open()or openRequest()has already been called) is the equivalent of calling abort().


setRequestHeader (name, value);
name	 -
Required. String that specifies the name of the request header to send.
The following list contains some of the commonly used names. If you need a detailed list, please visit the HTTP request headers (Wikipedia) page.
Accept	- The content types that are acceptable for the response. It is the responsibility of the server to consider this requirement.
Accept-Charset	-The character sets that are acceptable for the response. It is the responsibility of the server to consider this requirement.
Content-Type	-The content type of the request body (for POST requests).
Date	-The current date and time when the request was sent.
value	- Required. String that specifies the value of the HTTP request header.

 httpRequest.setRequestHeader ("Accept", "text/xml");
 
 
 object.getResponseHeader (name);
You can find the related objects in the Supported by objects section below.
Parameters:

name	

Content-Length	
The size of the response body, in bytes.
Content-Type	-The content type of the response body.
Date	-The current server time when the response was sent.
Last-Modified	-The date and time when the resource was last modified.
Server	-The type and version of the web server.
 
 
 