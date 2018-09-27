<?

if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")){ 
$to = 'djelvz@gmail.com';
$subject = 'from site';
$message = $_POST['message'];
$headers = $_POST['email'];

mail($to, $subject, $message, $headers);
    header('Location: index.html');
}

?>