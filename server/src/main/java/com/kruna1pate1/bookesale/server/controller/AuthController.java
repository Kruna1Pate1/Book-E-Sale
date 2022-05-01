package com.kruna1pate1.bookesale.server.controller;

import com.kruna1pate1.bookesale.server.exception.EmailAlreadyUsedException;
import com.kruna1pate1.bookesale.server.model.Role;
import com.kruna1pate1.bookesale.server.model.User;
import com.kruna1pate1.bookesale.server.payload.request.LoginRequest;
import com.kruna1pate1.bookesale.server.payload.request.RegisterRequest;
import com.kruna1pate1.bookesale.server.payload.response.LoginResponse;
import com.kruna1pate1.bookesale.server.payload.response.RegisterResponse;
import com.kruna1pate1.bookesale.server.service.RoleService;
import com.kruna1pate1.bookesale.server.service.UserService;
import com.kruna1pate1.bookesale.server.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

/**
 * Created by KRUNAL on 30-04-2022
 */
@Slf4j
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserService userService;
    private final RoleService roleService;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @PostMapping("register")
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) throws EmailAlreadyUsedException {

        User.Name name = new User.Name(request.firstName(), request.lastName());
        String email = request.email();
        String password = request.password();
        Role role = roleService.getByName(request.role());
        User user = new User(null, name, email, password, role);
        User user1 = userService.save(user);
        return ResponseEntity.created(URI.create("/user/" + user1.getUserId())).build();
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.email(),
                            request.password()
                    )
            );

            final UserDetails userDetails = userService.loadUserByUsername(request.email());
            final String jwtToken = jwtUtil.generateToken(userDetails);

            final User user = userService.getByEmail(request.email());
            final LoginResponse response = new LoginResponse(
                    user.getUserId(),
                    user.getName().getFirstName(),
                    user.getName().getLastName(),
                    user.getEmail(),
                    user.getRole().getName().name(),
                    jwtToken
            );
            return ResponseEntity.ok(response);

        } catch (AuthenticationException e) {
            throw new RuntimeException("Bad credential", e);
        }
    }
}
