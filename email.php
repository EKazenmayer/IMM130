<?php
 
if(isset($_POST['email'])) {
 
    $email_to = "kazenme1@tcnj.edu";
    $email_subject = "Contact Form Submission";
 
     
 
     
 
    function died($error) {
 
        echo "<h1>Whoops!</h1><h2>There appears to be something wrong with your completed form.</h2>";
 
        echo "<strong><p>The following items are not specified correctly.</p></strong><br />";
 
        echo $error."<br /><br />";
 
        echo "<p>Return to the form and try again.</p><br />";
		echo "<p><a href='index.php'>return to the homepage</a></p>";
        die();

    }
  
 
    $name = $_POST['contactName']; // required
 
    $email_from = $_POST['contactEmail']; // required
 
    $message = $_POST['contactMessage']; // required
 
     
 
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
 
    $error_message .= '<li><p>The completed e-mail address appears to be incorrect<p></li>';
 
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$name)) {
 
    $error_message .= '<li><p>Name appears to be wrong</p></li>';
 
  }
    
  if(strlen($message) < 2) {
 
    $error_message .= '<li><p>Message appears to be incorrect</p></li>';
 
  }
 
  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    $email_message = "Form details are given below.\n\n";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 

 
    $email_message .= "Name: ".clean_string($name)."\n";
 
    $email_message .= "Email Adress: ".clean_string($email_from)."\n";
 
    $email_message .= "message: ".clean_string($message)."\n";
 
      
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  
 
?>


<header>
    <img class="logo" src="imgs/Logo.svg" alt="Java Crash Course">
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li class="lessons-menu"><a href="lessons.html">Lessons</a>
                <ul>
                    <li><a href="lesson1.html">Lesson 1: Variables</a></li>
                    <li><a href="lesson2.html">Lesson 2: Conditional Statements</a></li>
                    <li><a href="lesson3.html">Lesson 3: Arrays</a></li>
                    <li><a href="lesson4.html">Lesson 4: Loops</a></li>
                </ul>
            </li>
            <li><a href="references.html">References</a></li>
            <li><a href="contact.html">Contact Me</a></li>
        </ul>
    </nav>
</header>
<main>
    <h1>Thank you for your message!</h1>
    <p>We will contact you as soon as possible.</p>
    <button id="indexButton" onclick="window.location.href='index.html'">Return to homepage</button>
</main>


<?php
 
}
 
?>
