$('input[name="calc_form_organization"]').change(function(){
    calc();
});

$('select[name="calc_type_taxation"]').change(function(){
    calc();
});

$('select[name="calc_incoming_documents"]').change(function(){
    calc();
});

$('select[name="calc_implementation_documents"]').change(function(){
    calc();
});

$('input[name="calc_number_employees_staff"]').on('input', function(){
    calc();
});

calc();



function calc() {
    var calc_form_organization = $('input[name="calc_form_organization"]:checked').val();
    var calc_type_taxation = $('select[name="calc_type_taxation"]').val();
    var calc_incoming_documents = Number($('select[name="calc_incoming_documents"]').val());
    var calc_implementation_documents = Number($('select[name="calc_implementation_documents"]').val());
    var calc_number_employees_staff = Number($('input[name="calc_number_employees_staff"]').val());
    
    if (calc_form_organization == 'ИП' && calc_type_taxation == 'ОСН') {
        var price_1 = 6000;
    }else if (calc_form_organization == 'ИП' && calc_type_taxation == 'УСН "доходы"') {
        var price_1 = 1000;
    }else if (calc_form_organization == 'ИП' && calc_type_taxation == 'УСН "доход минус расход"') {
        var price_1 = 2000;
    }else if (calc_form_organization == 'ИП' && calc_type_taxation == 'ЕНВД') {
        var price_1 = 1000;
    }else if (calc_form_organization == 'ООО' && calc_type_taxation == 'ОСН') {
        var price_1 = 6000;
    }else if (calc_form_organization == 'ООО' && calc_type_taxation == 'УСН "доходы"') {
        var price_1 = 1000;
    }else if (calc_form_organization == 'ООО' && calc_type_taxation == 'УСН "доход минус расход"') {
        var price_1 = 3000;
    }else if (calc_form_organization == 'ООО' && calc_type_taxation == 'ЕНВД') {
        var price_1 = 2000;
    }

    if (calc_number_employees_staff == 1) {
        var price_one_staff = 1000;
    }else if (calc_number_employees_staff > 1) {
        var price_one_staff = 300;
    }else if (calc_number_employees_staff < 1) {
        var price_one_staff = 0;
    }
    var full_price = price_1 + calc_incoming_documents + calc_implementation_documents + (calc_number_employees_staff * price_one_staff);

    console.log(full_price);

    $('[data-calc-result]').text(full_price);
}