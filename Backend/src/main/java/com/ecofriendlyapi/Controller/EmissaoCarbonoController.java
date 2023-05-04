package com.ecofriendlyapi.Controller;

import com.ecofriendlyapi.Model.ModoTransporte;
import com.ecofriendlyapi.Model.ModoTransporteLista;
import com.ecofriendlyapi.Service.EmissaoCarbonoService;
import com.ecofriendlyapi.Service.OsrmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.stream.Collectors;

@RestController
public class EmissaoCarbonoController {
    private EmissaoCarbonoService emissaoCarbonoService;

    @Autowired
    private OsrmService osrmService;

    @Autowired
    private ModoTransporteLista modoTransporteLista;

    @Autowired
    public EmissaoCarbonoController(EmissaoCarbonoService emissaoCarbonoService) {
        this.emissaoCarbonoService = emissaoCarbonoService;
    }

    @GetMapping("/emissao")
    public Map<String, Object> getEmissaoCarbono(
            @RequestParam("initLat") double srcLat,
            @RequestParam("initLon") double srcLon,
            @RequestParam("finLat") double destLat,
            @RequestParam("finLon") double destLon
    ) {
        HashMap<String, Object> responses = new HashMap<>();

        for (String profile : Arrays.asList("driving", "foot", "cycling")) {
            Map<String, Object> rota = osrmService.getRoute(profile, srcLat, srcLon, destLat, destLon);
            Double distancia = ((List<Map<String, Object>>) rota.get("routes"))
                    .stream()
                    .map(route -> (Double) ((Map<String, Object>) ((List<Map<String, Object>>) route.get("legs")).get(0)).get("distance"))
                    .findFirst()
                    .orElse(0.0);

            List<ModoTransporte> modosComEmissao = modoTransporteLista.getModosTransporte().stream()
                    .map(modo -> {
                        double emissaoTotalRota = distancia * modo.getEmissaoCarbono() / 1000;
                        return new ModoTransporte(modo.getNomeModo(), emissaoTotalRota);
                    })
                    .collect(Collectors.toList());

            Map<String, Object> resultado = new HashMap<>();
            resultado.put("ModosTransporte", modosComEmissao);
            resultado.put("RespostaOSRM", rota);

            responses.put(profile, resultado);
        }

        return responses;
    }
}