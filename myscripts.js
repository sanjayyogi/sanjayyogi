function Popup() {
    document.getElementById("pop-up_img").style.display="block";

     }


     function closePopup() {
    document.getElementById("pop-up_img").style.display="none";

     }

     function listVeiw() {
    document.getElementById("listview").style.display="block";
    document.getElementById("bookdiv").style.display="none";
     }

     function  gridVeiw() {
  document.getElementById("bookdiv").style.display="block";
    document.getElementById("listview").style.display="none";
   
     }
   

 const body = document.querySelector('body');
 const toggle = document.getElementById('toggle');
 toggle.onclick = function () {
     toggle.classList.toggle('active');
     body.classList.toggle('active');
 }