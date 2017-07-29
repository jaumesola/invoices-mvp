console.log("Hello companies client");

Meteor.subscribe('theCompanies');
	
Template.companies.helpers({
    'company': function(){
        return CompaniesList.find();
    },
    
    'selectedClass': function(){
        if(this._id == Session.get('selectedCompany')){
            return "selected"
        }
    },
        
    'selectedCompany': function(){
        return CompaniesList.findOne({ _id: Session.get('selectedCompany') });
        }
});

Template.companies.events({
    'click .company': function(){
    		Session.set('selectedCompany', this._id);
    },
    'click .edit': function(){
		var selectedCompany = Session.get('selectedCompany');
        Meteor.call('updateCompany', selectedCompany); // FIXME get & update company fields 
    },
    'click .remove': function(){
		var selectedCompany = Session.get('selectedCompany');
        Meteor.call('removeCompany', selectedCompany);
    }
});

Template.addCompanyForm.events({
    'submit form': function(event){
        event.preventDefault();
        var companyTaxIdVar = String(event.target.companyTaxId.value);
        var companyNameVar = String(event.target.companyName.value);
        Meteor.call('createCompany', companyTaxIdVar, companyNameVar);
        event.target.companyTaxId.value = "";
        event.target.companyName.value = "";
    }
});

console.log("Bye companies client");