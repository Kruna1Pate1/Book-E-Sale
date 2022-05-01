package com.kruna1pate1.bookesale.server.repository;

import com.kruna1pate1.bookesale.server.model.Role;
import com.kruna1pate1.bookesale.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

/**
 * Created by KRUNAL on 04-03-2022
 */
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

    Optional<User> deleteByEmail(String email);

    boolean existsByEmail(String email);

    @Modifying
    @Query("UPDATE User u SET u.name.firstName = :firstName, u.name.lastName = :lastName WHERE u.email = :email")
    void setName(String email, String firstName, String lastName);

    @Modifying
//    @Query("UPDATE User u SET u.role.roleId = (SELECT Role.roleId FROM Role WHERE name = :role) WHERE u.email = :email")
    @Query("UPDATE User u SET u.role = :role WHERE u.email = :email")
    void setRole(String email, Role role);
}
