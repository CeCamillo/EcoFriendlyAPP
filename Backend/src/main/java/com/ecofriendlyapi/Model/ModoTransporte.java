package com.ecofriendlyapi.Model;

public class ModoTransporte {
    private String nomeModo;
    private double emissaoPorKM;

    public ModoTransporte(String nomeModo, double emissaoPorKM) {
        this.nomeModo = nomeModo;
        this.emissaoPorKM = emissaoPorKM;
    }

    public String getNomeModo() {
        return nomeModo;
    }

    public void setNomeModo(String nomeModo) {
        this.nomeModo = nomeModo;
    }

    public double getEmissaoPorKM() {
        return emissaoPorKM;
    }

    public void setEmissaoPorKM(double emissaoPorKM) {
        this.emissaoPorKM = emissaoPorKM;
    }
}
