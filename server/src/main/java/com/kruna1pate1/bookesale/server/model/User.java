package com.kruna1pate1.bookesale.server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;

/**
 * Created by KRUNAL on 04-03-2022
 */
@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", updatable = false, nullable = false)
    private Integer userId;

    @Embedded
    private Name name;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false, length = 100)
    private String password;

    @JoinColumn(name = "role_id", nullable = false)
    @ManyToOne
    @JsonIgnoreProperties(value = {"users"})
    private Role role;


    @Embeddable
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Name {

        @Column(name = "first_name", nullable = false, length = 50)
        private String firstName;

        @Column(name = "last_name", nullable = false, length = 50)
        private String lastName;
    }
}

