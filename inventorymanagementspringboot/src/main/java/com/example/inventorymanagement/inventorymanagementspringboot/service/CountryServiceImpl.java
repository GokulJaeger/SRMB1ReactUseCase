package com.example.inventorymanagement.inventorymanagementspringboot.service;

import java.util.List;
import javax.transaction.Transactional;
import com.example.inventorymanagement.inventorymanagementspringboot.model.Country;
import com.example.inventorymanagement.inventorymanagementspringboot.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class CountryServiceImpl implements CountryService {
	
	@Autowired
	private CountryRepository repo;

	@Override
	public List<Country> getCountries() {
		return repo.findAll();
	}

}
