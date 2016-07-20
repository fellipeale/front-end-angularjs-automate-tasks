package br.com.cinq.sample.resource;

import java.util.List;
import java.util.ArrayList;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.cinq.sample.bean.Person;

/**
 * Service
 */
@RestController
@RequestMapping("/people")
public class PeopleResource {
	Logger logger = LoggerFactory.getLogger(PeopleResource.class);

	@RequestMapping(method = RequestMethod.GET)
	public List<Person> listPeople() {
		logger.debug("Received GET requisition");
        List<Person> people = new ArrayList<Person>();
		return generateFakeList();
	}
    
    private List<Person> generateFakeList() {
        Random rnd = new Random();
        String[] name = { "Adam", "Abe", "Maria", "Rose", "Mario", "Luigi"};
        String[] surname = { "Lincoln", "Franklin", "Jackson", "Miyazaki", "M'bebe"};
        List<Person> list=new ArrayList<Person>();
        
        for(int i=0;i<10;i++) {
            Person person = new Person();
            person.setId(i);
            person.setName(name[rnd.nextInt(name.length)] + " " + surname[rnd.nextInt(surname.length)]);
            person.setDisclosableInfo("Lorem ipsum dolor sit amet, consectetur adipiscing elit," + 
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini" +
            "m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo c"+
            "onsequat.");
            
            list.add(person);
        }
        
        return list;
    }
}
