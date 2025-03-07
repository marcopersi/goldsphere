import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome",
      "yourPortfolio": "Portfolio",
      "productname": "Product Name",
      "productRequest": "Product Orders",
      "references": "Reference Data",
      "apiDocs": "API Docs",
      "products": "Products",
      "product": "Product",
      "producttypes": "Product Types",
      "producttype": "Product Type",
      "weight": "Weight",
      "purchaseDate": "Purchase Date",
      "seller": "Seller",
      "custody": "Custody",
      "id": "ID",
      "name": "Name",
      "location": "Location",
      "createdat": "Created at",
      "updatedat": "Updated at",
      "iso_code": "ISO Code",
      "referenceDataManagement": "Reference Data Management",
      "metals": "Metals",
      "custodians": "Custodians",
      "countries": "Countries",
      "producer": "Producer",
      "issuingcountry": "Issuing Country",
      "price": "Price",
      "year": "Year",
      "unitofmeasure": "Unit of Measure",     
      "fineweight": "Fine Weight",
      "apiDocsDescription": "Here you can find the API documentation for our services.",
      "endpoints": "Endpoints",
      "getPortfolio": "GET /portfolio - Retrieve your portfolio data",
      "getProductRequest": "GET /product-request - Retrieve product request data",
      "getReferenceData": "GET /references - Retrieve reference data",
      "getAPIDocs": "GET /api-docs - Retrieve API documentation",
      "orderstatus": "Order Status",
      "user": "User",
      "custodyservice": "Custody Service",
      "totalprice": "total price",
      "quantity": "Quantity",
      "metal": "Metal",
      "purchasepriceperunit": "Paid price per unit",
      "purchasedate": "Buying Date",
      "checkout": "Checkout",
      "total": "Total Purchase",
      "delete": "Delete",
      "select": "Select",
      "countdown": "Reload price(s) in",
      "custodyservicename": "Custody Service",
      "fee": "Fee",
      "paymentfrequency": "Payment Frequency",
      "cancel": "Cancel",
      "confirm": "Confirm",
      "buy": "Buy",
      "processOrder": "Process Order",
      "errorDeletingOrder": "Error deleting order",
      "errorProcessingOrder": "Error processing order",
      "orderProcessed": "Order processed to status: {{status}}",
      "trustedsourcing": "Gold provenance certificate",
      "goldprovenancestatement": "Do you want to have a certified provenance of the Gold in your products? This service is provided by the Bullion Integrity Ledger. It costs you a premium of 1%",
    }
  },
  de: {
    translation: {
      "welcome": "Willkommen",
      "yourPortfolio": "Ihr Portfolio",
      "productname": "Produkt",
      "productRequest": "Produkt Orders",
      "references": "Referenzdaten",
      "apiDocs": "API-Dokumentation",
      "products": "Produkte",
      "product": "Produkt",
      "productTypes": "Produkt Typen",
      "producttype": "Produkt Typ",
      "weight": "Gewicht",
      "purchaseDate": "Kaufdatum",
      "seller": "Verkäufer",
      "custody": "Verwahrung",
      "name": "Name",
      "location": "Standort",
      "createdat": "Erstellt am",
      "updatedat": "Aktualisiert am",
      "iso_code": "ISO-Code",
      "referenceDataManagement": "Verwaltung der Referenzdaten",
      "metals": "Metalle",
      "metal": "Metall",
      "custodians": "Verwahrstellen",
      "countries": "Länder (Ausgabe)",
      "producer": "Hersteller",
      "issuingcountry": "Ausgabeland",      
      "price": "Preis",
      "year": "Jahr",
      "unitofmeasure": "Maßeinheit",
      "fineweight": "Feingewicht",
      "apiDocsDescription": "Hier finden Sie die API-Dokumentation für unsere Dienste.",
      "endpoints": "Endpunkte",
      "getPortfolio": "GET /portfolio - Abrufen Ihrer Portfoliodaten",
      "getProductRequest": "GET /product-request - Abrufen von Produktanfragedaten",
      "getReferenceData": "GET /references - Abrufen von Referenzdaten",
      "getAPIDocs": "GET /api-docs - Abrufen der API-Dokumentation",
      "orderstatus": "Bestellstatus",
      "user": "Benutzer",
      "custodyservice": "Verwahrung",
      "totalprice": "Gesamtpreis",
      "quantity": "Menge",
      "purchasepriceperunit": "Kaufpreis pro Einheit",
      "purchasedate": "Kaufdatum",
      "checkout": "Checkout",
      "total": "Total",
      "delete": "Löschen",
      "select": "Selektion",
      "countdown": "Preis(e) neu laden in",
      "custodyServiceName": "Verwahrungsdienst",
      "fee": "Gebühr",
      "paymentfrequency": "Fälligkeit",
      "cancel": "Abbrechen",
      "confirm": "Bestätigen",
      "buy": "Kaufen",
      "processOrder": "Bestellung prozessieren",
      "errorDeletingOrder": "Fehler beim Löschen der Bestellung",
      "errorProcessingOrder": "Fehler beim Verarbeiten der Bestellung",
      "orderProcessed": "Order prozessiert zu {{status}}",
      "trustedsourcing": "Zertifizierte Gold Herkunft",
      "goldprovenancestatement": "Möchten Sie eine zertifizierte Herkunft des Goldes von Ihrem Produkt? Dieser Service wird vom Bullion Integrity Ledger angeboten. Er kostet Sie einen Aufschlag von 1%"
    }
  },
  fr: {
    translation: {
      "welcome": "Bienvenue",
      "yourPortfolio": "Votre Portefeuille",
      "productname": "Produit",
      "productRequest": "Demande de Produit",
      "references": "Données de Référence",
      "apiDocs": "Docs API",
      "products": "Produits",
      "weight": "Poids",
      "purchaseDate": "Date d'Achat",
      "seller": "Vendeur",
      "custody": "Garde",
      "id": "ID",
      "name": "Nom",
      "location": "Emplacement",
      "createdat": "Créé le",
      "updatedat": "Mis à jour le",
      "iso_code": "Code ISO",
      "referenceDataManagement": "Gestion des Données de Référence",
      "metals": "Métaux",
      "custodians": "Dépositaires",
      "countries": "Pays",
      "productTypes": "Types de Produit",
      "producttype": "Type de Produit",
      "producer": "Fabricant",
      "issuingcountry": "Pays Émetteur",
      "price": "Prix",
      "year": "Année",
      "unitofmeasure": "Unité de Mesure",
      "fineweight": "Poids Fin",
      "apiDocsDescription": "Vous trouverez ici la documentation API pour nos services.",
      "endpoints": "Points de terminaison",
      "getPortfolio": "GET /portfolio - Récupérer les données de votre portefeuille",
      "getProductRequest": "GET /product-request - Récupérer les données de demande de produit",
      "getReferenceData": "GET /references - Récupérer les données de référence",
      "getAPIDocs": "GET /api-docs - Récupérer la documentation API",
      "orderstatus": "Statut de la commande",
      "user": "Utilisateur",
      "custodyservice": "Service de garde",
      "totalprice": "Prix total",
      "quantity": "Quantité",
      "purchasepriceperunit": "Prix d'achat par unité",
      "purchasedate": "Date d'achat",
      "checkout": "Acheter",
      "total": "Total",
      "delete": "Effacer",
      "select": "Sélectionner",
      "countdown": "Recharger le prix dans",
      "custodyServiceName": "Service de garde",
      "fee": "Frais",
      "paymentfrequency": "Paiement",
      "cancel": "Annuler",
      "confirm": "Confirmer",
      "buy": "Acheter",
      "processOrder": "Processer la commande",
      "errorDeletingOrder": "Erreur lors de la suppression de la commande",
      "errorProcessingOrder": "Erreur lors du traitement de la commande",
      "orderProcessed": "Commande traitée au statut: {{status }}",
      "trustedsourcing": "Certificat de provenance de l'or",
      "goldprovenancestatement": "Voulez-vous avoir la provenance complète de l'or que vous achetez? Nous proposons un service pour suivre l'origine de l'or que vous achetez. Ce service est fourni par notre Bullion Integrity Ledger. Il vous coûte un supplément de 1%"
    }
  },
  es: {
    translation: {
      "welcome": "Bienvenido",
      "yourPortfolio": "Tu Portafolio",
      "productname": "Producto",
      "productRequest": "Solicitud de Producto",
      "references": "Datos de Referencia",
      "apiDocs": "Docs API",
      "products": "Productos",
      "weight": "Peso",
      "purchaseDate": "Fecha de Compra",
      "seller": "Vendedor",
      "custody": "Custodia",
      "id": "ID",
      "name": "Nombre",
      "location": "Ubicación",
      "createdat": "Creado el",
      "updatedat": "Actualizado el",
      "iso_code": "Código ISO",
      "referenceDataManagement": "Gestión de Datos de Referencia",
      "metals": "Metales",
      "custodians": "Custodios",
      "countries": "Países",
      "productTypes": "Tipos de Producto",
      "producttype": "Tipo de Producto",
      "producer": "Fabricante",
      "issuingcountry": "País Emisor",
      "price": "Precio",
      "year": "Año",
      "unitofmeasure": "Unidad de Medida",
      "fineweight": "Peso Fino",
      "apiDocsDescription": "Aquí puede encontrar la documentación de la API para nuestros servicios.",
      "endpoints": "Puntos finales",
      "getPortfolio": "GET /portfolio - Recuperar los datos de su portafolio",
      "getProductRequest": "GET /product-request - Recuperar datos de solicitud de producto",
      "getReferenceData": "GET /references - Recuperar datos de referencia",
      "getAPIDocs": "GET /api-docs - Recuperar documentación de la API",
      "orderstatus": "Estado del pedido",
      "user": "Usuario",
      "custodyservice": "Servicio de custodia",
      "totalprice": "Precio total",
      "quantity": "Cantidad",
      "purchasepriceperunit": "Precio de compra por unidad",
      "purchasedate": "Fecha de compra",
      "checkout": "Comprar",
      "total": "Total",
      "delete": "Eliminar",
      "select": "Seleccionar",
      "countdown": "Recargar precio en",
      "custodyServiceName": "Servicio de custodia",
      "fee": "Tarifa",
      "paymentfrequency": "Pago",
      "cancel": "Cancelar",
      "confirm": "Confirmar",
      "buy": "Comprar",
      "processOrder": "Procesar pedido",
      "errorDeletingOrder": "Error al eliminar el pedido",
      "errorProcessingOrder": "Error al procesar el pedido",
      "orderProcessed": "Pedido procesado al estado: {{status}}",
      "trustedsourcing": "Certificado de procedencia del oro",
      "goldprovenancestatement": "¿Desea tener la procedencia completa del oro que compra? Ofrecemos un servicio para rastrear el origen del oro que compra. Este servicio es proporcionado por nuestro Bullion Integrity Ledger. Le cuesta un 1% adicional",
    }
  },
  it: {
    translation: {
      "welcome": "Benvenuto",
      "yourPortfolio": "Il Tuo Portafoglio",
      "productname": "Prodotto",
      "productRequest": "Richiesta di Prodotto",
      "references": "Dati di Riferimento",
      "apiDocs": "Docs API",
      "products": "Prodotto",
      "weight": "Peso",
      "purchaseDate": "Data di Acquisto",
      "seller": "Venditore",
      "custody": "Custodia",
      "id": "ID",
      "name": "Nome",
      "location": "Posizione",
      "createdat": "Creato il",
      "updatedat": "Aggiornato il",
      "iso_code": "Codice ISO",
      "referenceDataManagement": "Gestione dei Dati di Riferimento",
      "metals": "Metalli",
      "custodians": "Custodi",
      "countries": "Paesi",
      "productTypes": "Tipi di Prodotto",
      "producttype": "Tipo di Prodotto",
      "producer": "Produttore",
      "issuingcountry": "Paese Emittente",
      "price": "Prezzo",
      "year": "Anno",
      "unitofmeasure": "Unità di Misura",
      "fineweight": "Peso Lordo",
      "apiDocsDescription": "Qui puoi trovare la documentazione API per i nostri servizi.",
      "endpoints": "Punti finali",
      "getPortfolio": "GET /portfolio - Recupera i dati del tuo portafoglio",
      "getProductRequest": "GET /product-request - Recupera i dati della richiesta di prodotto",
      "getReferenceData": "GET /references - Recupera i dati di riferimento",
      "getAPIDocs": "GET /api-docs - Recupera la documentazione API",
      "orderstatus": "Stato dell ordine",
      "user": "Utente",
      "custodyservice": "Servizio di custodia",
      "totalprice": "Prezzo totale",
      "quantity": "Quantità",
      "purchasepriceperunit": "Prezzo di acquisto per unità",
      "purchasedate": "Data di acquisto",
      "checkout": "Acquistare",
      "total": "Total",
      "delete": "Elimina",
      "select": "Seleziona",
      "countdown": "Ricarica il prezzo in",
      "custodyservicename": "Servizio di custodia",
      "fee": "Tariffa",
      "paymentfrequency": "Pagamento",
      "cancel": "Annulla",
      "confirm": "Conferma",
      "buy": "Acquistare",
      "processOrder": "Processare l'ordine",
      "errorDeletingOrder": "Errore durante l'eliminazione dell'ordine",
      "errorProcessingOrder": "Errore durante l'elaborazione dell'ordine",
      "orderProcessed": "Ordine elaborato allo stato: {{status}}",
      "trustedsourcing": "Certificato di provenienza dell'oro",
      "goldprovenancestatement": "Vuoi avere la provenienza completa dell'oro che acquisti? Offriamo un servizio per tracciare l'origine dell'oro che acquisti. Questo servizio è fornito dal nostro Bullion Integrity Ledger. Ti costa un supplemento del 1%"
    }
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Standardsprache
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;