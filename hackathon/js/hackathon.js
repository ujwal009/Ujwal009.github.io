// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }    
}


// reset the user inputs 
$("#reset").click(function() {
    $(this).closest('form').find("input[type=text], textarea").val("");
});

//get the user inputs 
$('#btnGetValues').click(function () {
   alert($('#ipAddr').val() + "\n" + $('#portNo').val() + "\n" + $('#sessionNo').val());
});



// Webusb API to detect the USB on Web
var webusbfunc=()=>{
	                
                var device;
                  
                var devicedesc=new Array();
				var configdesc=new Array();
				var interfacedesc=new Array();
				var endpointdesc=new Array();
				var stringdesc=new Array();
				
                navigator.usb.requestDevice({ filters: [{  vendorId: 0x2341 }] })
                .then(selectedDevice => {
                  
                  device = selectedDevice;
                  var v30 = device.bDescriptorType;
                 
                  alert("DescriptorType" + v30);
					  
                  /*
                  var v10 = device.vendorId;
                  devicedesc[0]=device.vendorId;
                  alert("vendorId" + v10);
                  
                  
                  var v11 = device.productId;
                  devicedesc[1]=device.productId;
                  alert("productId" + v11);
                  
                  var v12 = device.manufacturerName;
                  devicedesc[2]=device.manufacturerName;
                  alert("manufacturerName" + v12);
                  
                  var v13 = device.productName;
                  devicedesc[3]=device.productName;
                  alert("productName" + v13);
                  
                  var v1 = device.usbVersionMajor;
                  devicedesc[4]=device.usbVersionMajor;
                  alert("usbVersionMajor" + v1);
                  
                  var v2 = device.usbVersionMinor;
                  devicedesc[5]=device.usbVersionMinor;
                  alert("usbVersionMinor" + v2);
                  
                  var v3 = device.usbVersionSubminor;
                  devicedesc[6]=device.usbVersionSubminor;
                  alert("usbVersionSubminor" + v3);
                  
                  var v4 = device.deviceClass;
                  devicedesc[7]=device.deviceClass;
                  alert("deviceClass" + v4);
                  
                  var v5 = device.deviceSubclass;
                  devicedesc[8]=device.deviceSubclass;
                  alert("deviceSubclass" + v5);
                  
                  var v6 = device.deviceProtocol;
                  devicedesc[9]=device.deviceProtocol;
                  alert("deviceProtocol" + v6);
                  
                  var v7 = device.usbVersionMajor;
                  devicedesc[10]=device.usbVersionMajor;
                  alert("usbVersionMajor" + v7);
                  
                  var v8 = device.usbVersionMinor;
                  devicedesc[11]=device.usbVersionMinor;
                  alert("usbVersionMinor" + v8);
                  
                  var v9 = device.usbVersionSubminor;
                  devicedesc[12]=device.usbVersionSubminor;
                  alert("usbVersionSubminor" + v9);
                  
                  var v14 = device.serialNumber;
                  devicedesc[13]=device.serialNumber;
                  alert("serialNumber" + v14);
                  
                  var v15 = device.deviceVersionMajor;
                  devicedesc[14]=device.deviceVersionMajor;
                  alert("deviceVersionMajor" + v15);
                  
                  var v16 = device.deviceVersionMinor;
                  devicedesc[15]=device.deviceVersionMinor;
                  alert("deviceVersionMinor" + v16);
                  
                  var v17 = device.deviceVersionSubminor;
                  devicedesc[16]=device.deviceVersionSubminor;
                  alert("deviceVersionSubminor" + v17);
                  
				  var v18 = device.bcdDevice;
                  devicedesc[17]=device.bcdDevice;
                  alert("bcdDevice" + v18);
				  
				  var v19 = device.bcdUSB;
                  devicedesc[18]=device.bcdUSB;
                  alert("bcdUSB" + v19);
                  
				  var v20 = device.bNumConfigurations;
                  devicedesc[19]=device.bNumConfigurations;
                  alert("bNumConfigurations" + v20);
				  
				  
                  var concatfordevice = v1+","+v2+","+v3+","+v4+","+v5+","+v6+","+v11+","+v10+","+v15+","+v16+","+v17+","+v12+","+v13+","+v14+","+v18+","+v19+","+v20;                  
                  
                  alert(concatfordevice);
                  
				  */
                 
				  alert("REACHED HERE...5");
				 
				  var a1 = device.bInterfaceNumber;
				  var a2= device.bNumConfigurations;
				  
				 
                  alert("bNumInterfaces" + a1);
				  
				  alert("bNumConfigurations" + a2);
				  
                  return device.open(); 
                })
                .then(()=>device.selectConfiguration(1))
                .then(()=>device.claimInterface(2))
                .then(()=> {
                    device.controlTransferOut({
                    requestType: 'vendor' ,
                    recipient: 'interface' ,
                    request: 0x01 ,
                    value: 0x0013 ,
                    index: 0x0002 
                    })
                })
                .then(()=>{
			
		    alert("REACHED HERE...1");
				
                    console.log(device.configuration.interfaces[2]);
		    alert(device.configuration.interfaces[2]);
		    
			
                    let result=device.transferIn(5,64);
                    //console.log(result);
                    let decoder = new TextDecoder();
                  //  console.log('Received: ' + decoder.decode(result.data));
					
		    alert("REACHED HERE...2");
			
		    alert("Configuration Value:" + configurationValue);
			
		    alert("Configuration Value 2:" + device.configurationValue);
		
		    alert("Configuration Name:" + device.configurationName);
			
		    alert("Configuration Name 2:" + configurationName);
			
                })
                .catch(error => {console.log(error);})

}
