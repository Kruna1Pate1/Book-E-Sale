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
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id", updatable = false, nullable = false)
    private int categoryId;

    @Enumerated(EnumType.STRING)
    @Column(name = "name", nullable = false, unique = true, length = 50)
    private ECategory name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "category")
    @JsonIgnoreProperties(value = {"category"})
    @ToString.Exclude
    private List<Book> books;
}
