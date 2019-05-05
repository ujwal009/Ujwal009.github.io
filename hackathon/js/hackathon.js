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
                  
                var cars=new Array();
                 
                  
                navigator.usb.requestDevice({ filters: [{  vendorId: 0x2341 }] })
                .then(selectedDevice => {
                  
                  device = selectedDevice;
                         
                  
                  var v10 = device.vendorId;
                  cars[0]=device.vendorId;
                  alert("vendorId" + v10);
                  
                  
                  var v11 = device.productId;
                  cars[1]=device.productId;
                  alert("productId" + v11);
                  
                  var v12 = device.manufacturerName;
                  cars[2]=device.manufacturerName;
                  alert("manufacturerName" + v12);
                  
                  var v13 = device.productName;
                  cars[3]=device.productName;
                  alert("productName" + v13);
                  
                  var v1 = device.usbVersionMajor;
                  cars[4]=device.usbVersionMajor;
                  alert("usbVersionMajor" + v1);
                  
                  var v2 = device.usbVersionMinor;
                  cars[5]=device.usbVersionMinor;
                  alert("usbVersionMinor" + v2);
                  
                  var v3 = device.usbVersionSubminor;
                  cars[6]=device.usbVersionSubminor;
                  alert("usbVersionSubminor" + v3);
                  
                  var v4 = device.deviceClass;
                  cars[7]=device.deviceClass;
                  alert("deviceClass" + v4);
                  
                  var v5 = device.deviceSubclass;
                  cars[8]=device.deviceSubclass;
                  alert("deviceSubclass" + v5);
                  
                  var v6 = device.deviceProtocol;
                  cars[9]=device.deviceProtocol;
                  alert("deviceProtocol" + v6);
                  
                  var v7 = device.usbVersionMajor;
                  cars[10]=device.usbVersionMajor;
                  alert("usbVersionMajor" + v7);
                  
                  var v8 = device.usbVersionMinor;
                  cars[11]=device.usbVersionMinor;
                  alert("usbVersionMinor" + v8);
                  
                  var v9 = device.usbVersionSubminor;
                  cars[12]=device.usbVersionSubminor;
                  alert("usbVersionSubminor" + v9);
                  
                  var v14 = device.serialNumber;
                  cars[13]=device.serialNumber;
                  alert("serialNumber" + v14);
                  
                  var v15 = device.deviceVersionMajor;
                  cars[14]=device.deviceVersionMajor;
                  alert("deviceVersionMajor" + v15);
                  
                  var v16 = device.deviceVersionMinor;
                  cars[15]=device.deviceVersionMinor;
                  alert("deviceVersionMinor" + v16);
                  
                  var v17 = device.deviceVersionSubminor;
                  cars[16]=device.deviceVersionSubminor;
                  alert("deviceVersionSubminor" + v17);
                  
                  
                  var concat2 = v1+","+v2+","+v3+","+v4+","+v5+","+v6+","+v11+","+v10+","+v15+","+v16+","+v17+","+v12+","+v13+","+v14;                  
                  
                  alert(concat2);
                  
                  
                  
                  return device.open(); 
                })
                .then(()=>device.selectConfiguration(1))
                .then(()=>device.claimInterface(2))
                .then(()=> {
					                                alert("CODE REACHED HERE");
									
                    device.controlTransferOut({
                    requestType: 'vendor' ,
                    recipient: 'interface' ,
                    request: 0x01 ,
                    value: 0x0013 ,
                    index: 0x0002 
                    })
                })
                .then(()=>{
					alert("CODE REACHED HERE 111");
					
                    console.log(device.configuration.interfaces[2]);
                    let result=device.transferIn(5,64);
                    alert(result);
                    let decoder = new TextDecoder();
                    alert('Received: ' + decoder.decode(result.data));
                })
                .catch(error => {console.log(error);})


}