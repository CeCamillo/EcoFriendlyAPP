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
    public Map<String, Object> getEmissaoCarbono(@RequestParam("srcLat") double srcLat, @RequestParam("srcLon") double srcLon, @RequestParam("destLat") double destLat, @RequestParam("destLon") double destLon) {
         return osrmService.getRoute(srcLat,srcLon,destLat,destLon);
    }
}
