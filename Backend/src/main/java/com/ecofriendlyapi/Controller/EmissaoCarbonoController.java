package com.ecofriendlyapi.Controller;

import com.ecofriendlyapi.Model.ModoTransporte;
import com.ecofriendlyapi.Service.EmissaoCarbonoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class EmissaoCarbonoController {
    private EmissaoCarbonoService emissaoCarbonoService;

    @Autowired
    public EmissaoCarbonoController(EmissaoCarbonoService emissaoCarbonoService) {
        this.emissaoCarbonoService = emissaoCarbonoService;
    }

    @GetMapping("/emissao")
    public Map<String, Object> getEmissaoCarbono(@RequestParam("distancia") double distancia, @RequestParam("transporte") String nomeModo) {
        ModoTransporte modoTransporte = emissaoCarbonoService.procurarTransporte(nomeModo);
        double emissaoCarbono = emissaoCarbonoService.emissaoCarbono(modoTransporte, distancia);

        Map<String, Object> response = new HashMap<>();
        response.put("Emissão", emissaoCarbono);
        response.put("Distancia", distancia);
        response.put("Modo de transporte", nomeModo);

        return response;
    }
}
