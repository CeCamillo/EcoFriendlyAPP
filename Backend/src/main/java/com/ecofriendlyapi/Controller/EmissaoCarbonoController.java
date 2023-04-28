package com.ecofriendlyapi.Controller;

import com.ecofriendlyapi.Model.ModoTransporte;
import com.ecofriendlyapi.Model.ModoTransporteLista;
import com.ecofriendlyapi.Service.EmissaoCarbonoService;
import com.ecofriendlyapi.Service.OsrmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
        Map<String, Object> rota = osrmService.getRoute(srcLat, srcLon, destLat, destLon);

        Double distancia = ((List<Map<String, Object>>) rota.get("routes"))
                .stream()
                .flatMap(route -> ((List<Map<String, Object>>) route.get("legs")).stream())
                .collect(Collectors.summingDouble(leg -> (Double) leg.get("distance")));

        List<ModoTransporte> modosComEmissao = new ArrayList<>();
        for (ModoTransporte modo : modoTransporteLista.getModosTransporte()) {
            double emissaoTotalRota = distancia * modo.getEmissaoPorKM() / 1000;
            ModoTransporte modoComEmissao = new ModoTransporte(modo.getNomeModo(), emissaoTotalRota);
            modosComEmissao.add(modoComEmissao);
        }


        Map<String, Object> resultado = new HashMap<>();
        resultado.put("ModosTransporte", modosComEmissao);
        resultado.put("RespostaOSRM", rota);

        return resultado;
    }
}
