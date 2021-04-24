package com.example.testtablesmultiple;

import org.springframework.data.repository.CrudRepository;

public interface RepositoryTransaction extends CrudRepository<TransactionEntity,Long> {
}
