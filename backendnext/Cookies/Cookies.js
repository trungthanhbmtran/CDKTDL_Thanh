module.exports = {
    setCookie: function(cname, cvalue, exdays){
        return new Promise((resove, reject)=>{
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
            //reject('error');
            resove(d);
        });
    },
    getCookie: function (cname) {
      return new Promise((resove, reject)=>{
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for(var i = 0; i <ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length,c.length);
                    }
                }
                resove(ca);
          //reject('error');
       
      });
  },
  checkCookie: function () {
    return new Promise((resove, reject)=>{
        var username=getCookie("username");
        if (username!="") {
            alert("Welcome again " + username);
        } else {
            username = prompt("Please enter your name:", "");
            if (username != "" && username != null) {
                setCookie("username", username, 365);
            }
        }
              resove(username);
        //reject('error');
     
    });
},
}