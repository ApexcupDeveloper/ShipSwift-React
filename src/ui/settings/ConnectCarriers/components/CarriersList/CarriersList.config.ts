import { AmazonImage, ApcImage, AustraliaPostImage, CanadaPostImage, DhlExpressImage, DpdImage, DpdLocalImage, DeutschePostImage, FedExImage, HermesImage, ParcelforceImage, PostNlImage, RoyalMailImage, UpsImage, UspsImage, RoyalMailClickDropImage  } from '../../../../../assets/images';
import { AppRoutes } from '../../../../app/api';

export const adminCarriers = [
    {
        key: 'carrier0',
        item: {
            name: 'Test',
            description: 'This is a test carrier used by Admins only. This should only be seen by users with Admin roles.',
            image: ApcImage,
            account: 'Test'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.Test,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.Test
    },
    {
        key: 'carrier1',
        item: {
            name: 'APC',
            description: 'APC Overnight account, direct integration.',
            image: ApcImage,
            account: 'APC'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.APC,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.APC
    },
    {
        key: 'carrier2',
        item: {
            name: 'Australia Post',
            description: 'This is a description.',
            image: AustraliaPostImage,
            account: 'AustraliaPost'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.AustraliaPost,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.AustraliaPost
    },
    {
        key: 'carrier3',
        item: {
            name: 'Canada Post',
            description: 'This is a description.',
            image: CanadaPostImage,
            account: 'CanadaPost'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.CanadaPost,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.CanadaPost
    },
    {
        key: 'carrier4',
        item: {
            name: 'DHL Express',
            description: 'DHL Express account, direct integration.',
            image: DhlExpressImage,
            account: 'DHL'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.DHL,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.DHL
    },
    {
        key: 'carrier5',
        item: {
            name: 'DPD',
            description: 'DPD UK account, direct integration.',
            image: DpdImage,
            account: 'DPD'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.DPD,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.DPD
    },
    {
        key: 'carrier6',
        item: {
            name: 'DPD Local',
            description: 'DPD Local UK account, direct integration.',
            image: DpdLocalImage,
            account: 'DPDLocal'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.DPDLocal,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.DPDLocal
    },
    {
        key: 'carrier7',
        item: {
            name: 'Deutsche Post',
            description: 'Deutsche Post, part of DHL group, direct integration.',
            image: DeutschePostImage,
            account: 'DeutschePost'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.DeutschePost,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.DeutschePost
    },
    {
        key: 'carrier8',
        item: {
            name: 'FedEx',
            description: 'FedEx Worldwide, direct integration.',
            image: FedExImage,
            account: 'Fedex'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.FedEx,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.FedEx
    },
    {
        key: 'carrier9',
        item: {
            name: 'Hermes',
            description: 'Hermes UK, direct integration.',
            image: HermesImage,
            account: 'Hermes'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.Hermes,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.Hermes
    },
    {
        key: 'carrier10',
        item: {
            name: 'Parcelforce',
            description: 'Parcelforce UK, direct integration.',
            image: ParcelforceImage,
            account: 'Parcelforce'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.Parcelforce,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.Parcelforce
    },
    // {
    //     key: 'carrier11',
    //     item: {
    //         name: 'PostNL',
    //         description: 'This is a description.',
    //         image: PostNlImage
    //     },
    //     status: false,
    //     path: AppRoutes.Settings.ConnectCarriers.Step1.PostNL,
    // },
    {
        key: 'carrier12',
        item: {
            name: 'Royal Mail',
            description: 'Royal Mail UK (legacy), direct integration.',
            image: RoyalMailImage,
            account: 'RoyalMail'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.RoyalMail,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.RoyalMail
    },
    {
        key: 'carrier13',
        item: {
            name: 'Royal Mail Click & Drop',
            description: 'Royal Mail Click & Drop, The easiest way to integrate RM, direct integration.',
            image: RoyalMailClickDropImage,
            account: 'RoyalMailClickAndDrop'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.RoyalMailClickDrop,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.RoyalMailClickDrop
    },
    {
        key: 'carrier14',
        item: {
            name: 'UPS',
            description: 'UPS Worldwide, direct integration.',
            image: UpsImage,
            account: 'UPS'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.UPS,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.UPS
    },
    {
        key: 'carrier15',
        item: {
            name: 'USPS',
            description: 'USPS, purchase USPS postage directly through ShipSwift.',
            image: UspsImage,
            account: 'USPS'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.USPS,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.USPS
    }
]

export const carriers = [
    {
        key: 'carrier1',
        item: {
            name: 'APC',
            description: 'APC Overnight account, direct integration.',
            image: ApcImage,
            account: 'APC'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.APC,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.APC
    },
    {
        key: 'carrier2',
        item: {
            name: 'Australia Post',
            description: 'This is a description.',
            image: AustraliaPostImage,
            account: 'AustraliaPost'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.AustraliaPost,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.AustraliaPost
    },
    {
        key: 'carrier3',
        item: {
            name: 'Canada Post',
            description: 'This is a description.',
            image: CanadaPostImage,
            account: 'CanadaPost'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.CanadaPost,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.CanadaPost
    },
    {
        key: 'carrier4',
        item: {
            name: 'DHL Express',
            description: 'DHL Express account, direct integration.',
            image: DhlExpressImage,
            account: 'DHL'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.DHL,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.DHL
    },
    {
        key: 'carrier5',
        item: {
            name: 'DPD',
            description: 'DPD UK account, direct integration.',
            image: DpdImage,
            account: 'DPD'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.DPD,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.DPD
    },
    {
        key: 'carrier6',
        item: {
            name: 'DPD Local',
            description: 'DPD Local UK account, direct integration.',
            image: DpdLocalImage,
            account: 'DPDLocal'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.DPDLocal,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.DPDLocal
    },
    {
        key: 'carrier7',
        item: {
            name: 'Deutsche Post',
            description: 'Deutsche Post, part of DHL group, direct integration.',
            image: DeutschePostImage,
            account: 'DeutschePost'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.DeutschePost,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.DeutschePost
    },
    {
        key: 'carrier8',
        item: {
            name: 'FedEx',
            description: 'FedEx Worldwide, direct integration.',
            image: FedExImage,
            account: 'Fedex'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.FedEx,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.FedEx
    },
    {
        key: 'carrier9',
        item: {
            name: 'Hermes',
            description: 'Hermes UK, direct integration.',
            image: HermesImage,
            account: 'Hermes'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.Hermes,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.Hermes
    },
    {
        key: 'carrier10',
        item: {
            name: 'Parcelforce',
            description: 'Parcelforce UK, direct integration.',
            image: ParcelforceImage,
            account: 'Parcelforce'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.Parcelforce,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.Parcelforce
    },
    // {
    //     key: 'carrier11',
    //     item: {
    //         name: 'PostNL',
    //         description: 'This is a description.',
    //         image: PostNlImage
    //     },
    //     status: false,
    //     path: AppRoutes.Settings.ConnectCarriers.Step1.PostNL,
    // },
    {
        key: 'carrier12',
        item: {
            name: 'Royal Mail',
            description: 'Royal Mail UK (legacy), direct integration.',
            image: RoyalMailImage,
            account: 'RoyalMail'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.RoyalMail,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.RoyalMail
    },
    {
        key: 'carrier13',
        item: {
            name: 'Royal Mail Click & Drop',
            description: 'Royal Mail Click & Drop, The easiest way to integrate RM, direct integration.',
            image: RoyalMailClickDropImage,
            account: 'RoyalMailClickAndDrop'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.RoyalMailClickDrop,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.RoyalMailClickDrop
    },
    {
        key: 'carrier14',
        item: {
            name: 'UPS',
            description: 'UPS Worldwide, direct integration.',
            image: UpsImage,
            account: 'UPS'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.UPS,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.UPS
    },
    {
        key: 'carrier15',
        item: {
            name: 'USPS',
            description: 'USPS, purchase USPS postage directly through ShipSwift.',
            image: UspsImage,
            account: 'USPS'
        },
        path: AppRoutes.Settings.ConnectCarriers.Step1.USPS,
        editPath: AppRoutes.Settings.ConnectCarriers.Step3.USPS
    }
]