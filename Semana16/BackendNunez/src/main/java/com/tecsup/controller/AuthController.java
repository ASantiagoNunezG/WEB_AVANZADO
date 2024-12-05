package com.tecsup.controller;

import com.tecsup.model.JwtResponse;
import com.tecsup.model.ResponseMessage;
import com.tecsup.model.Usuario;
import com.tecsup.service.UsuarioService;
import com.tecsup.config.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Usuario usuario) {
        // Verificar si el correo ya está registrado
        if (usuarioService.findByCorreo(usuario.getCorreo()).isPresent()) {
            return ResponseEntity.badRequest().body(new ResponseMessage("El correo ya está registrado"));
        }

        // Registrar al usuario
        usuarioService.register(usuario);

        // Devolver respuesta exitosa como objeto JSON
        return ResponseEntity.ok(new ResponseMessage("Usuario registrado con éxito"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario usuario) {
        Optional<Usuario> user = usuarioService.findByCorreo(usuario.getCorreo());

        if (user.isPresent() && passwordEncoder.matches(usuario.getClave(), user.get().getClave())) {
            String token = jwtUtil.generateToken(user.get().getCorreo());
            // Devuelve el token dentro de un objeto JSON
            return ResponseEntity.ok(new JwtResponse(token));
        }
        return ResponseEntity.badRequest().body(new ResponseMessage("Credenciales inválidas"));
    }

}

