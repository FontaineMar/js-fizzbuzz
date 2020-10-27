var fizz = 'Fizz';
var buzz = 'Buzz';
var message;

for (var i = 1; i < 100 ;i++){
     message = i

    if((i % 3 == 0) && (i % 5 == 0)){
    message = fizz + buzz ;
    }
      else if( i % 3 == 0){
        message = fizz ;
      }
      else if ( i % 5 == 0){
       message = buzz ;
       }

    document.getElementById('numeri').innerHTML += "<li>" + message + "</li>"
}
