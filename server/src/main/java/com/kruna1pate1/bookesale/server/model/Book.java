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
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id", updatable = false, nullable = false)
    private Integer bookId;

    @Column(name = "name", nullable = false, length = 500)
    private String name;

    @Column(name = "price", nullable = false, length = 10)
    private long price;

    @Column(name = "description", length = 2000)
    private String description;

    @Column(name = "base64image")
    private String base64image;

    @JoinColumn(name = "category_id", nullable = false)
    @ManyToOne
    @JsonIgnoreProperties(value = {"books"})
    private Category category;
}
