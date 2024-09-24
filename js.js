// Retrieve saved contacts from LocalStorage
let contactData = JSON.parse(localStorage.getItem('contactData')) || [];
let currentCategory = null;  // Track current category

// Function to check if a contact already exists
function isContactExists(phone) {
    return contactData.some(contact => contact.phone === phone);
}

// Function to save a contact
function saveContact(name, phone, category, subcategory) {
    contactData.push({ name, phone, category, subcategory });
    localStorage.setItem('contactData', JSON.stringify(contactData));
    console.log("Contact saved: ", { name, phone, category, subcategory });
}

// Predefined contacts to be added under "Executive Contacts"
// Predefined contacts to be added under "Executive Contacts"
const newExecutiveContacts = [
    { name: "Shabhir Qadri", phone: "+92312-9832611", category: "Executive Contacts", subcategory: "None" },
    { name: "Muneer Nake ", phone: "+92301-6089348", category: "Executive Contacts", subcategory: "None" },
    { name: "Muhammad Ilyas ", phone: "+92311-6833148", category: "Executive Contacts", subcategory: "None" },
    { name: "Muhammad Haseeb ", phone: "+92344-7895822", category: "Executive Contacts", subcategory: "None" }
  ];
  
  // Predefined contacts to be added under "Shop Keepers Contacts"
  const newShopKeepersContacts = [
  ];
  
  // Predefined contacts to be added under "Suppliers Contacts"
  const newSuppliersContacts = [
    { name: "Akhtar", phone: "+92300-7123450", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Amjad wali protien farm", phone: "+92333-4441303", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Ansar Pindi", phone: "+92300-7641095", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Arshad Hafiz Nasrullah", phone: "+92301-6770783", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Behram Khan", phone: "+92300-7910165", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Mahar Ahsan", phone: "+92345-3599994", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Peer Ijaz Shah Bhakar", phone: "+92300-7184298", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Zia Kaleem", phone: "+92300-6087206", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Waseem Gangial", phone: "+92300-8609754", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Toseef Pindi", phone: "+92311-0551231", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Tahseen", phone: "+92300-6099585", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Tahir Talagang", phone: "+92335-6975780", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Shair khan", phone: "+92345-2227103", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Akhatar Munshi Khan", phone: "+92308-6398628", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Mahar Sarfraz", phone: "+92342-4619961", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Sajid Khan", phone: "+92308-6723137", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Sajid Daood Khail", phone: "+92300-8606928", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Sajid Peer Masood", phone: "+92301-7166523", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Malik Raheel Gunjal", phone: "+92345-2245000", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Peer Aziz Shah", phone: "+92302-7082178", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Oranzaib Broker", phone: "+92303-7512534", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Amirr Broker", phone: "+92301-5292774", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Haji Nazeer Baloch", phone: "+92300-6080891", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Mubarak Khaleel 1", phone: "+92300-9015006", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Mubarak Khaleel 2", phone: "+92302-8558032", category: "Suppliers Contacts", subcategory: "None" },
    { name: "khalid Thati", phone: "+92300-2025184", category: "Suppliers Contacts", subcategory: "None" },
    { name: "kamran Haji Ameen", phone: "+92300-5482089", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Imran labnan", phone: "+92346-0632692", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Hameed Protein Farm", phone: "+923000-6690569", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Ghulam Rasool Bhati", phone: "+92300-7962655", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Mahar Amir", phone: "+92307-6030451", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Mama Asmatullah ", phone: "+92301-8777475", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Mudasar Hasnain shah", phone: "+92333-7067979", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Malik Waseem Kabhar", phone: "+92301-6356905", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Kuddoos Khoshab", phone: "+92301-8605484", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Ata Muhammad Pahoor", phone: "+92300-6099747", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Umar Khan 1", phone: "+92345-5830574", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Umar Khan 2", phone: "+92312-5830574", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Ramzan Shaloli 1", phone: "+92301-7150540", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Ramzan Shaloli 2", phone: "+92346-7779039", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Munshi Adil", phone: "+92305-8765486", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Shah Jahan", phone: "+92300-6096026", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Azmat ullah " phone: "+92303-0565099", category: "Suppliers Contacts", subcategory: "None" }
      
  ];
  
  // Predefined contacts to be added under "Brokers Numbers"
  const newBrokersContacts = [
    { name: "Ramzan Shaloli Jazz", phone: "+92301-7150540", category: "Brokers Numbers", subcategory: "None" },
    { name: "Ramzan Shaloli Telenor", phone: "+92346-7779039", category: "Brokers Numbers", subcategory: "None" },
    { name: "Rana Habib Mithu", phone: "+92300-2667626", category: "Brokers Numbers", subcategory: "None" },
    { name: "Amir Broker", phone: "+92301-5292774", category: "Brokers Numbers", subcategory: "None" },
    { name: "Oranzaib Broker", phone: "+92303-7512534", category: "Brokers Numbers", subcategory: "None" }
  ];
  
  // Predefined contacts to be added under "Dera Shop Keepers Contact"
  const newDeraShopKeepersContacts = [
    { name: "Awais ", phone: "+92348-3750115", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Zafar", phone: "+92315-7493380", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Zawar", phone: "+92314-6928361", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Muhammad Zaman", phone: "+92315-9738143", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Shareef", phone: "+92314-9181778", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Kafayat Matra", phone: "+92341-5706600", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Nazeer Matra ", phone: "+92300-6699104", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Haneef", phone: "+92346-9491759", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Zulqarnan", phone: "+92341-3454500", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Nazim", phone: "+92344-9720508", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Shakeel", phone: "+92345-9875220", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Saleem Tanha ", phone: "+92311-7214542", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Eid khan", phone: "+92349-1936660", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Muneer Hazara", phone: "+92315-6857272", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Lal Rangpoor", phone: "+92346-5321610", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Arif 1", phone: "+92347-9738024", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Rahmatullah pahar por", phone: "+92345-9834097", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Kaka Pahar por", phone: "+92345-9870405", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Ramzan", phone: "+92332-7236527", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Ghulam Mustafa", phone: "+92345-9831665", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Safdar Hanain / Shahzaib", phone: "+92346-7863469", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Muhammad Haneef", phone: "+92346-9491759", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Bilal Qadri", phone: "+92345-9834187", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Sifa ", phone: "+92342-9376204", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Khalid", phone: "+92343-9367422", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Aziz / Arif", phone: "+92342-9590422", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Aziz 1", phone: "+92313-9811366", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" }
  ];
  
  // Predefined contacts to be added under "Local Contacts"
  const newLocalContacts = [
    { name: "Almadina Poultry New Colony", phone: "+92318-6837134", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "+92303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi jarnaili Road", phone: "+92316-1490086", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Malik Fiaz Poultry new colony", phone: "+92333-6836279", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Muhammad Ajmal urf Mana Chishti", phone: "+92304-6880336", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Akhtar CHP", phone: "+92331-7608676", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Sohail Sialvi kacha paka", phone: "+92302-4934474", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Fazli Almasoom ada", phone: "+92310-6525386", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Zafar Almasoom ada", phone: "+92300-4755899", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Foji Ali / Kawal Kalyar Chok", phone: "+92307-7140250", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Aziz ur rehman Dhaba Chok", phone: "+92314-6868366", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Raja Mushtaq Sadeeqi bazar", phone: "+92307-8899966", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Imran Qasai rail bazar", phone: "+92334-6138230", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Ikram urf akna watto chok", phone: "+92333-6822737", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Iltaf Temoor watto chok", phone: "+92307-6755663", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Qasim C2 colony", phone: "+92301-6358503", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Afzal Habib Mat", phone: "+92340-3754618", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Amir 4 No chungi ", phone: "+92302-1061941", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Saif ullah wapda", phone: "+92305-7372689", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Bismillah C2 colony", phone: "+92310-7676853", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Sajid CNG", phone: "+92305-2134763", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Irfan Quraishi chok", phone: "+92303-7683395", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Abdurrehman 4 no chungi", phone: "+92330-6763446", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Altaf karkhana", phone: "+92318-7909055", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Kaku Qasai almasoom", phone: "+92307-1486686", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Kamran Radhani Pump", phone: "+92304-4146383", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Sultan almadina shop", phone: "+92316-7460238", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Hasnain Wapda colony", phone: "+92306-6042939", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Mushtaq radhabi pump", phone: "+92311-7073024", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Sufi Waqqas khaglan wala mor", phone: "+92315-4973534", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Imran Kalyar Chok", phone: "+92326-1801520", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Haji Tusawar mainbazar fajro chok", phone: "+92318-6093626", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Hafiz shahzad almasoom ada", phone: "+92321-6901558", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Mumtaz C3 colony", phone: "+92333-6835301", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Shamsi kacha paka mor", phone: "+92313-5631349", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Yaseen rehmat ullah kacha paka mor", phone: "+92304-882143 1", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Aziz 4 no chungi", phone: "+92312-4853040", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Noor qari shafi madrssa", phone: "+92303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Tahir Bhanja Kundal", phone: "+92311-7358948", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Sohail Tufail kundal", phone: "+92313-7772125", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Waheed Fakhri Kalyar chok", phone: "+92300-3341886", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Ikram 4 no chungi", phone: "+92308-0296183", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Mazhar Dhaba chok", phone: "+92302-5412370", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Faizi Arain Hotel", phone: "+92307-4726271", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Asmatullah Wapda ", phone: "+92302-3957116", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Javeed ada", phone: "+92333-6836041", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Umar hayat / Khalid usmani", phone: "+92311-0704848", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Zakwan c2 colony ", phone: "+92304-1955115", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Gull meet / Shani /foji Mumtaz c2 colony ", phone: "+92318-4780488", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Fazal Tufail CNG", phone: "+92318-7909055", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Muhammad Haneef / Arif Chashlam Colony", phone: "+92334-7585488", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Irfan Watto chok", phone: "+92301-4966387", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Gulzar Sadedqi Bazar", phone: "+92302-2413146", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Ghafor CNG", phone: "+92313-8414866", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "", phone: "+92303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Kalo Qasai", phone: "+92335-7787248", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Mubhashir Chungi", phone: "+92319-6112882", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Mushtaq Qasai", phone: "+92348-4388698", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Asad Jheel", phone: "+92333-6822737", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Ghulam Akbar / ikram Ullah / Mati ullah", phone: "+92303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" }

  ];
  
  // Predefined contacts to be added under "Chakok Contacts"
  const newChakokContacts = [
    { name: "Hafiz Nazeer", phone: "+92343-6893868", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Maqsood", phone: "+92302-7979519", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Abid Tanveer", phone: "+92306-5392520", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Ghoos Junaid Puli", phone: "+92343-4189959", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Younas Khanqa", phone: "+92345-5820378", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Riaz 5 Chak", phone: "+92347-7847199", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Amjad 5 Chak", phone: "+92333-9829784", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Arif Faryad 5 Chak", phone: "+92307-4857120", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Riaz Mairaji", phone: "+92344-6876157", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Sadiq 4 Chak", phone: "+92300-4803745", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Mushtaq Goly Wala", phone: "+92301-6302330", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Hameed Sultany Wala", phone: "+92307-7013270", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Anwar Sultany Wala", phone: "+92304-4101339", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Atta Rasool", phone: "+92306-2539623", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" }
  ];
  
  // Predefined contacts to be added under "Employee Contacts"
  const newEmployeeContacts = [
    { name: "Asim Shah/Tasleem Shah", phone: "+92300-7870705", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Ajmal", phone: "+92318-6837134", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Ateeq", phone: "+92340-7488060", category: "Employee Contacts", subcategory: "None" },
    { name: "Waqas Ahmed Dhoon", phone: "+92306-9052240", category: "Employee Contacts", subcategory: "None" },
    { name: "Waqas Ahmed Jora", phone: "+92301-6067646", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Fawad Azam", phone: "+92304-8523826", category: "Employee Contacts", subcategory: "None" },
    { name: "Faraz Sadeeqi", phone: "+92312-5829431", category: "Employee Contacts", subcategory: "None" },
    { name: "Syed Najaf Ali Shah", phone: "+92342-9329803", category: "Employee Contacts", subcategory: "None" },
    { name: "Asim Khan", phone: "+92305-2443790", category: "Employee Contacts", subcategory: "None" },
    { name: "Nemat Ullah", phone: "+92332-5062164", category: "Employee Contacts", subcategory: "None" },
    { name: "Maqsood ul Hassan", phone: "+92319-6538656", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Bilal", phone: "+92316-7460238", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Irfan", phone: "+92310-7878370", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Haris", phone: "+92309-0295583", category: "Employee Contacts", subcategory: "None" },
    { name: "Ahtesham", phone: "+92320-0956752", category: "Employee Contacts", subcategory: "None" }
  ];
  
  // Predefined contacts to be added under "Drivers Contacts"
  const newDriversContacts = [
      { name: "Ustad Aziz", phone: "+92341-5766171", category: "Drivers Contacts", subcategory: "None" },
      { name: "Akmal", phone: "+92308-9664661", category: "Drivers Contacts", subcategory: "None" },
      { name: "Ustad Imran", phone: "+92311-7355919", category: "Drivers Contacts", subcategory: "None" },
      { name: "Ustad Riaz", phone: "+92306-2775685", category: "Drivers Contacts", subcategory: "None" },
      { name: "Khuram Armani", phone: "+92315-2082302", category: "Drivers Contacts", subcategory: "None" },
      { name: "Kosar Javed", phone: "+92306-1681156", category: "Drivers Contacts", subcategory: "None" },
      { name: "Muhammad Nazeer", phone: "+92306-8385834", category: "Drivers Contacts", subcategory: "None" },
      { name: "Muhammad Shafeeq", phone: "+92343-1783350", category: "Drivers Contacts", subcategory: "None" },
      { name: "Muhammad Sadeeq", phone: "+92310-5099551", category: "Drivers Contacts", subcategory: "None" },
      { name: "Naeem Bhnja", phone: "+92308-1298941", category: "Drivers Contacts", subcategory: "None" },
      { name: "Rafi Ullah", phone: "+92315-7058852", category: "Drivers Contacts", subcategory: "None" },
      { name: "Hammad Ahsan", phone: "+92318-4934471", category: "Drivers Contacts", subcategory: "None" },
      { name: "Muhammad Asif", phone: "+92304-4625540", category: "Drivers Contacts", subcategory: "None" },
      { name: "Muhammad Naeem CHP", phone: "+92342-7562414", category: "Drivers Contacts", subcategory: "None" },
      { name: "Muhammad Azhar", phone: "+92308-0517274", category: "Drivers Contacts", subcategory: "None" },
      { name: "Sana Ullah", phone: "+92303-6531181", category: "Drivers Contacts", subcategory: "None" },
      { name: "Muhammad Amir", phone: "+92314-0643070", category: "Drivers Contacts", subcategory: "None" },
      { name: "Muhammad Nasir", phone: "+92349-1225550", category: "Drivers Contacts", subcategory: "None" },
      { name: "Muhamamd Nasir", phone: "+92345-7722095", category: "Drivers Contacts", subcategory: "None" }
  ];
// Function to add predefined contacts ensuring no duplicates
function addUniqueContacts(contacts) {
    contacts.forEach(contact => {
        if (!isContactExists(contact.phone)) {
            saveContact(contact.name, contact.phone, contact.category, contact.subcategory);
        }
    });
}

// Add predefined contacts if not already present
addUniqueContacts(newExecutiveContacts);
addUniqueContacts(newShopKeepersContacts);
addUniqueContacts(newSuppliersContacts);
addUniqueContacts(newBrokersContacts);
addUniqueContacts(newDeraShopKeepersContacts);
addUniqueContacts(newLocalContacts);
addUniqueContacts(newChakokContacts);
addUniqueContacts(newEmployeeContacts);
addUniqueContacts(newDriversContacts);

// Attach event listener to the form submission
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const category = document.getElementById('category').value;
    const subcategory = document.getElementById('subcategory').value;

    if (!name || !phone || !category) {
        alert("Please fill in all required fields.");
        return;
    }

    if (isContactExists(phone)) {
        alert("This contact already exists.");
        return;
    }

    saveContact(name, phone, category, subcategory);

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('category').value = 'Executive Contacts';
    document.getElementById('subcategory').value = 'None';
    document.getElementById('subcategory').disabled = true;

    alert("Contact saved successfully!");
});

// Show subcategories only for Shop Keepers Contacts
document.getElementById("category").addEventListener("change", function () {
    const subcategoryElement = document.getElementById("subcategory");
    subcategoryElement.disabled = this.value !== "Shop Keepers Contacts";
});

// Function to view contacts by category or subcategory
function viewContacts(categoryOrSubcategory) {
    currentCategory = categoryOrSubcategory;
    document.getElementById("search-section").style.display = "block";
    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";

    const filteredContacts = contactData.filter(contact => 
        contact.category === categoryOrSubcategory || contact.subcategory === categoryOrSubcategory
    );

    if (!filteredContacts.length) {
        contactList.innerHTML = `<div class="alert alert-warning">No contacts found for ${categoryOrSubcategory}</div>`;
        return;
    }

    filteredContacts.forEach((contact, index) => {
        const phoneDisplay = contact.phone;
        const cleanedPhone = phoneDisplay.replace(/[^0-9]/g, '');

        const contactItem = document.createElement("div");
        contactItem.className = "d-flex justify-content-between align-items-center bg-light p-2 mb-2 border rounded";
        contactItem.innerHTML = `
            <span>${contact.name} - ${phoneDisplay}</span>
            <div>
                <a href="tel:${phoneDisplay}" class="btn call-btn me-2">Call</a>
                <a href="https://wa.me/${cleanedPhone}" class="btn whatsapp-btn me-2" target="_blank">WhatsApp</a>
                <button class="btn btn-warning me-2" onclick="editContact(${index})">Edit</button>
                <button class="btn delete-btn" onclick="deleteContact(${index})">Delete</button>
            </div>
        `;
        contactList.appendChild(contactItem);
    });

    const downloadButton = document.createElement("button");
    downloadButton.className = "btn btn-secondary mt-3";
    downloadButton.textContent = "Download Contacts";
    downloadButton.onclick = () => downloadContacts(categoryOrSubcategory, filteredContacts);
    contactList.appendChild(downloadButton);
}

// Function to search contacts within a category
function searchCategoryContacts() {
    const searchQuery = document.getElementById("category-search-input").value.toLowerCase();
    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";

    const filteredContacts = contactData.filter(contact => 
        (contact.category === currentCategory || contact.subcategory === currentCategory) &&
        (contact.name.toLowerCase().includes(searchQuery) || contact.phone.includes(searchQuery))
    );

    if (!filteredContacts.length) {
        contactList.innerHTML = `<div class="alert alert-warning">No contacts found.</div>`;
        return;
    }

    filteredContacts.forEach((contact, index) => {
        const contactItem = document.createElement("div");
        contactItem.className = "d-flex justify-content-between align-items-center bg-light p-2 mb-2 border rounded";
        contactItem.innerHTML = `
            <span>${contact.name} - ${contact.phone}</span>
            <div>
                <a href="tel:${contact.phone}" class="btn call-btn me-2">Call</a>
                <a href="https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}" class="btn whatsapp-btn me-2">WhatsApp</a>
                <button class="btn btn-warning me-2" onclick="editContact(${index})">Edit</button>
                <button class="btn delete-btn" onclick="deleteContact(${index})">Delete</button>
            </div>
        `;
        contactList.appendChild(contactItem);
    });
}

// Function to delete a contact
function deleteContact(index) {
    if (confirm("Are you sure you want to delete this contact?")) {
        const filteredContacts = contactData.filter(contact => 
            contact.category === currentCategory || contact.subcategory === currentCategory
        );
        contactData = contactData.filter(contact => 
            !(contact.category === currentCategory && contact.phone === filteredContacts[index].phone) &&
            !(contact.subcategory === currentCategory && contact.phone === filteredContacts[index].phone)
        );
        localStorage.setItem('contactData', JSON.stringify(contactData));
        alert("Contact deleted.");
        
        const contactList = document.getElementById("contact-list");
        contactList.removeChild(contactList.children[index]);
        
        if (contactList.children.length === 0) {
            contactList.innerHTML = `<div class="alert alert-warning">No contacts found for ${currentCategory}</div>`;
        }
    }
}

// Function to download contacts as CSV
function downloadContacts(categoryOrSubcategory, list) {
    let csvContent = "data:text/csv;charset=utf-8,Name,Phone\n";
    list.forEach(contact => {
        csvContent += `${contact.name},${contact.phone}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${categoryOrSubcategory}-contacts.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// Function to show Almadina Bank Accounts image
function viewAlmadinaBankAccounts() {
    const bankAccountsSection = document.getElementById('almadina-bank-accounts');
    bankAccountsSection.style.display = 'block';  // Show the section with the image
}
