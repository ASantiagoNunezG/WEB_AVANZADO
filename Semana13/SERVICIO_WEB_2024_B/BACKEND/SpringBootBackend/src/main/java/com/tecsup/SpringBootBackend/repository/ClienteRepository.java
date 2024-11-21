package com.tecsup.SpringBootBackend.repository;

import com.tecsup.SpringBootBackend.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
