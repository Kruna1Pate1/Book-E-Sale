package com.kruna1pate1.bookesale.server.service;

import com.kruna1pate1.bookesale.server.model.Role;

import java.util.List;

/**
 * Created by KRUNAL on 04-03-2022
 */
public interface RoleService {
    Role save(Role role);

    List<Role> getAll();

    Role getById(int id);

    Role deleteById(int id);

    Role getByName(String name);

    Role deleteByName(String name);

    void deleteAll();
}
