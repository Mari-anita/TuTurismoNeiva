package com.turismo.turismo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;


@RestController
public class emailController {

    @Autowired
    private JavaMailSender javaMailSender;

    @GetMapping("/enviar-correo-registro")
    public String enviarCorreoRegistro() {
       try{
            String destinatario="tuturismoneiva@gmail.com";
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

    @GetMapping("/enviar-correo-recuperar")
    public String enviarCorreoRecuperar() {
       try{
        String destinatario="tuturismoneiva@gmail.com";
        String asunto="Instrucciones para Restablecer tu Contraseña en Tuturismo Neiva";
        String cuerpo=""
        + "    <p>Estimado/a [Nombre del Cliente],</p>"
        + "    <p>Hemos recibido tu solicitud para restablecer la contraseña de tu cuenta en Tuturismo Neiva. Para proceder con el cambio de contraseña, por favor sigue el enlace a continuación:</p>"
        + "    <p>[Enlace]</p>"
        + "    <p>Este enlace es válido por 15 minutos para garantizar la seguridad de tu cuenta. Si no solicitaste un cambio de contraseña, por favor ignora este mensaje.</p>"
        + "    <p>Gracias por utilizar Tuturismo Neiva.</p>";
        
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

    @GetMapping("/enviar-correo-cambio")
    public String enviarCorreoCambio() {
       try{
        String destinatario="tuturismoneiva@gmail.com";
        String asunto="Confirmación de Cambio de Contraseña en Tuturismo Neiva";
        String cuerpo=""
        + "    <p>Estimado/a [Nombre del Cliente]</p>"
        + "    <p>Nos complace informarte que el cambio de contraseña de tu cuenta en Tuturismo Neiva se ha realizado con éxito.</p>"
        + "    <p>Ahora puedes acceder a tu cuenta con la nueva contraseña que has establecido. Si necesitas realizar alguna otra gestión o si encuentras algún problema,</p>"
        + "    <p> no dudes en ponerte en contacto con nuestro equipo de soporte.</p>"
        + "    <p>Gracias por utilizar Tuturismo Neiva.</p>";
        
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
