const settings = '/settings' as const;
const connectCarriers = `${settings}/connect-carriers` as const;
const emailTemplates = `${settings}/email-templates` as const;
const deliveryMethods = `${settings}/delivery-methods` as const;
const linkProducts = `${settings}/link-products` as const;
const connectStores = `${settings}/connect-stores` as const;
const customers = `${settings}/customers` as const;
const warehouses = `${settings}/warehouses` as const;
const users = `${settings}/users` as const;
const rules = `${settings}/rules` as const;
const billing = `${settings}/billing` as const;
const userDataSection = `${settings}/account` as const;

const orders = '/orders' as const;
// const shipments = '/shipments' as const;
const selectedOrder = `${orders}/:storeId/:id` as const;
const invoiceTemplate = `${orders}/invoice-template` as const;

const products = '/products' as const;
const selectedProduct = '/products/:id' as const;

const admin = '/admin' as const;

const dashboard = '/dashboard' as const;
const welcome = '/new/account/welcome' as const;

const support = '/support' as const;
const roadmap = `${support}/product-roadmap` as const;

const shipments = '/shipments' as const;
const selectedBatchShipment = '/batches/:id' as const;

export const AppRoutes = {
  CheckAssignments: { //TODO: Delete this 
    PopupWarning: `/check-assignments/popup-warning`
  },
  Dashboard: {
    Index: dashboard,
  },
  Orders: {
    Index: orders,
    Add: `${orders}/add`,
    Filters: `${orders}/filters`,
    InvoiceTemplate: { //TODO: Delete this
      Index: invoiceTemplate
    },
    Ship: {
      Step1: `${orders}/ship-1`,
      Step2: `${orders}/ship-2`
    },
    View: {
      Shipment: `${orders}/view`,
    },
    Order: {
      Index: selectedOrder,
      Edit: `${selectedOrder}/edit`,
      Ship: {
        Step1: `${selectedOrder}/ship/step-1`,
        Step2: `${selectedOrder}/ship/step-2`
      },
      Print: {
        Step1: `${selectedOrder}/print/step-1`,
        Step2: `${selectedOrder}/print/step-2`,
        Step3: `${selectedOrder}/print/step-3`,
        Step4: `${selectedOrder}/print/step-4`,
      },
      View: {
        Shipment: `${selectedOrder}/view`
      }
    },
    MultiShip: `${orders}/multi-ship`,
  },
  Shipments: {
    Index: `${shipments}/`,
    Batches: `${shipments}/batches`,
    Batch: {
      Index: `${shipments}${selectedBatchShipment}`,
    },
  },
  Products: {
    Index: products,
    Filters: `${products}/filters`,
    Add: `${products}/add`,
    Product: {
      Index: selectedProduct,
      Add: `${selectedProduct}/add`,
      EditImage: `${selectedProduct}/edit-image`
    }
  },
  /*Shipments: {
    Index: shipments,
    Batches: `${shipments}/batches`,
  },*/
  Admin: {
    Index: admin
  },
  Support: {
    Index: support,
    Roadmap: roadmap
  },
  Settings: {
    Index: settings,
    General: `${settings}/general`,
    // Account: `${settings}/account`,
    Account: {
      Index: userDataSection,
      TwoStepAuthentication: `${userDataSection}/two-step-authentication`
    },
    ConnectStores: {
      Index: connectStores,
      SetUpStore: {
        Index: `${connectStores}/setup`,
        Shopify: `${connectStores}/setup/shopify`,
        Amazon: `${connectStores}/setup/amazon`,
        WooCommerce: `${connectStores}/setup/woo-commerce`,
        SquareSpace: `${connectStores}/setup/squarespace`,
        BigCommerce: `${connectStores}/setup/big-commerce`,
        Magento2: `${connectStores}/setup/magento`,
        EBay: `${connectStores}/setup/ebay`,
        Etsy: `${connectStores}/setup/etsy`,
        AddedStore: `${connectStores}/setup/added`,
        FailedStore: `${connectStores}/setup/failed`,
        RaiseTicket: `${connectStores}/setup/raise-ticket`,
      },
      EditStore: {
        Index: `${connectStores}/edit`,
        Shopify: `${connectStores}/edit/shopify`,
        Amazon: `${connectStores}/edit/amazon`,
        WooCommerce: `${connectStores}/edit/woo-commerce`,
        SquareSpace: `${connectStores}/edit/squarespace`,
        BigCommerce: `${connectStores}/edit/big-commerce`,
        Magento2: `${connectStores}/edit/magento`,
        EBay: `${connectStores}/edit/ebay`,
        Etsy: `${connectStores}/edit/etsy`,
        AddedStore: `${connectStores}/edit/added`,
        FailedStore: `${connectStores}/edit/failed`,
        RaiseTicket: `${connectStores}/edit/raise-ticket`,
      },
    },
    ConnectCarriers: {
      Index: connectCarriers,
      Step1: {
        Index: `${connectCarriers}/step-1`,
        APC: `${connectCarriers}/step-1/apc`,
        Test: `${connectCarriers}/step-1/test`,
        AustraliaPost: `${connectCarriers}/step-1/australia-post`,
        CanadaPost: `${connectCarriers}/step-1/canada-post`,
        DHL: `${connectCarriers}/step-1/dhl`,
        DPD: `${connectCarriers}/step-1/dpd`,
        DPDLocal: `${connectCarriers}/step-1/dpd-local`,
        DeutschePost: `${connectCarriers}/step-1/deutsche-post`,
        FedEx: `${connectCarriers}/step-1/fed-ex`,
        Hermes: `${connectCarriers}/step-1/hermes`,
        Parcelforce: `${connectCarriers}/step-1/parcelforce`,
        PostNL: `${connectCarriers}/step-1/post-nl`,
        RoyalMail: `${connectCarriers}/step-1/royal-mail`,
        RoyalMailClickDrop: `${connectCarriers}/step-1/royal-mail-click-drop`,
        UPS: `${connectCarriers}/step-1/ups`,
        USPS: `${connectCarriers}/step-1/usps`,
      },
      Step2: {
        Index: `${connectCarriers}/step-2`,
        APC: `${connectCarriers}/step-2/apc`,
        Test: `${connectCarriers}/step-2/test`,
        AustraliaPost: `${connectCarriers}/step-2/australia-post`,
        CanadaPost: `${connectCarriers}/step-2/canada-post`,
        DHL: `${connectCarriers}/step-2/dhl`,
        DPD: `${connectCarriers}/step-2/dpd`,
        DPDLocal: `${connectCarriers}/step-2/dpd-local`,
        DeutschePost: `${connectCarriers}/step-2/deutsche-post`,
        FedEx: `${connectCarriers}/step-2/fed-ex`,
        Hermes: `${connectCarriers}/step-2/hermes`,
        Parcelforce: `${connectCarriers}/step-2/parcelforce`,
        PostNL: `${connectCarriers}/step-2/post-nl`,
        RoyalMail: `${connectCarriers}/step-2/royal-mail`,
        RoyalMailClickDrop: `${connectCarriers}/step-2/royal-mail-click-drop`,
        UPS: `${connectCarriers}/step-2/ups`,
        USPS: `${connectCarriers}/step-2/usps`,
      },
      Step3: {
        Index: `${connectCarriers}/step-3`,
        APC: `${connectCarriers}/step-3/apc`,
        Test: `${connectCarriers}/step-3/test`,
        AustraliaPost: `${connectCarriers}/step-3/australia-post`,
        CanadaPost: `${connectCarriers}/step-3/canada-post`,
        DHL: `${connectCarriers}/step-3/dhl`,
        DPD: `${connectCarriers}/step-3/dpd`,
        DPDLocal: `${connectCarriers}/step-3/dpd-local`,
        DeutschePost: `${connectCarriers}/step-3/deutsche-post`,
        FedEx: `${connectCarriers}/step-3/fed-ex`,
        Hermes: `${connectCarriers}/step-3/hermes`,
        Parcelforce: `${connectCarriers}/step-3/parcelforce`,
        PostNL: `${connectCarriers}/step-3/post-nl`,
        RoyalMail: `${connectCarriers}/step-3/royal-mail`,
        RoyalMailClickDrop: `${connectCarriers}/step-3/royal-mail-click-drop`,
        UPS: `${connectCarriers}/step-3/ups`,
        USPS: `${connectCarriers}/step-3/usps`,
      },
      Step4: {
        Index: `${connectCarriers}/step-4`,
        APC: `${connectCarriers}/step-4/apc`,
        Test: `${connectCarriers}/step-4/test`,
        AustraliaPost: `${connectCarriers}/step-4/australia-post`,
        CanadaPost: `${connectCarriers}/step-4/canada-post`,
        DHL: `${connectCarriers}/step-4/dhl`,
        DPD: `${connectCarriers}/step-4/dpd`,
        DPDLocal: `${connectCarriers}/step-4/dpd-local`,
        DeutschePost: `${connectCarriers}/step-4/deutsche-post`,
        FedEx: `${connectCarriers}/step-4/fed-ex`,
        Hermes: `${connectCarriers}/step-4/hermes`,
        Parcelforce: `${connectCarriers}/step-4/parcelforce`,
        PostNL: `${connectCarriers}/step-4/post-nl`,
        RoyalMail: `${connectCarriers}/step-4/royal-mail`,
        RoyalMailClickDrop: `${connectCarriers}/step-4/royal-mail-click-drop`,
        UPS: `${connectCarriers}/step-4/ups`,
        USPS: `${connectCarriers}/step-4/usps`,
      },
    },
    DeliveryMethods: {
      Index: deliveryMethods,
      Add: `${deliveryMethods}/add`,
    },
    PrintingTemplates: `${settings}/printing-templates`,
    EmailTemplates: {
      Index: emailTemplates,
      Edit: `${emailTemplates}/:id/edit`
    },
    PrintersScales: `${settings}/printer-and-scales`,
    Customers: {
      Index: customers,
      Add: `${customers}/add`,
      Selected: {
        Index: `${customers}/:id`
      },
    },
    Warehouses: {
      Index: warehouses,
      Add: `${warehouses}/add`,
      Selected: {
        Index: `${warehouses}/:id`
      },
    },
    Users: {
      Index: users,
      Add: `${users}/add`,
      Edit: `${users}/edit`
    },
    LinkProducts: {
      Index: linkProducts,
      Search: {
        Product: `${linkProducts}/search/product`
      }
    },
    Rules: {
      Index: rules,
      Add: `${rules}/add`,
    },
    Billing: {
      Index: billing,
      BillingSettings: {
        Index             : `${billing}/billing-settings`,
        selectPlan        : `${billing}/billing-settings/select-plan`,
        NewPaymentMethod  : `${billing}/billing-settings/new-payment-method`,
        AddNewCard        : `${billing}/billing-settings/add-new-card`,
        EditBillingAddress: `${billing}/billing-settings/edit-billing-address`,
      },
    }
  },
  Auth: {
    SignIn: '/sign-in',
    SignUp: '/sign-up',
    ResetPassword: '/reset/password',
    NewPassword: '/new/password',
    NewAccount: '/new/account',
    Welcome: {
      Index: welcome,
      Step1: {
        Index: `${welcome}/step-1`,
        Shopify: `${welcome}/step-1/shopify`,
        AmazonFinish: `${welcome}/step-1/amazon/finish`,
        WooCommerce: `${welcome}/step-1/woo-commerce`,
        SquareSpace: `${welcome}/step-1/squarespace`,
        BigCommerce: `${welcome}/step-1/big-commerce`,
        Magento2: `${welcome}/step-1/magento`,
        EBay: `${welcome}/step-1/ebay`,
        Etsy: `${welcome}/step-1/etsy`,
        AddedStore: `${welcome}/step-1/added`,
        FailedStore: `${welcome}/step-1/failed`,
        RaiseTicket: `${welcome}/step-1/raise-ticket`,
      },
      Step2: `${welcome}/step-2`,
      Step3: `${welcome}/step-3`,
    }
  },
  404: '/404',
} as const;
