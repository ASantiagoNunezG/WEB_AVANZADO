package com.tecsup.repository;

import com.tecsup.model.Cargo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CargoRepository extends JpaRepository<Cargo, Long> {
    // Aquí puedes añadir métodos personalizados si es necesario
}

