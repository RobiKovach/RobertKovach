<?php
if (trim($_POST['mfbPhone']) == '') {
	echo 'fasle';
}
else {
	$txtname = trim($_POST['mfbName']);
	$txtemail = trim($_POST['mfbMail']);
	$txtphone = trim($_POST['mfbPhone']);
	$txttext = trim($_POST['mfbText']);

	// от кого
	$fromMail = 'test@test.ru';
	// Сюда введите Ваш email
	$emailTo = 'kovachrobert1995@gmail.ru';

	$subject = 'Обратная связь';
	$subject = "=?utf-8?b?". base64_encode($subject) ."?=";
	$headers = "From: Пример формы<$fromMail>\n";
	$headers .= 'Content-type: text/plain; charset="utf-8"\r\n';
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
	// тело письма
	$body = "Получено письмо с сайта ".$site." \n\nИмя: ".$txtname."\nТелефон: ".$txtphone."\ne-mail: ".$txtemail."\nСообщение: ".$txttext;
	mail($emailTo, $subject, $body, $headers );
	echo 'ok';
}
?>
