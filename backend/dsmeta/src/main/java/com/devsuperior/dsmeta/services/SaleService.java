package com.devsuperior.dsmeta.services;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

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

    public Page<Sale> findSales(String minDate, String maxDate , Pageable pageable){

        LocalDate today = LocalDate.now();

        LocalDate min = ObjectUtils.isEmpty(minDate) ? today.minusDays(365) : LocalDate.parse(minDate);
        LocalDate max = ObjectUtils.isEmpty(maxDate)? today : LocalDate.parse(maxDate);

        return saleRepository.findSales(min , max, pageable);
    }

}
