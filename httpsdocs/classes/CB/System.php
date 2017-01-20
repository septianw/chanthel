<?php
namespace CB;
use CB\PHPMailer as PHPMailer;
class System
{
    /**
     * get countries list with their phone codes
     *
     * this function returns an array of records for arrayReader
     *     first column is id
     *     second is name
     *     third is phone code
     * @return json response
     */
    public function getCountries()
    {
        $rez = array();
        $res = DB\dbQuery(
            'SELECT
                id
                ,name
                ,phone_codes
            FROM ' . PREFIX . '_casebox.country_phone_codes
            ORDER BY name'
        );

        while ($r = $res->fetch_assoc()) {
            $rez[] = array_values($r);
        }

        return array('success' => true, 'data' => $rez);
    }

    /**
     * get defined timezones
     *
     * returns an array of records for arrayReader
     * record contains two fields: caption, gmt offset
     * @return json response
     */
    public function getTimezones()
    {

        $timezones = [];
        $offsets = [];
        $now = new \DateTime();

        foreach (\DateTimeZone::listIdentifiers() as $timezone) {
            $now->setTimezone(new \DateTimeZone($timezone));
            $offsets[] = $offset = $now->getOffset();
            $timezones[$timezone] = array(
                $timezone
                ,$offset
                ,'(GMT'.$this->formatGmtOffset($offset).') '.$this->formatTimezoneName($timezone)
            );
        }

        array_multisort($offsets, $timezones);

        return array('success' => true, 'data' => array_values($timezones));
    }

    /**
     * check a given timezon to be valid
     * @param  varchar $timezone valid php timezone
     * @return boolean
     */
    public static function isValidTimezone ($timezone)
    {
        return in_array($timezone, \DateTimeZone::listIdentifiers());
    }

    /**
     * get gmt offset in minutes
     * @param  varchar $timezone php compatible timezone
     * @return int
     */
    public static function getGmtOffset($timezone)
    {
        $now = new \DateTime();
        if (System::isValidTimezone($timezone)) {
            $now->setTimezone(new \DateTimeZone($timezone));
        }

        return ($now->getOffset() / 60);
    }

    public function formatGmtOffset($offset)
    {
        $hours = intval($offset / 3600);
        $minutes = abs(intval($offset % 3600 / 60));

        return ($offset ? sprintf('%+03d:%02d', $hours, $minutes) : '');
    }

    public function formatTimezoneName($name)
    {
        $name = str_replace('/', ', ', $name);
        $name = str_replace('_', ' ', $name);
        $name = str_replace('St ', 'St. ', $name);

        return $name;
    }

    /**
     * get template file content from sys/templates folder
     * @param  varchar $templateName
     * @return varchar | false
     */
    public static function getEmailTemplate($templateName)
    {
        $rez = false;

        $templateName = basename($templateName);

        $language = Config::get('user_language');

        $template = TEMPLATES_DIR . $templateName . '_' . $language . '.html';
        //try english by default if doesnt exist
        if (!file_exists($template)) {
            $template = TEMPLATES_DIR . $templateName . '_en.html';
        }

        //try wihout language if also doesnt exist
        if (!file_exists($template)) {
            $template = TEMPLATES_DIR . $templateName . '.html';
        }

        if (!file_exists($template)) {
            static::notifyAdmin('Chanthel template not found', $template);
        }

        $rez = file_get_contents($template);

        return $rez;
    }

    /**
     * Admin notification by mail method
     * @param  varchar $subject
     * @param  varchar $body
     * @return boolean
     */
    public static function notifyAdmin($subject, $body)
    {
        return static::sendMail(
            Config::get('admin_email'),
            $subject,
            $body
        );
    }

    /**
     * Common send mail function
     * @param  varchar $email
     * @param  varchar $subject
     * @param  varchar $body
     * @return boolean
     */
    public static function sendMail($email, $subject, $body)
    {
        $coreName = Config::get('core_name');
        $sender = Config::get('sender_email');
        $sender = "\"$sender ($coreName)\" <$sender>";

        
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
        $mail->Host = "smtp.gmail.com";
        //Set the SMTP port number - likely to be 25, 465 or 587
        $mail->Port = 587;
        //Whether to use SMTP authentication
        $mail->SMTPAuth = true;
        //Username to use for SMTP authentication
        $mail->Username = "chanthel247@gmail.com";
        //Password to use for SMTP authentication
        $mail->Password = "chanthel1234";
        //Set who the message is to be sent from
        $mail->setFrom('chanthel247@gmail.com');

        $mail->addAddress($email);
        //Set the subject line
        $mail->Subject = $subject;
        //Read an HTML message body from an external file, convert referenced images to embedded,
        //convert HTML into a basic plain-text alternative body
        $mail->msgHTML($body);
        //Replace the plain text body with one created manually
        // $mail->Body = $body;
        // $mail->AltBody = 'This is a plain-text message body';
        //Attach an image file
        // $mail->addAttachment('images/phpmailer_mini.png');

        //send the message, check for errors
        // if (!$mail->send()) {
        //     echo "Mailer Error: " . $mail->ErrorInfo;
        // } else {
        //     echo "Message sent!";
        // }
        return $mail->send();
        // print_r($mail);exit;
        // return $mail->send();
        // return mail(
        //     $email,
        //     $subject,
        //     $body,
        //     "Content-type: text/html; charset=utf-8\r\nFrom: " . $sender . "\r\n"
        // );
    }
}
