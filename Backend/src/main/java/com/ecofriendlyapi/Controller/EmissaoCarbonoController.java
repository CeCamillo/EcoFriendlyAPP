package com.ecofriendlyapi.Controller;

import com.ecofriendlyapi.Model.ModoTransporte;
import com.ecofriendlyapi.Service.EmissaoCarbonoService;
import com.ecofriendlyapi.Service.OsrmService;
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
    private OsrmService osrmService;

    @Autowired
    public EmissaoCarbonoController(EmissaoCarbonoService emissaoCarbonoService) {
        this.emissaoCarbonoService = emissaoCarbonoService;
    }

    @GetMapping("/emissao")
    public Map<String, Object> getEmissaoCarbono(@RequestParam("initLat") double srcLat, @RequestParam("initLon") double srcLon, @RequestParam("finLat") double destLat, @RequestParam("finLon") double destLon) {
         return osrmService.getRoute(srcLat,srcLon,destLat,destLon);
    }
}
