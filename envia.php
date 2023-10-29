<?php
$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$telefone = addslashes($_POST['telefone']);

$para = "leo.ooosla@gmail.com";
$assunto = "Contato Portifolio";

$corpo = "nome: " . $nome . "\n" . "E-mail: " . $email . "\n" . "telefone:" . $telefone;

$cabeca = "From: xxxxxartigo157xxxxxx@gmail.com" . "\r\n" . 
          "Reply-to: " . $email . "\r\n" . 
          "X-Mailer: PHP/" . phpversion();

if (mail($para, $assunto, $corpo, $cabeca)) {
    echo("E-mail enviado com sucesso!");
} else {
    echo("Houve um erro ao enviar o email!");
}
?>

