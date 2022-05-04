package com.kruna1pate1.bookesale.server.repository;

import com.kruna1pate1.bookesale.server.model.ERole;
import com.kruna1pate1.bookesale.server.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Created by KRUNAL on 04-03-2022
 */
public interface RoleRepository extends JpaRepository<Role, Integer> {

    Optional<Role> findByName(ERole role);

    void deleteByName(ERole role);
}
