package com.ecofriendlyapi.Service;

import java.util.HashMap;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class OsrmService {
    private final RestTemplate restTemplate = new RestTemplate();

    public HashMap<String, Object> getRoute(String profile, double initLat, double initLon, double finLat, double finLon) {
        String ApiURL = "https://router.project-osrm.org/route/v1/" + profile + "/";
        String coordenadas = initLon + "," + initLat + ";" + finLon + "," + finLat;
        String url = ApiURL + coordenadas + "?overview=simplified&geometries=geojson&steps=false&alternatives=false";

        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        if (response.getStatusCode() == HttpStatus.OK) {
            try {
                ObjectMapper objectMapper = new ObjectMapper();
                HashMap<String, Object> jsonResponse = objectMapper.readValue(response.getBody(), HashMap.class);
                return jsonResponse;
            } catch (Exception e) {
                throw new RuntimeException("Error parsing JSON", e);
            }
        } else {
            throw new RuntimeException("Connection error with OSRM API");
        }
    }

    public HashMap<String, HashMap<String, Object>> getRoutes(double initLat, double initLon, double finLat, double finLon) {
        CompletableFuture<HashMap<String, Object>> carFuture = CompletableFuture.supplyAsync(() -> getRoute("driving", initLat, initLon, finLat, finLon));
        CompletableFuture<HashMap<String, Object>> bikeFuture = CompletableFuture.supplyAsync(() -> getRoute("bicycle", initLat, initLon, finLat, finLon));
        CompletableFuture<HashMap<String, Object>> footFuture = CompletableFuture.supplyAsync(() -> getRoute("foot", initLat, initLon, finLat, finLon));

        CompletableFuture.allOf(carFuture, bikeFuture, footFuture).join();

        HashMap<String, HashMap<String, Object>> results = new HashMap<>();
        try {
            results.put("car", carFuture.get());
            results.put("bike", bikeFuture.get());
            results.put("foot", footFuture.get());
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException("Error fetching routes", e);
        }

        return results;
    }
}
