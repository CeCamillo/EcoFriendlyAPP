package com.ecofriendlyapi.Service;

import java.util.HashMap;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class OsrmService {
    private final RestTemplate restTemplate = new RestTemplate();

    public HashMap<String, Object> getRoute(double initLat, double initLon, double finLat, double finLon) {
        String ApiURL = "https://router.project-osrm.org/route/v1/driving/";
        String coordenadas = initLon + "," + initLat + ";" + finLon + "," + finLat;
        String url = ApiURL + coordenadas + "?overview=simplified&geometries=geojson&steps=false&alternatives=false";

        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        if (response.getStatusCode() == HttpStatus.OK) {
            try {
                ObjectMapper objectMapper = new ObjectMapper();
                HashMap<String, Object> jsonResponse = objectMapper.readValue(response.getBody(), HashMap.class);
                return jsonResponse;
            } catch (Exception e) {
                throw new RuntimeException("Erro ao transformar JSON", e);
            }
        } else {
            throw new RuntimeException("Erro de conexão com a OSRM API");
        }
    }
}
