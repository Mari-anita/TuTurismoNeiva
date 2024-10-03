package com.turismo.turismo.service;

import java.io.IOException;
import java.nio.file.*;

import org.springframework.web.multipart.MultipartFile;

public class gestionArchivoService {
     // private final String uploadDir = "uploads";
    //ubicación en windows
    private final String uploadDir = "C:/imagenes";
    //ubicación en linux
    // private final String uploadDir = "/root/imagenes";

    public String storeFile(MultipartFile file) throws IOException {
        Path uploadPath = Paths.get(uploadDir).toAbsolutePath().normalize();
        Files.createDirectories(uploadPath);

        // Obtener el nombre del archivo original
        String fileName = file.getOriginalFilename();

        // Construir la ruta completa del archivo
        Path filePath = uploadPath.resolve(fileName).normalize();

        // Guardar el archivo en el servidor
        Files.copy(file.getInputStream(), filePath);

        return fileName;
    }
}
