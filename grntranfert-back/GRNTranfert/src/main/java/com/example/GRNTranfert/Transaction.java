package com.example.GRNTranfert;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String adressSender;
    private String adressReceiver;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAdressSender() {
        return adressSender;
    }

    public void setAdressSender(String adressSender) {
        this.adressSender = adressSender;
    }

    public String getAdressReceiver() {
        return adressReceiver;
    }

    public void setAdressReceiver(String adressReceiver) {
        this.adressReceiver = adressReceiver;
    }
}
