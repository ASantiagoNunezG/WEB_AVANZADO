package com.tecsup.SpringBootBackend.repository;

import com.tecsup.SpringBootBackend.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
}
