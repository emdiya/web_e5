/*
    JQuery គឺជា​បណ្តាល័យ JavaScript ​ដែល​ ផ្តល់នូវប្រភេទវត្ថុប្រើប្រាស់ជាច្រើនសម្រាប់
    យកមកបង្កើតវេបផេកដែលអាចប្រែប្រួលខ្លួនដោយប្រើ
    ធនធានរបស់ម៉់ាស៊ីនអ្នកទន្សនា ។

    * ចំណាំរាល់កូដ​​ JQuery តែងតែផ្តើមសញ្ញា​ $

    Jquery ready event
    ជាព្រិត្តិការណ៍កំណត់ថាកូដដំណើរ​ការនៅពេលវេបផេកដំណើរការរួចរាល់
    ពោលគឺ អត្ដបទ រូបភាព​ បញ្ជី តារាង​ វីឌីអូ​ដែលមាននៅក្នុងផេក broswer
    បានដោតឡូតរួចរាល់ ។

    របៀបសរសេរ​ ready event
    ទម្រង់ធម្មតា
    $(document).ready(function(){
            កូដត្រូវដំណើរ;
    });

    ដើម្បីប្រើ jQueryប្រាស់​ត្រូវ
    ក.​ប្រើធាតុ​​​ script​​ ដើម្បីភ្ជាប់ទៅកាន់ឯកសារបណ្តាល័យ  jQuery
    ខ បង្កើតឯកសារ​ JavaScript ថ្មីមួយសម្រាប់សរសេរកូដ​ jQuery
    គ​​​ ប្រើធាតុ  Script ដើម្បីភ្ជាប់ទៅកាន់ឯកសារ​​ JavaScriptទើបបានបង្កើត
    ឃ​ ផ្តើមសរសេរក្នុងេកសារ JavaScript     j​​ដោយសារ​ jQuery ready event

    jQuery events
    $(selector).ឈ្មោះ event(function(បញ្ជីបារ៉ាម៉ែត្របើមាន){

    }); 

     $(selector).on("ឈ្មោះ event"",function(បញ្ជីបារ៉ាម៉ែត្របើមាន){

    });


    .html() ទាញយកតម្លៃជា​​html
    .html("កូដhtml")កែតម្លៃជា​​html
    .text()ទាយយកតម្លៃជាខ្លឹមសារ
    .text(ខ្លឹមសារថ្មី)កែតម្លៃ
    .atlr("ឈ្មោះ")ទាយយកតម្លៃគុណលក្ខណៈ
    .atlr("ឈ្មោះatrribute","តម្លៃថ្មី")កែគុណលក្ខណៈ
    .css("ឈ្មោះproperty") ទាយយកតម្លៃរបស់​ css property
    .css("ឈ្មោះផើproperty","តម្លៃថ្មី")​កែតម្លៃរបស់ css property
    .val()​ទាយឮញយកតម្លៃរបស់ធាតុនៅក្នុងសំណុំបែបបទ (form)
    .val("")​កែតម្លៃរបស់ធាតុឋិតនៅក្នុងសំណុំបែបបទ​ (form)





*/​

$(function(){
    document.write("<h1> jQuery ready eveny is up! </h1>");
});