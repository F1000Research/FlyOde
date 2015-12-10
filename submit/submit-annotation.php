<?php
error_reporting(E_ALL); ini_set('display_errors', 1);
date_default_timezone_set('Etc/UTC');
    function died($error) {
        echo "We found some errors:<br /><br />";
        echo $error."<br /><br />";
        die();
    }

    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        (!isset($_POST['references']) && !isset($_POST['references2']))) {
        died();
    }

    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    if(isset($_POST['checkbox'])) {
        $noname = $_POST['checkbox']; // not required
    }
    if(!isset($_POST['checkbox'])) {
        $noname = 'No'; // not required
    }

    $organ = $_POST['organ']; // not required
    $subnetwork = $_POST['subnetwork']; // not required
    $nodename = $_POST['nodename']; // not required    
    $flybase = $_POST['flybase']; // not required
    $phenotypes = $_POST['phenotypes']; // not required
    $references = $_POST['references']; // required

    $stage_0 = $_POST['stage_0']; // not required
    $stage_1 = $_POST['stage_1']; // not required
    $stage_2 = $_POST['stage_2']; // not required
    $stage_3 = $_POST['stage_3']; // not required
    $stage_4 = $_POST['stage_4']; // not required

    $celltype_0 = $_POST['celltype_0']; // not required
    $celltype_1 = $_POST['celltype_1']; // not required
    $celltype_2 = $_POST['celltype_2']; // not required
    $celltype_3 = $_POST['celltype_3']; // not required
    $celltype_4 = $_POST['celltype_4']; // not required

    $celltype2_0 = $_POST['celltype2_0']; // not required
    $celltype2_1 = $_POST['celltype2_1']; // not required
    $celltype2_2 = $_POST['celltype2_2']; // not required
    $celltype2_3 = $_POST['celltype2_3']; // not required
    $celltype2_4 = $_POST['celltype2_4']; // not required

    $specialization_0 = $_POST['specialization_0']; // not required
    $specialization_1 = $_POST['specialization_1']; // not required
    $specialization_2 = $_POST['specialization_2']; // not required
    $specialization_3 = $_POST['specialization_3']; // not required
    $specialization_4 = $_POST['specialization_4']; // not required

    $subtype_0 = $_POST['subtype_0']; // not required
    $subtype_1 = $_POST['subtype_1']; // not required
    $subtype_2 = $_POST['subtype_2']; // not required
    $subtype_3 = $_POST['subtype_3']; // not required
    $subtype_4 = $_POST['subtype_4']; // not required
    
    $differentiation_0 = $_POST['differentiation_0']; // not required
    $differentiation_1 = $_POST['differentiation_1']; // not required
    $differentiation_2 = $_POST['differentiation_2']; // not required
    $differentiation_3 = $_POST['differentiation_3']; // not required
    $differentiation_4 = $_POST['differentiation_4']; // not required

    $source_0 = $_POST['source_0']; // not required
    $source_1 = $_POST['source_1']; // not required
    $source_2 = $_POST['source_2']; // not required

    $target_0 = $_POST['target_0']; // not required
    $target_1 = $_POST['target_1']; // not required
    $target_2 = $_POST['target_2']; // not required

    $interaction_0 = $_POST['interaction_0']; // not required
    $interaction_1 = $_POST['interaction_1']; // not required
    $interaction_2 = $_POST['interaction_2']; // not required

    $references2_0 = $_POST['references2_0']; // required
    $references2_1 = $_POST['references2_1']; // required
    $references2_2 = $_POST['references2_2']; // required

    $remarks = $_POST['remarks']; // not required

    $error_message = "";


    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
    if(strlen($name) < 1) {
    $error_message .= 'Please type in your name.<br />';
  }
  if(strlen($references) < 2) {
    $error_message .= 'Please give references for your annotations.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }

    $email_message = "Form details below.\n\n";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
    
$email_message .= "INFO\n";
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";

$email_message .= " \n";
$email_message .= "CHECKBOX\n";
$email_message .= "Is it checked? ".$noname."\n";

$email_message .= " \n";
$email_message .= "NODE\n";
    $email_message .= "Organ: ".clean_string($organ)."\n";
    $email_message .= "Subnetwork: ".clean_string($subnetwork)."\n";
    $email_message .= "Node name: ".clean_string($nodename)."\n";
    $email_message .= "Flybase Link: ".clean_string($flybase)."\n";
    $email_message .= "Phenotypes: ".clean_string($phenotypes)."\n";
    $email_message .= "Node References: ".clean_string($references)."\n";

$email_message .= " \n";
$email_message .= "EXPRESSION PATTERN (for each row)\n";
$email_message .= " \n";
    $email_message .= "Stage-Row1: ".clean_string($stage_0).","."\t";
    $email_message .= "Celltype-Row1: ".clean_string($celltype_0).","."\t";
    $email_message .= "Celltype2-Row1: ".clean_string($celltype2_0).","."\t";
    $email_message .= "Specialization-Row1: ".clean_string($specialization_0).","."\t";
    $email_message .= "Subtypes-Row1: ".clean_string($subtype_0).","."\t";
    $email_message .= "Differentiation Level-Row1: ".clean_string($differentiation_0)."\n";

    $email_message .= "Stage-Row2: ".clean_string($stage_1).","."\t";
    $email_message .= "Celltype-Row2: ".clean_string($celltype_1).","."\t";
    $email_message .= "Celltype2-Row2: ".clean_string($celltype2_1).","."\t";
    $email_message .= "Specialization-Row2: ".clean_string($specialization_1).","."\t";
    $email_message .= "Subtypes-Row2: ".clean_string($subtype_1).","."\t";
    $email_message .= "Differentiation Level-Row2: ".clean_string($differentiation_1)."\n";

    $email_message .= "Stage-Row3: ".clean_string($stage_2).","."\t";
    $email_message .= "Celltype-Row3: ".clean_string($celltype_2).","."\t";
    $email_message .= "Celltype2-Row3: ".clean_string($celltype2_2).","."\t";
    $email_message .= "Specialization-Row3: ".clean_string($specialization_2).","."\t";
    $email_message .= "Subtypes-Row3: ".clean_string($subtype_2).","."\t";
    $email_message .= "Differentiation Level-Row3: ".clean_string($differentiation_2)."\n";

    $email_message .= "Stage-Row4: ".clean_string($stage_3).","."\t";
    $email_message .= "Celltype-Row4: ".clean_string($celltype_3).","."\t";
    $email_message .= "Celltype2-Row4: ".clean_string($celltype2_3).","."\t";
    $email_message .= "Specialization-Row4: ".clean_string($specialization_3).","."\t";
    $email_message .= "Subtypes-Row4: ".clean_string($subtype_3).","."\t";
    $email_message .= "Differentiation Level-Row4: ".clean_string($differentiation_3)."\n";

    $email_message .= "Stage-Row5: ".clean_string($stage_4).","."\t";
    $email_message .= "Celltype-Row5: ".clean_string($celltype_4).","."\t";
    $email_message .= "Celltype2-Row5: ".clean_string($celltype2_4).","."\t";
    $email_message .= "Specialization-Row5: ".clean_string($specialization_4).","."\t";
    $email_message .= "Subtypes-Row5: ".clean_string($subtype_4).","."\t";
    $email_message .= "Differentiation Level-Row5: ".clean_string($differentiation_4)."\n";

$email_message .= " \n";
$email_message .= "INTERACTIONS (for each row)\n";
$email_message .= " \n";
    $email_message .= "Source-Row1: ".clean_string($source_0).","."\t";
    $email_message .= "Target-Row1: ".clean_string($target_0).","."\t";
    $email_message .= "Interaction-Row1: ".clean_string($interaction_0).","."\t";
    $email_message .= "Edge References-Row1: ".clean_string($references2_0)."\n";

    $email_message .= "Source-Row2: ".clean_string($source_1).","."\t";
    $email_message .= "Target-Row2: ".clean_string($target_1).","."\t";
    $email_message .= "Interaction-Row2: ".clean_string($interaction_1).","."\t";
    $email_message .= "Edge References-Row2: ".clean_string($references2_1)."\n";

    $email_message .= "Source-Row3: ".clean_string($source_2).","."\t";
    $email_message .= "Target-Row3: ".clean_string($target_2).","."\t";
    $email_message .= "Interaction-Row3: ".clean_string($interaction_2).","."\t";
    $email_message .= "Edge References-Row3: ".clean_string($references2_2)."\n";

$email_message .= " \n";
    $email_message .= "Comments/Remarks: ".clean_string($remarks)."\n";

require 'phpmailer/PHPMailerAutoload.php';
//Create a new PHPMailer instance
$mail = new PHPMailer;
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;
//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';
//Set the hostname of the mail server
$mail->Host = "atmaca.cc.boun.edu.tr";
//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port = 587;
$mail->SMTPSecure = 'tls'; 
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication
$mail->Username = "flyode-noreply";
//Password to use for SMTP authentication
$mail->Password = "gFg3B2wC";
//Set who the message is to be sent from
$mail->setFrom('flyode-noreply@boun.edu.tr', 'FlyOde');
//Set who the message is to be sent to
$mail->addAddress('icandoflyode@gmail.com', 'ICanDo-FlyOde');
//Set the subject line
$mail->Subject = 'New Annotation for FlyOde';
$mail->Body = $email_message;
$mail->addReplyTo($email_from);

if($mail->Send()) {
    echo "Thank you!";
} else {
    echo "Submission failed. Please contact us.";
}

?>