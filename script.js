function validation() {
    if(document.Fromfill.Username.value==""){
      document.getElementById("result").innerHTML="Enter Username*";
      return false;
    }
    else if(document.Fromfill.Username.value.length<6){
      document.getElementById("result").innerHTML="Atleast 6-latter*";
      return false;
    }
    else if(document.Fromfill.Email.value==""){
      document.getElementById("result").innerHTML="Enter your Email*";
      return false;
    }
      else if(document.Fromfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-digits*";
        return false;
      }
    else if(document.Fromfill.CPassword.value==""){
      document.getElementById("result").innerHTML="Enter confirm Password*";
      return false;
    }
    else if(document.Fromfill.CPassword.value !==document.Fromfill.Password.value){
      document.getElementById("result").innerHTML="Password does'nt matched*";
      return false;
    }
    else if (document.Fromfill.Password.value == document.Fromfill.CPassword.value) {
    popup.classList.add("open-slide");
    return true; 
    }
  }
  var popup=document.getElementById('popup');