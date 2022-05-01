package com.kruna1pate1.bookesale.server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.List;

/**
 * Created by KRUNAL on 04-03-2022
 */
@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id", updatable = false, nullable = false)
    private int roleId;

    @Enumerated(EnumType.STRING)
    @Column(name = "name", nullable = false, unique = true, length = 50)
    private ERole name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "role")
    @ToString.Exclude
    @JsonIgnoreProperties(value = {"role"})
    private List<User> users;
}
