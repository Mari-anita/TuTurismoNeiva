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
            //String destinatario="maidyladino04@gmail.com";
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
