package com.example.GRNTranfert;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path = "/apiGRN/transactions")
public class TransactionControler {

    @Autowired
    private TransactionRepository transactionRepository;

    @PostMapping(path = "/newtransaction")
    public @ResponseBody String addNewTransaction(@RequestParam String sender, @RequestParam String receiver){
        Transaction n = new Transaction();
        n.setAdressSender(sender);
        n.setAdressReceiver(receiver);
        transactionRepository.save(n);
        return "Transaction saved";
    }

    @GetMapping(path = "/getallTransactions")
    public @ResponseBody Iterable<Transaction> getAllTransactions(){
        return transactionRepository.findAll();
    }

}
