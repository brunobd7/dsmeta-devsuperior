package com.devsuperior.dsmeta.services;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    public List<Sale> findSales(){
        return saleRepository.findAll();
    }

    public Page<Sale> findSales(LocalDate minDate, LocalDate maxDate ,Pageable pageable){

      if(Objects.isNull(minDate))
          minDate = LocalDate.now();

      if(Objects.isNull(maxDate))
          maxDate = LocalDate.now();

        return saleRepository.findSales(minDate, maxDate, pageable);
    }

}
