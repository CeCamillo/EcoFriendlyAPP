package com.ecofriendlyapi.Model;

import java.util.ArrayList;
import java.util.List;

public class ModoTransporteLista {
    private List<ModoTransporte> modosTransporte;

    public ModoTransporteLista() {
        modosTransporte = new ArrayList<>();

        modosTransporte.add(new ModoTransporte("Carro", 0.12));
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
