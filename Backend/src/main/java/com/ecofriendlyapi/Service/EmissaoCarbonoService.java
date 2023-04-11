package com.ecofriendlyapi.Service;

import com.ecofriendlyapi.Model.ModoTransporte;

public class EmissaoCarbonoService {
    public double emissaoCarbono(ModoTransporte modoTransporte, double distancia) {
        return modoTransporte.getEmissaoPorKM() * distancia;
    }
}
