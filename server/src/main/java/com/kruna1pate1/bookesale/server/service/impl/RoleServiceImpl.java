package com.kruna1pate1.bookesale.server.service.impl;

import com.kruna1pate1.bookesale.server.exception.RoleNotFoundException;
import com.kruna1pate1.bookesale.server.model.ERole;
import com.kruna1pate1.bookesale.server.model.Role;
import com.kruna1pate1.bookesale.server.repository.RoleRepository;
import com.kruna1pate1.bookesale.server.service.RoleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by KRUNAL on 04-03-2022
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    @Override
    public Role save(Role role) {
        roleRepository.save(role);
        log.info("Role {} saved in database", role);
        return role;
    }

    @Override
    public List<Role> getAll() {
        return roleRepository.findAll();
    }

    @Override
    public Role getById(int id) {
        Role role = roleRepository.findById(id).orElseThrow(() -> {
            log.error("Role {} not found in database", id);
            return new RoleNotFoundException("Role not found");
        });
        log.info("Role with id {} found in database: {}", id, role);
        return role;
    }

    @Override
    public void deleteById(int id) {
        roleRepository.deleteById(id);
        log.info("Role {} deleted from database", id);
    }

    @Override
    public Role getByName(String name) {
        Role role = roleRepository.findByName(ERole.valueOfIgnoreCase(name)).orElseThrow(() -> {
            log.error("Role {} not found in database", name);
            return new RoleNotFoundException("Role not found");
        });
        log.info("Role with name {} found in database: {}", name, role);
        return role;
    }

    @Override
    public void deleteByName(String name) {
        roleRepository.deleteByName(ERole.valueOfIgnoreCase(name));
        log.info("Role {} deleted from database", name);
    }

    @Override
    public void deleteAll() {
        log.info("All roles deleted from database");
        roleRepository.deleteAll();
    }
}
