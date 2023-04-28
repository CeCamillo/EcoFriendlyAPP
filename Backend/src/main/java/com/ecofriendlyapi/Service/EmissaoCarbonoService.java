package com.ecofriendlyapi.Service;

import com.ecofriendlyapi.Model.ModoTransporte;
import com.ecofriendlyapi.Model.ModoTransporteLista;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class EmissaoCarbonoService {
    private ModoTransporteLista modoTransporteLista;
    @Autowired
    public EmissaoCarbonoService(ModoTransporteLista modoTransporteLista) {
        this.modoTransporteLista = modoTransporteLista;
    }

    public double emissaoCarbono(ModoTransporte modoTransporte, double distancia) {
        return modoTransporte.getEmissaoPorKM() * distancia;
    }

    public ModoTransporte procurarTransporte(String nomeModo) {
        return modoTransporteLista.ProcurarModoTransporte(nomeModo);
    }
}
