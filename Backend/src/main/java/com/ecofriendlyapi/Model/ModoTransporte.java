package com.ecofriendlyapi.Model;

public class ModoTransporte {
    private String nomeModo;
    private double emissaoCarbono;

    public ModoTransporte(String nomeModo, double emissaoCarbono) {
        this.nomeModo = nomeModo;
        this.emissaoCarbono = emissaoCarbono;
    }

    public String getNomeModo() {
        return nomeModo;
    }

    public void setNomeModo(String nomeModo) {
        this.nomeModo = nomeModo;
    }

    public double getEmissaoCarbono() {
        return emissaoCarbono;
    }

    public void setEmissaoCarbono(double emissaoCarbono) {
        this.emissaoCarbono = emissaoCarbono;
    }
}
