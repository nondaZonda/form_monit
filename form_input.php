<?php

$firstName = isset($_POST['firstname']) ? $_POST['firstname'] : 'unknown';
$lastName = isset($_POST['lasttname']) ? $_POST['lasttname'] : 'unknown';
$keyStrokesData = isset($_POST['payload']) ? $_POST['payload'] : null;

echo 'Opracowanie formularza.';
var_dump($keyStrokesData);

?>
<p>
<a href="form.html">Powrót</a>
</p>
