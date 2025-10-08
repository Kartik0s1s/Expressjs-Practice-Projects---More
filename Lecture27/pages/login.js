export  function login(){
    return ` 
        <form action= "/submit" method="post">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname"><br>
  <button> Submit</button>
        </form>
         <a href="/home">Go to home</a>
        `
}
