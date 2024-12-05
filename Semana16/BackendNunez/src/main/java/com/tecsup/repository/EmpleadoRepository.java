package com.tecsup.repository;

import com.tecsup.model.Empleado;
import com.tecsup.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {
    Optional<Usuario> findByCorreo(String correo);
}
