package com.example.testtablesmultiple;


import javax.persistence.*;
//Ce fichier permet de mettre en place la table transactions :
/*
+----------+--------------+------+-----+---------+----------------+
| Field    | Type         | Null | Key | Default | Extra          |
+----------+--------------+------+-----+---------+----------------+
| id       | bigint       | NO   | PRI | NULL    | auto_increment |
| amount   | int          | YES  |     | NULL    |                |
| receiver | varchar(255) | YES  |     | NULL    |                |
| sender   | varchar(255) | YES  |     | NULL    |                |
+----------+--------------+------+-----+---------+----------------+
 */

@Entity
@Table(name = "transactions")
public class TransactionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Long id;

    @Column(name = "sender")
    String senderAdress;

    @Column(name = "receiver")
    String receiverAdress;

    @Column(name="amount")
    Integer amount;

    // les setters et les getters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSenderAdress() {
        return senderAdress;
    }

    public void setSenderAdress(String senderAdress) {
        this.senderAdress = senderAdress;
    }

    public String getReceiverAdress() {
        return receiverAdress;
    }

    public void setReceiverAdress(String receiverAdress) {
        this.receiverAdress = receiverAdress;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }
}
