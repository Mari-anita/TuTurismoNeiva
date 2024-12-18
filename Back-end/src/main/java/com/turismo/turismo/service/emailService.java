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

    public String enviarCorreoBienvenida(String destinatario, String nombreCompleto) {
        try {
            String asunto = "¡Bienvenid@  " + nombreCompleto + "  a TuTurismo Neiva!";
            String cuerpo = ""
                    + "<body style=\"font-family: Arial, sans-serif; \">\r\n"
                    + "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/dist/boxicons.js\"></script>"
                    + "<div class=\"container\" style=\"width: 70%; background-color: #f4f4f4; margin: 0% 10% 0% 10%; \">\r\n"
                    + "<div class=\"header\" style=\"background-color: #333; padding: 5px; text-align: center;\">\r\n"
                    + " <img src=\"https://i.postimg.cc/vTxcSyPm/logo.png\" alt=\"TuTurismoNeiva Logo\" style=\"max-width: 100px; margin-right: 90%;\">\r\n"
                    + "</div>\r\n"
                    + "<div class=\"content\" style=\" text-align: center; color: #333;\">\r\n"
                    + "<h1 style=\"font-size: 24px; font-weight: bold; margin-bottom: 20px;\">¡Hola " + nombreCompleto
                    + "!</h1>\r\n"
                    + "<p style=\"font-size: 16px; margin-bottom: 20px;\"> Nos complace darte la bienvenida a TuTurismoNeiva, la plataforma ideal para descubrir los encantos de la ciudad de Neiva.En TuTurismoNeiva encontrarás todo lo que necesitas para conocer la cultura Neivana, desde información sobre lugares de interés hasta su ubicación. ¡Estamos seguros de que TuTurismoNeiva te ayudará a vivir una experiencia inolvidable en la ciudad! ¡No dudes en contactarnos si tienes alguna pregunta! Gracias por unirte a nosotros. No olvides seguirnos en nuestras redes sociales.</p>\r\n"
                    + "<br>TuTurismo Neiva\r\n"
                    + "</div>\r\n"
                    + "<div class=\"footer\" style=\"background-color: #333; color: #fff; padding: 10px; text-align: center; margin-top: 20px;\">\r\n"
                    + "<a href=\"#\" style=\"color: #fff; text-decoration: none; margin: 0 10px;\">Términos y condiciones</a> | <a href=\"#\" style=\"color: #fff; text-decoration: none; margin: 0 10px;\">Política de privacidad</a>\r\n"
                    + "<div>\r\n"
                    + "<box-icon name='phone' type='solid' color='#ffffff'></box-icon>\r\n"
                    + "<box-icon name='gmail' type='logo' color='#f7f5f5'></box-icon>\r\n"
                    + "<box-icon name='instagram-alt' type='logo' color='#ffffff'></box-icon>\r\n"
                    + "<box-icon name='tiktok' type='logo' color='#f9f7f7'></box-icon>\r\n"
                    + "</div>\r\n"
                    + "</div>\r\n"
                    + "</div>\r\n"
                    + " <script src=\"https://unpkg.com/boxicons@2.1.4/dist/boxicons.js\"></script>\r\n"
                    + "    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\"\r\n"
                    + "        integrity=\"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\"\r\n"
                    + "        crossorigin=\"anonymous\"></script>\r\n"
                    + "\r\n"
                    + "</body>";

            var retorno = enviarCorreo(destinatario, asunto, cuerpo);
            if (retorno) {
                return "se envió correctamente";
            } else {
                return "No se pudo envíar";
            }

        } catch (Exception e) {
            // TODO: handle exception
            return "Error al envíar " + e.getMessage();
        }
    }

    public String enviarNotificacionCambioContra(String destinatario) {
        try {
            String asunto = "Has cambiado exitosamente tu contraseña en TuTurismo Neiva";
            String cuerpo = "<body style=\"font-family: Arial, sans-serif; \">\r\n"
                    + "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/dist/boxicons.js\"></script>"
                    + "<div class=\"container\" style=\"width: 70%; background-color: #f4f4f4; margin: 0% 10% 0% 10%; \">\r\n"
                    + "<div class=\"header\" style=\"background-color: #333; padding: 5px; text-align: center;\">\r\n"
                    + " <img src=\"https://i.postimg.cc/vTxcSyPm/logo.png\" alt=\"TuTurismoNeiva Logo\" style=\"max-width: 100px; margin-right: 90%;\">\r\n"
                    + "</div>\r\n"
                    + "<div class=\"content\" style=\" text-align: center; color: #333;\">\r\n"
                    + "<h1 style=\"font-size: 24px; font-weight: bold; margin-bottom: 20px;\">¡Hola!</h1>\r\n"
                    + "<p style=\"font-size: 16px; margin-bottom: 20px;\">Has cambiado exitosamente tu contraseña en nuestra plataforma. "
                    + "Ahora puedes ingresar con tu nueva contraseña y disfrutar de todo lo que TuTurismo Neiva tiene para ofrecerte.</p>\r\n"
                    + "<p style=\"font-size: 16px; margin-bottom: 20px;\">Nos complace darte la bienvenida a TuTurismo Neiva, "
                    + "la plataforma ideal para descubrir los encantos de Neiva. ¡No dudes en contactarnos si tienes alguna pregunta!</p>\r\n"
                    + "<p style=\"font-size: 16px; margin-bottom: 20px;\">Gracias por unirte a nosotros. No olvides seguirnos en nuestras redes sociales.</p>\r\n"
                    + "<br>TuTurismo Neiva\r\n"
                    + "</div>\r\n"
                    + "<div class=\"footer\" style=\"background-color: #333; color: #fff; padding: 10px; text-align: center; margin-top: 20px;\">\r\n"
                    + "<a href=\"#\" style=\"color: #fff; text-decoration: none; margin: 0 10px;\">Términos y condiciones</a> | "
                    + "<a href=\"#\" style=\"color: #fff; text-decoration: none; margin: 0 10px;\">Política de privacidad</a>\r\n"
                    + "<div>\r\n"
                    + "<box-icon name='phone' type='solid' color='#ffffff'></box-icon>\r\n"
                    + "<box-icon name='gmail' type='logo' color='#f7f5f5'></box-icon>\r\n"
                    + "<box-icon name='instagram-alt' type='logo' color='#ffffff'></box-icon>\r\n"
                    + "<box-icon name='tiktok' type='logo' color='#f9f7f7'></box-icon>\r\n"
                    + "</div>\r\n"
                    + "</div>\r\n"
                    + "</div>\r\n"
                    + " <script src=\"https://unpkg.com/boxicons@2.1.4/dist/boxicons.js\"></script>\r\n"
                    + "    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\" "
                    + "        integrity=\"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\" "
                    + "        crossorigin=\"anonymous\"></script>\r\n"
                    + "\r\n"
                    + "</body>";

            var retorno = enviarCorreo(destinatario, asunto, cuerpo);
            if (retorno) {
                return "Se envió correctamente";
            } else {
                return "No se pudo enviar";
            }

        } catch (Exception e) {
            return "Error al enviar: " + e.getMessage();
        }
    }

    public String enviarNotificacionRecuperarContra(String destinatario, String enlace) {
        try {
            String asunto = "Restablecimiento de contraseña TuTurismo Neiva";
            String cuerpo = "<body style=\"font-family: Arial, sans-serif; background-color: #f4f4f4;\">\r\n"
                    + "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/dist/boxicons.js\"></script>"
                    + "<div class=\"container\" style=\"width: 70%; background-color: #f4f4f4; margin: 0% 10% 0% 10%; \">\r\n"
                    + "<div class=\"header\" style=\"background-color: #333; padding: 5px; text-align: center;\">\r\n"
                    + " <img src=\"https://i.postimg.cc/vTxcSyPm/logo.png\" alt=\"TuTurismoNeiva Logo\" style=\"max-width: 100px; margin-right: 90%;\">\r\n"
                    + "</div>\r\n"
                    + "<div class=\"content\" style=\"text-align: center; color: #333;\">\r\n"
                    + "<h1 style=\"font-size: 24px; font-weight: bold; margin-bottom: 20px;\">¡Hola!</h1>\r\n"
                    + "<p style=\"font-size: 16px; margin-bottom: 20px;\">Hemos recibido una solicitud para restablecer la contraseña de su cuenta en TuTurismo Neiva. "
                    + "Para restablecer su contraseña, por favor haga clic en el siguiente enlace:</p>\r\n"
                    + "<p style=\"font-size: 16px; color: #333; text-align: center; margin: 20px 0;\">\r\n"
                    + "<a href=\"" + enlace
                    + "\" style=\"color: #202C4A; text-decoration: none; font-weight: bold;\">Restablecer contraseña</a>\r\n"
                    + "</p>\r\n"
                    + "<p style=\"font-size: 16px; margin-bottom: 20px;\">Este enlace es válido por 15 minutos. Si el enlace ha expirado, "
                    + "por favor solicite un nuevo enlace a través de la página de recuperar contraseña.</p>\r\n"
                    + "<p style=\"font-size: 16px; margin-bottom: 20px;\">¡Gracias por elegir TuTurismo Neiva! Estamos aquí para ayudarte a descubrir los encantos de Neiva. "
                    + "No dudes en contactarnos si tienes alguna pregunta.</p>\r\n"
                    + "</div>\r\n"
                    + "<div class=\"footer\" style=\"background-color: #333; color: #fff; padding: 10px; text-align: center; margin-top: 20px;\">\r\n"
                    + "<a href=\"#\" style=\"color: #fff; text-decoration: none; margin: 0 10px;\">Términos y condiciones</a> | "
                    + "<a href=\"#\" style=\"color: #fff; text-decoration: none; margin: 0 10px;\">Política de privacidad</a>\r\n"
                    + "<div>\r\n"
                    + "<box-icon name='phone' type='solid' color='#ffffff'></box-icon>\r\n"
                    + "<box-icon name='gmail' type='logo' color='#f7f5f5'></box-icon>\r\n"
                    + "<box-icon name='instagram-alt' type='logo' color='#ffffff'></box-icon>\r\n"
                    + "<box-icon name='tiktok' type='logo' color='#f9f7f7'></box-icon>\r\n"
                    + "</div>\r\n"
                    + "</div>\r\n"
                    + "</div>\r\n"
                    + "<script src=\"https://unpkg.com/boxicons@2.1.4/dist/boxicons.js\"></script>\r\n"
                    + "<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\" "
                    + "integrity=\"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\" "
                    + "crossorigin=\"anonymous\"></script>\r\n"
                    + "</body>";

            var retorno = enviarCorreo(destinatario, asunto, cuerpo);
            if (retorno) {
                return "Se envió correctamente";
            } else {
                return "No se pudo enviar";
            }

        } catch (Exception e) {
            return "Error al enviar: " + e.getMessage();
        }
    }

    public boolean enviarCorreo(String destinatario, String asunto, String cuerpo) throws MessagingException {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(destinatario);
            helper.setSubject(asunto);
            helper.setText(cuerpo, true);

            javaMailSender.send(message);
            return true;
        } catch (Exception e) {

            return false;
        }

    }

    public String enviarCorreoRadicadoPqrsfd( String correo, String nombreApellido, String code) {
        try {
            String asunto = "Confirmación de Radicado de PQRSFD.";
            String cuerpo = ""
            + "<body style=\"font-family: Arial, sans-serif; \">\r\n"
            + "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/dist/boxicons.js\"></script>"
            + "<div class=\"container\" style=\"width: 70%; background-color: #f4f4f4; margin: 0% 10% 0% 10%; \">\r\n"
            + "<div class=\"header\" style=\"background-color: #333; padding: 5px; text-align: center;\">\r\n"
            + " <img src=\"https://i.postimg.cc/vTxcSyPm/logo.png\" alt=\"TuTurismoNeiva Logo\" style=\"max-width: 100px; margin-right: 90%;\">\r\n"
            + "</div>\r\n"
            + "<div class=\"content\" style=\" text-align: center; color: #333;\">\r\n"
            + "<h1 style=\"font-size: 24px; margin-bottom: 20px;\">¡Hola"
            + "<style=\"font-size: 16px; margin-bottom: 20px;\">\n" + //
            "\n" + //
            "Estimado/a "+ nombreApellido +",\n" + //
            "\n" + //
            "Espero que se encuentre bien.\n" + //
            "\n" + //
            "Nos gustaría informarle que hemos recibido su solicitud registrada en nuestro sistema. Su PQRSFD ha sido asignado el número de radicado: "
            + code + ". Este número es importante para el seguimiento de su solicitud.\r\n"
            + //
            "\n" + //
            "Le agradecemos por contactarnos y le aseguramos que nuestro equipo está trabajando para resolver su requerimiento lo más pronto posible."
            + //
            "\n" + //
            "No olvides seguirnos en nuestras redes sociales.</p>\r\n"
            + "<br>TuTurismo Neiva\r\n"
            + "</div>\r\n"
            + "<div class=\"footer\" style=\"background-color: #333; color: #fff; padding: 10px; text-align: center; margin-top: 20px;\">\r\n"
            + "<a href=\"#\" style=\"color: #fff; text-decoration: none; margin: 0 10px;\">Términos y condiciones</a> | <a href=\"#\" style=\"color: #fff; text-decoration: none; margin: 0 10px;\">Política de privacidad</a>\r\n"
            + "<div>\r\n"
            + "<box-icon name='phone' type='solid' color='#ffffff'></box-icon>\r\n"
            + "<box-icon name='gmail' type='logo' color='#f7f5f5'></box-icon>\r\n"
            + "<box-icon name='instagram-alt' type='logo' color='#ffffff'></box-icon>\r\n"
            + "<box-icon name='tiktok' type='logo' color='#f9f7f7'></box-icon>\r\n"
            + "</div>\r\n"
            + "</div>\r\n"
            + "</div>\r\n"
            + " <script src=\"https://unpkg.com/boxicons@2.1.4/dist/boxicons.js\"></script>\r\n"
            + "    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\"\r\n"
            + "        integrity=\"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\"\r\n"
            + "        crossorigin=\"anonymous\"></script>\r\n"
            + "\r\n"
            + "</body>";
            
            var retorno = enviarCorreo(correo, asunto, cuerpo);
            if (retorno) {
                return "se envió correctamente";
            } else {
                return "No se pudo envíar";
            }

        } catch (Exception e) {
            // TODO: handle exception
            return "Error al envíar " + e.getMessage();
        }
    }
}