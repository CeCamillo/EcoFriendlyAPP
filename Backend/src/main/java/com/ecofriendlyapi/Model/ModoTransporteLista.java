package com.ecofriendlyapi.Model;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ModoTransporteLista {
    private List<ModoTransporte> modosTransporte;

    public ModoTransporteLista() {
        modosTransporte = new ArrayList<>();

        modosTransporte.add(new ModoTransporte("Carro", 0.12));
        modosTransporte.add(new ModoTransporte("Moto", 0.08));
        modosTransporte.add(new ModoTransporte("Ônibus", 0.07));
        modosTransporte.add(new ModoTransporte("Trem", 0.04));
        modosTransporte.add(new ModoTransporte("Metrô", 0.03));
        modosTransporte.add(new ModoTransporte("Bicicleta", 0));
        modosTransporte.add(new ModoTransporte("Caminhada", 0));
    }
    public Boolean RemoverModoTransporte(String nomeModo) {
        for (int i = 0; i < modosTransporte.size(); i++) {
            ModoTransporte modoTransporte = modosTransporte.get(i);

            if (modoTransporte.getNomeModo().equalsIgnoreCase(nomeModo)) {
                modosTransporte.remove(i);
                return true;
            }
        }
        return false;
    }

    public ModoTransporte ProcurarModoTransporte(String nomeModo) {
        for (int i = 0; i < modosTransporte.size(); i++) {
            ModoTransporte modoTransporte = modosTransporte.get(i);

            if (modoTransporte.getNomeModo().equalsIgnoreCase(nomeModo)) {
                return modoTransporte;
            }
        }
        return null;
    }
}
