package com.kruna1pate1.bookesale.server.controller;

import com.kruna1pate1.bookesale.server.exception.UnauthorizedException;
import com.kruna1pate1.bookesale.server.model.ERole;
import com.kruna1pate1.bookesale.server.model.Role;
import com.kruna1pate1.bookesale.server.model.User;
import com.kruna1pate1.bookesale.server.payload.request.UpdateUserRequest;
import com.kruna1pate1.bookesale.server.payload.response.UserResponse;
import com.kruna1pate1.bookesale.server.service.RoleService;
import com.kruna1pate1.bookesale.server.service.UserService;
import com.kruna1pate1.bookesale.server.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by KRUNAL on 02-05-2022
 */
@Slf4j
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final RoleService roleService;
    private final JwtUtil jwtUtil;

    @GetMapping()
    public ResponseEntity<List<User>> getAll() {
        return ResponseEntity.ok(userService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getById(@PathVariable int id, @RequestHeader("Authorization") String jwtHeader) throws UnauthorizedException {
        final String jwtToken = jwtUtil.parseJwt(jwtHeader);
        final User user = userService.getById(id);

        if (jwtUtil.extractUsername(jwtToken).equals(user.getEmail())) {

            final UserResponse response = new UserResponse(
                    user.getUserId(),
                    user.getName().getFirstName(),
                    user.getName().getLastName(),
                    user.getEmail(),
                    user.getRole().getName().name(),
                    jwtToken
            );
            return ResponseEntity.ok(response);

        } else {
            throw new UnauthorizedException("You are not authorized to access this page");
        }
    }

    @PutMapping("{id}")
    public ResponseEntity<UserResponse> update(@PathVariable int id, @RequestBody UpdateUserRequest request, @RequestHeader("Authorization") String jwtHeader) throws UnauthorizedException {
        final String jwtToken = jwtUtil.parseJwt(jwtHeader);
        final User user = userService.getById(id);

        if (jwtUtil.extractUsername(jwtToken).equals(user.getEmail())) {

            User.Name name = request.name();
            String password = request.password();
            Role role = roleService.getById(request.role());

            if (name != null) user.setName(name);
            if (password != null) user.setPassword(password);
            if (role != null) user.setRole(role);

            User user1 = userService.update(user);

            UserResponse response = new UserResponse(
                    user1.getUserId(),
                    user1.getName().getFirstName(),
                    user1.getName().getLastName(),
                    user1.getEmail(),
                    user1.getRole().getName().name(),
                    jwtToken);

            return ResponseEntity.ok(response);

        } else {
            throw new UnauthorizedException("You are not authorized to access this page");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<UserResponse> deleteById(@PathVariable int id, @RequestHeader("Authorization") String jwtHeader) throws UnauthorizedException {
        final String jwtToken = jwtUtil.parseJwt(jwtHeader);
        final User user = userService.getById(id);

        if (jwtUtil.extractUsername(jwtToken).equals(user.getEmail())) {

            final UserResponse response = new UserResponse(
                    user.getUserId(),
                    user.getName().getFirstName(),
                    user.getName().getLastName(),
                    user.getEmail(),
                    user.getRole().getName().name(),
                    jwtToken
            );
            userService.deleteByEmail(user.getEmail());
            return ResponseEntity.ok(response);

        } else {
            throw new UnauthorizedException("You are not authorized to access this page");
        }

    }

    @PreAuthorize("hasAuthority(ADMIN)")
    @DeleteMapping()
    public ResponseEntity deleteAll() {
        userService.deleteAll();
        return ResponseEntity.ok().build();
    }
}
