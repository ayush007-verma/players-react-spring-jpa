package io.restapi.vitebackend.api;

import io.restapi.vitebackend.entities.Player;
import io.restapi.vitebackend.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@CrossOrigin(maxAge = 3600)
@RestController
public class RestControllers {

    @Autowired
    public PlayerRepository playerRepository;

    @CrossOrigin(origins = {"http://localhost:5174", "http://localhost:8080"}, allowedHeaders = "Requestor-Type")
    @GetMapping("/api/test")
    public List<String> testEndpoints() {
        return new ArrayList<String>(Arrays.asList("virat,rohit,rahul".split(",")));
    }

    @CrossOrigin(origins = {"http://localhost:5174", "http://localhost:8080"}, allowedHeaders = "Requestor-Type")
    @GetMapping("/api/players")
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    @CrossOrigin(origins = {"http://localhost:5174", "http://localhost:8080"}, allowedHeaders = "Requestor-Type")
    @GetMapping("/api/player")
    public Player getPlayerId(@RequestParam("id") Long id) {
        return playerRepository.findById(id).get();
    }


}
