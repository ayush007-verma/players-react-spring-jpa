package io.restapi.vitebackend.repositories;

import io.restapi.vitebackend.entities.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {

}
