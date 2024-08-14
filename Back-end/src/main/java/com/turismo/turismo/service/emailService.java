package com.turismo.turismo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class emailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public String enviarCorreoBienvenida(String destinatario){
        try{
            String asunto="¡Bienvenid@ a TuTurismo Neiva!";
            String cuerpo=""
            + "    <p>Nos complace darte la bienvenida a TuTurismo Neiva, la plataforma ideal para descubrir los encantos de Neiva.</p>"
            + "    <p>En TuTurismoNeiva encontrarás todo lo que necesitas para conocer la cultura Neivana, desde información sobre lugares de interés y su ubicación.</p>"
            + "    <p>¡Estamos seguros de que TuTurismo Neiva te ayudará a vivir una experiencia inolvidable en Neiva!</p>"
            + "    <p>¡No dudes en contactarnos si tienes alguna pregunta!</p>"
            + "    <p>Gracias por unirte a nosotros.No olvides seguirnos en nuestras redes sociales.</p>";

            var retorno=enviarCorreo(destinatario,asunto,cuerpo);
            if(retorno) {
                return "se envió correctamente";
            }else {
                return "No se pudo envíar";
            }

        }catch (Exception e) {
            // TODO: handle exception
            return "Error al envíar "+e.getMessage();
        }
    }

    public String enviarCorreoCambioContra(String destinatario){
        try{
            String asunto="Restablece tu Contraseña en Tuturismo Neiva";
            String cuerpo=""
            + "    <style>"
            + "    body {"
            + "    font-family: Arial, sans-serif;"
            + "    background-color: #f4f4f4;" 
            + "    margin: 0;" 
            +"     padding: 0;"
            + "    }"
            + "    .container {"
            + "    max-width: 600px;" 
            + "    margin: 0 auto;" 
            + "    background-color: #fff;" 
            + "    padding: 20px;" 
            + "    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);" 
            + "    }" 
            + "    .header {" 
            + "     background-color: #333;" 
            + "     padding: 5px;" 
            + "        text-align: center;" 
            + "    } "
            + "    .header img {" 
            + "    max-width: 200px;" 
            + "    margin-right: 90%;" 
            + "    }" 
            + "    .content {" 
            + "    padding: 20px;" 
            + "    text-align: center;" 
            + "    color: #333;" 
            + "    }" 
            + "    .content h1 {" 
            + "    font-size: 24px;" 
            + "    font-weight: bold;" 
            + "    margin-bottom: 20px;" 
            + "    }" 
            + "    .content p {" 
            + "    font-size: 16px;" 
            + "    margin-bottom: 20px;" 
            + "    }" 
            + "    .button {" 
            + "    background-color: #ff9800;" 
            + "    color: #fff;" 
            + "    padding: 15px 30px;" 
            + "    text-decoration: none;" 
            + "    border-radius: 50px;" 
            + "    display: inline-block;" 
            + "    font-size: 16px;" 
            + "    }" 
            + "    .footer {" 
            + "    background-color: #333;" 
            + "    color: #fff;" 
            + "    padding: 10px;" 
            + "    text-align: center;"
            + "    margin-top: 20px;" 
            + "    }" 
            + "    .footer a {" 
            + "    color: #fff;" 
            + "    text-decoration: none;" 
            + "    margin: 0 10px;" 
            + "    }" 
            + "    .footer a:hover {" 
            + "    text-decoration: underline;" 
            + "    }"
            + "    </style>"
            + "    <body>"
            + "    <div class=\"container\">\r\n" 
            + "    <div class=\"header\">\r\n" 
            + "    <img src=\"/Front-end/Img/Logo.tuturismoneiva.png\" alt=\"TuTurismoNeiva Logo\">\r\n" 
            + "    </div>\r\n" 
            + "    <div class=\"content\">\r\n" 
            + "    <h1>¡Hola [nombre usuario]!</h1>\r\n" 
            + "    <p>Solicitaste el restablecimiento de tu contraseña en nuestra página. Haz clic en el botón que aparece a continuación para cambiarla:</p>\\r\\n" 
            + "    <a href=\"#\" class=\"button\">Recuperar contraseña</a>\r\n" 
            + "    <p>En caso de que no hayas solicitado el cambio de tu contraseña, por favor ignora este mensaje.<br>Este\r\n" 
            + "    enlace es válido durante los próximos 15 minutos.</p>\r\n"
            + "    <p>Saludos,<br>TuTurismo Neiva</p>\r\n" 
            + "    </div>\r\n" 
            + "    <div class=\"footer\">\r\n" 
            + "    <a href=\"#\">Términos y condiciones</a> | <a href=\"#\">Política de privacidad</a>\r\n" 
            + "    <div>\r\n" 
            + "    <box-icon name='phone' type='solid' color='#ffffff'></box-icon>\r\n" 
            + "    <box-icon name='gmail' type='logo' color='#f7f5f5'></box-icon>\r\n" 
            + "    <box-icon name='instagram-alt' type='logo' color='#ffffff'></box-icon>\r\n" 
            + "    <box-icon name='tiktok' type='logo' color='#f9f7f7'></box-icon>\r\n" 
            + "    </div>\r\n" 
            + "        </div>\r\n" 
            + "    </div>\r\n" 
            + "    <script src=\"https://unpkg.com/boxicons@2.1.4/dist/boxicons.js\"></script>\r\n" 
            + "    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\"\r\n" 
            + "        integrity=\"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\"\r\n" 
            + "        crossorigin=\"anonymous\"></script>\r\n" 
            + "</body>";

            var retorno=enviarCorreo(destinatario,asunto,cuerpo);
            if(retorno) {
                return "se envió correctamente";
            }else {
                return "No se pudo envíar";
            }

        }catch (Exception e) {
            // TODO: handle exception
            return "Error al envíar "+e.getMessage();
        }
    }

    public String enviarNotificacionCambioContra(String destinatario){
        try{
            String asunto="Has cambiado exitosamente tu contraseña en nuestra plataforma.";
            String cuerpo=""
            + "    <p>Nos complace darte la bienvenida a TuTurismo Neiva, la plataforma ideal para descubrir los encantos de Neiva.</p>"
            + "    <p>En TuTurismoNeiva encontrarás todo lo que necesitas para conocer la cultura Neivana, desde información sobre lugares de interés y su ubicación.</p>"
            + "    <p>¡Estamos seguros de que TuTurismo Neiva te ayudará a vivir una experiencia inolvidable en Neiva!</p>"
            + "    <p>¡No dudes en contactarnos si tienes alguna pregunta!</p>"
            + "    <p>Gracias por unirte a nosotros.No olvides seguirnos en nuestras redes sociales.</p>";

            var retorno=enviarCorreo(destinatario,asunto,cuerpo);
            if(retorno) {
                return "se envió correctamente";
            }else {
                return "No se pudo envíar";
            }

        }catch (Exception e) {
            // TODO: handle exception
            return "Error al envíar "+e.getMessage();
        }
    }



    public boolean enviarCorreo(String destinatario,String asunto,String cuerpo) throws MessagingException {
		try {
			MimeMessage message=javaMailSender.createMimeMessage();
			MimeMessageHelper helper=new MimeMessageHelper(message,true);
			
			helper.setTo(destinatario);
			helper.setSubject(asunto);
			helper.setText(cuerpo,true);
			
			javaMailSender.send(message);
			return true;
		}catch (Exception e) {

			return false;
		}
		
	}
}