<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$msg = $_POST['user_msg'];

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'avtozapchastin1@mail.ru';
$mail->Password = 'cbsg5u4n0wuvgHpiL5fz';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('avtozapchastin1@mail.ru'); // от кого
$mail->addAddress('makcysha@mail.ru');     // Кому

$mail->isHTML(true);

$mail->Subject = 'Заявка с сайта';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email.
'<br>Комментарий пользователя: ' .$msg; 
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>