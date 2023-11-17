/*
   static web page ឬ static web site
   វាមានព័ត៌មាននិងរចនាសម្ព័ន្ធឥតប្រែប្រួលដែលបានបង្កើតតាំងពីពេល
   សរសេរ HTML និង​ CSS។

   dynamic web page ឬ dynamic web site
   វាមានព័ត៌មាននិងរចនាសម្ព័ន្ធអាចផ្លាស់ប្តូរពេលវាកំពុងដំណើរការដោយប្រើ
   ធនធាននៃម៉ាស៊ីនអ្នកទស្សនា(client side ឬ front-end)
   ឬធនធាននៃមេម៉ាស៊ីន(server side ឬ back-end)។
   *ចំណាំ ធនធាននៃម៉ាស៊ីន(server resources រួមមាន​ hardwares,
      softwares, files, ឬ services)

   Javascript ភាសាដែលអាចផ្លាស់ប្តូរខ្លឹមសារឬរចនាសម្ព័ន្ធវេបផេក
   ពេលវេបផេកកំពុងដំណើរការដោយប្រើធនធាននៃម៉ាស៊ីនអ្នកទស្សនា។

   របៀបសរសេរ
      - inline script សរសេរស្គ្រីបក្នុងធាតុ
         <... on_event="javascript_code;">...</>
      - internal script សរសេរស្គ្រីបក្នុងវេបផេក
         <script type="text/javascript">
            javascript_code;
         </script>
      - external script សរសេរស្គ្រីបក្រៅវេបផេកគឺក្នុងឯកសារjavascript
         <script type="text/javascript"
                         src="អាសយដ្ឋានឯកសារjavascript"></script>

      អថេរឬអញ្ញាត្ត variable ជាឈ្មោះបង្កើតឡើងដើម្បីផ្ទុកទិន្នន័យត្រូវប្រើបណ្តោះអាសន្ន។

      ឈ្មោះអថេរត្រូវផ្តើមដោយអក្សរនិងមានន័យតាមទិន្នន័យដែលផ្ទុកព្រមទាំងមិនអាចមាន
      សញ្ញាមួយចំនួនដូចជា ដកឃ្លា(white spaces)ុ, ដុល្លារ ។ល។
      
      របៀបបង្កើត
         var ឈ្មោះអថេរ = តម្លៃដំបូង; 
      ឬ 
         let ឈ្មោះអថេរ = តម្លៃដំបូង;

      app = function + function + ... + function
      app = object + object + ... + object
            (class, property, method, event)

      class ជាពុម្ពសម្រាប់ប្រើបង្កើត​ object ។​ ផ្សំចេញពី​ Property(is data store temporary(used RAM)) ជាធាតុផ្សំទី១ and Method
      document object = html document (web page)

      document.getElementById(អាយឌី) ជ្រើសយកធាតុដែលស្គាល់អាយឌី
      document.getElementByTagName(ឈ្មោះ) ជ្រើសយកធាតុមួយប្រភេទដែលស្គាល់ឈ្មោះដូចជា a, span ។ល។
      document.getElementByClassName(ថ្នាក់) ជ្រើសយកធាតមួយ​ ឬ​ ច្រើន ដែលថិតក្នុងថ្នាក់បានបញ្ជាក់

      ក្រោយពីជ្រើសរើសធាតុដោយប្រើ​ getElementById, getElementByTagName, getElementByClassName នោះអាចផ្លាស់ប្តូរធាតុដោយប្រើ​ 
      properties or methods​ ដូចខាងក្រោម
         + element.textContent: ខ្លឺមសារ  សម្រាប់ប្តូរ​ខ្លឹមសារថិតណៅចន្លោះស្លាកផ្តើមនិងស្លាកបញ្ជប់នៃធាតុ
         + element.attribute = តម្លៃ​  សម្រាប់ប្តូរតម្លៃគុណលក្ខណនៃធាតុ
         + element.style.property = តម្លៃ​  សម្រាប់ប្តូរតម្លៃនៃការរចនានៃលក្ខណនៃការរចនាដែលប្រៀបដូចទៅនឹង property:value in CSS


*/