let company_information = {
    "company" : "Black Rock",
    "industry" : "Technology",
    "department" : {
        "name" : "Software development",
        "location" : "Bakwaspur",
        "manager" : {
            "name" : "Mota bhai",
            "employee_Id" : 0o6,
            "contact" : {
                "email" : "motabhai@blackrock.com",
                "phone_no." : "7310166562",
            }

        }
    }

}

console.log(company_information);
console.log(company_information.department.manager.contact);
console.log(typeof company_information.department.manager.contact);