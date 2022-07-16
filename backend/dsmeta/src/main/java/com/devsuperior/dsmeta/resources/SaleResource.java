package com.devsuperior.dsmeta.resources;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.services.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(value = "/sales")
public class SaleResource {

    @Autowired
    private SaleService service;

    @GetMapping
    public Page<Sale> findSales(@RequestParam(value = "minDate") LocalDate minDate,
                                @RequestParam(value = "maxDate") LocalDate maxDate,
                                Pageable pageable){
        return service.findSales(minDate, maxDate, pageable);
    }
}
