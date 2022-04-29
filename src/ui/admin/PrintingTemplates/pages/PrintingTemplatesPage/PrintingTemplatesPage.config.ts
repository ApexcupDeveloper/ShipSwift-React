import { WordFunc } from '../../../../../assets/locale';
import { TemplateCardProps } from '../../components/TemplateCard/TemplateCard';

import {
  BatchPickingListPickToOrderImage,
  CommercialInvoiceImage,
  DeliveryLabelsImage,
  InvoiceAndShippingLabelImage,
  InvoiceAndShippingLabelLandscapeImage,
  PackingSlipShippingLabelLandscapeImage,
  PickingToteLabelsImage,
  PurchaseOrderReminderImage,
} from '../../images';

export const getTemplates = (word: WordFunc): TemplateCardProps[] => [
  {
    title: word('printing-templates.invoice.and.label'),
    templateImage: InvoiceAndShippingLabelImage,
  },
  {
    title: word('printing-templates.delivery.labels'),
    templateImage: DeliveryLabelsImage,
  },
  {
    title: word('printing-templates.invoice.and.shipping.label-landscape'),
    templateImage: InvoiceAndShippingLabelLandscapeImage,
  },
  {
    title: word('printing-templates.purchase.order.reminder'),
    templateImage: PurchaseOrderReminderImage,
  },
  {
    title: word('printing-templates.picking.tote.labels'),
    templateImage: PickingToteLabelsImage,
  },
  {
    title: word('printing-templates.packing.and.slip.shipping.label-landscape'),
    templateImage: PackingSlipShippingLabelLandscapeImage,
  },
  {
    title: word('printing-templates.batch.picking.list.pick.to.order'),
    templateImage: BatchPickingListPickToOrderImage,
  },
  {
    title: word('printing-templates.commercial.invoice'),
    templateImage: CommercialInvoiceImage,
  },
];
