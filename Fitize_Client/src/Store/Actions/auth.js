export const authCheckState = () => {
    return dispatch => {
        // get userId from cookie
        const jwToken = getCookie("JT1");
        if (!jwToken) {
           // dispatch(authLogout());
        } 
           
             else {
                 //debugger;
                 //// here get only userId from cookie and send it to server to get userName and iamgeUrl
             
                const userName = getCookie("user_Name1");
              
                const imageUrl = getCookie("image_Url1");
                const jwttoken = getCookie("JT1");
                //dispatch(login(userName, imageUrl, jwttoken));
        
            }   
        }
 }


 function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }